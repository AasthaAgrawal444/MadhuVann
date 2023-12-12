import React from 'react'
import './Donate.css';
import NgoCard from './NgoCard';
import NgoList from './NgoList';
import Navbar from '../homepage/Navbar';

const Donate = () => {
  return (
    <div>
    <Navbar />
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
