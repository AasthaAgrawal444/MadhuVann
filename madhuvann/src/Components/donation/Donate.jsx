import React from 'react'
import './Donate.css';
import NgoCard from './NgoCard';
import NgoList from './NgoList';
import NavDonate from './navDonation';

const Donate = () => {
  return (
    <div>
    <NavDonate />
        <div className='cards'>
        {NgoList.map((NgoList) => (
            <NgoCard 
                key={NgoList.id}
                image={NgoList.image}
                name={NgoList.name}
                description={NgoList.description}
                url={NgoList.url}
            />
        ))
        }
        </div>
    </div>
  )
}

export default Donate
