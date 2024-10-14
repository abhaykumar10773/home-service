// only for check the work and how to show it 
import { motion } from "framer-motion";

const SlideComponent = () => {
  return (
    <div style={{ display: "flex", overflow: "hidden", width: "300px", height: "100px" }}>
      {/* First Box */}
      <motion.div
        animate={{ x: [300,-300] }} // Moves right to left, then reappears
        transition={{
          repeat: Infinity, // Infinite loop
          duration: 6, // Total time for a full cycle
          ease: "linear",
        }}
        style={{

          width: "100px",
          height: "100px",
          backgroundColor: "lightcoral",
          marginRight: "10px",
        }}
      />
      
      {/* Second Box */}
      <motion.div
        animate={{ x: [300,-300] }} // Second box moves the same way
        transition={{
          repeat: Infinity,
          duration: 6, 
          delay: 2, // Delay to create staggered effect
          ease: "linear",
        }}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
          marginRight: "10px",
        }}
      />
      
      {/* Third Box */}
      <motion.div
        animate={{ x: [300, -300] }} // Third box with staggered movement
        transition={{
          repeat: Infinity,
          duration: 6,
          delay: 4, // Delay so it appears last
          ease: "linear",
        }}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightgreen",
        }}
      />
    </div>
  );
};

export default SlideComponent;
