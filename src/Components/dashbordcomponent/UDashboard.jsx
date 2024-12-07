// Import necessary libraries and hooks
import { useState } from 'react';
import { motion } from 'framer-motion';

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        gender: 'Male',
        city: 'New York',
        area: 'Manhattan',
        zip: '10001',
        state: 'NY'
    });
    const [editableUserInfo, setEditableUserInfo] = useState({ ...userInfo });
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
    const [editableProfileImage, setEditableProfileImage] = useState(profileImage);

    // Handle input changes for editable user details
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableUserInfo({ ...editableUserInfo, [name]: value });
    };

    // Handle profile image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setEditableProfileImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    // Toggle editing mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            setEditableUserInfo(userInfo); // Load current details into editable state
            setEditableProfileImage(profileImage); // Load current image into editable state
        }
    };

    // Save changes
    const saveChanges = () => {
        setUserInfo(editableUserInfo); // Apply changes to userInfo
        setProfileImage(editableProfileImage); // Update the profile image
        setIsEditing(false); // Exit editing mode
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"
        >
            <h2 className="text-2xl font-bold mb-6 text-center">Profile Overview</h2>

            <div className="relative flex flex-col md:flex-row items-start">
                {/* Profile Image */}
                   <div className="flex-shrink-0 md:absolute md:right-0 md:top-0 md:m-6 md:text-center">
                     <label htmlFor="imageUpload" className="cursor-pointer">
                       <img
                          src={isEditing ? editableProfileImage : profileImage}
                          alt="Profile"
                         className="rounded w-60 h-60 object-cover border-2 border-gray-200 shadow-md"
                       />
                     </label>
           {isEditing && (
              <input
                 type="file"
                id="imageUpload"
                 accept="image/*"
                onChange={handleImageChange}
                className="hidden "
              />
    )}
</div>

                {/* User Details Form */}
                <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-2/3">
                    <div className="grid grid-cols-2 gap-4">
                        {/* User details fields */}
                        {Object.keys(userInfo).map((field) => (
                            <div key={field} className="form-group">
                                <label htmlFor={field} className="font-medium capitalize">
                                    {field}:
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        id={field}
                                        name={field}
                                        className="form-control mt-1 border border-gray-300 rounded-md p-2"
                                        value={editableUserInfo[field]}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <h4 className="form-control mt-1 border bg-slate-50  rounded-md p-2">{userInfo[field]}</h4>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Edit and Save Button */}
                    <div className="flex justify-end mt-6">
                        {isEditing ? (
                            <button
                                type="button"
                                onClick={saveChanges}
                                className="px-6 py-2 font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none"
                            >
                                Save Changes
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={toggleEdit}
                                className="px-6 py-2 font-medium text-white bg-gray-500 rounded-md shadow hover:bg-gray-600 focus:outline-none"
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default UserProfile;
