 // it is not use anywhere ok 




 
//  import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ServiceContext } from '../Context/ServiceContext';

// const services = [
//       {
//         id: 1,
//         title: 'Cleaning Service',
//         description: 'Professional cleaning service for your home.',
//         image: 'path/to/cleaning.jpg',
//       },
//       {
//         id: 2,
//         title: 'Cooking Service',
//         description: 'Expert chefs to cook delicious meals.',
//         image: 'path/to/cooking.jpg',
//       },
//       {
//         id: 3,
//         title: 'Plumbing Service',
//         description: 'Reliable plumbing solutions for your needs.',
//         image: 'path/to/plumbing.jpg',
//       },
//       {
//         id: 4,
//         title: 'Electrician Service',
//         description: 'Certified electricians for safe installations.',
//         image: 'path/to/electrician.jpg',
//       },
//     ];

  export default function ServiceCard({ service }) {
     //  const {services} = useContext(ServiceContext)


    return (
      <div className='container'>
      <div className="card text-center m-3 mx-3 rounded" style={{ width: '24rem' }}>
        <img src={service.image} className="card-img-top h-28" alt={service.title} />
        <div className="card-body">
          <h1 className="card-title fs-3 fw-bold">{service.title}</h1>
          <p className="card-text">{service.description}</p>
          
          <Link to={`/Service/${service.path}`} className="btn btn-outline-success mt-3">
           Book now
        </Link>
        </div>
      </div>
      
      
</div>
    );
  }
 