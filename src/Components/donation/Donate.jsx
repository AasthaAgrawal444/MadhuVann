import React from 'react'
import './Donate.css';
import NgoCard from './NgoCard';
import NgoList from './NgoList';

const Donate = () => {
    // const [cards] = useState([
    //     {
    //         image: NgoImage,
    //         name: "Blue Cross of India",
    //         description: "They operates animal shelters, veterinary clinics, and advocacy programs nationwide",
    //     },
    //     {
    //         image: NgoImage,
    //         name: "WILDLIFE AND FOREST CONSERVATION TRUST OF INDIA",
    //         description: "heir work includes turning whale shark hunters into staunch protectors in Gujarat",
    //     }, 
    //     {
    //         image: NgoImage,
    //         name: "Preserve our future",
    //         description: "Akg is destroting our future",
    //     },
    //     {
    //         image: NgoImage,
    //         name: "Preserve our future",
    //         description: "Akg is destroting our future",
    //     },
    //     {
    //         image: NgoImage,
    //         name: "Preserve our future",
    //         description: "Akg is destroting our future",
    //     },
    //     {
    //         image: NgoImage,
    //         name: "Preserve our future",
    //         description: "Akg is destroting our future",
    //     },
    //     {
    //         image: NgoImage,
    //         name: "Preserve our future",
    //         description: "Akg is destroting our future",
    //     },
    //     {
    //         image: NgoImage,
    //         name: "Preserve our future",
    //         description: "Akg is destroting our future",
    //     },
    
    // ])
  return (
    <div>
        <div className='cards'>
        {NgoList.map((NgoList) => (
            <NgoCard 
                key={NgoList.id}
                image={NgoList.image}
                name={NgoList.name}
                description={NgoList.description}
            />
        ))
        }
        </div>
    </div>
  )
}

export default Donate
