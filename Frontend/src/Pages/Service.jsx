//import CTASection from "../Components/CTASection"
 import ss2image from "../assets/images/ss2image.png"
import ServiceCard from '../Components/serviceCard.jsx';
// import {ServiceContext} from '../Context/ServiceContext';
// import { useContext } from 'react';  
import clean from '../assets/images/clean.jpg'
import electricity from '../assets/images/electricity.jpg'
import cooking from '../assets/images/cooking.jpg'
import carpanter from '../assets/images/carpanter.jpg'
import assemble from '../assets/images/assemble.jpg'
import plumbering from '../assets/images/plumbering.jpg'
import Sswhyuseservice from "../Components/Sswhyuseservice.jsx";


const services = [
      {
        id: 1,
        title: 'Cleaning Service',
        description: 'Cleanliness goes beyond appearances – it’s about maintaining hygiene, reducing allergens, and creating a calming space.',
        image:  clean,
        path: '/cleaning',
      },
      {
        id: 2,
        title: 'Cooking Service',
        description: 'Busy day? Leave it to our expert chefs who will prepare healthy, delicious meals right in your kitchen.',
        image: cooking ,
        path: '/Cooking',
      },
      {
        id: 3,
        title: 'Plumbing Service',
        description: 'Leaky faucets or clogged drains? A small problem today could turn into a major issue tomorrow. ',
        image: plumbering,
        path: '/Plumbing',
      },
      {
        id: 4,
        title: 'Electrician Service',
        description: 'Safety comes first! From installing new fixtures to repairing faulty wiring, certified electricians ensure your home is safe.',
        image: electricity,
        path: '/Electrician',
      },
      {
        id: 5,
        title: 'carpanter',
        description: 'Get high-quality custom furniture and fixture repairs tailored to your needs. Our skilled carpenters deliver durable craftsmanship.',
        image: carpanter,
        path: '/carpanter',
      },
      {
        id: 6,
        title: 'assembly',
        description: ' Let our experts handle your furniture or equipment assembly quickly and efficiently. We ensure accurate setups, saving you time',
        image: assemble,
        path: '/assembly',
      },
      {
        id: 7,
        title: 'assembly',
        description:'Expert assemble to assemble your laguage ',
        image: assemble,
        path: '/assembly',
      },
     
    ];
export default function Service() {
  //  const {services} = useContext(ServiceContext)

  return ( 
    <>
      <div className="d-flex" style={{height: "20vw"}}>
       <img src={ss2image} alt="Service Worker" className="w-full shadow  bg-body" />
      </div>
     {/* all service related details  */}
      <div className="container  ">
     <div className="text-center fw-bold fs-1 text-success pt-4">
          <h1>Our Services</h1> 
      </div> 
      <div className="row text-center ">
        {services.map(services => (
          <div className="col-md-4 text-center" key={services.id}>
           <ServiceCard service={services} />
          </div>
        ))}
      </div>
    </div>
    
          <Sswhyuseservice/>
        
    </>
  )
}


