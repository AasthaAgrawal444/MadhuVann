import React from 'react'
import './Videos.css';
import VideoCard from './VideoCard';
import VideosList from './VideosList';
import Navbar from '../homepage/Navbar';

const Videos = () => {
  return (
    <div>
    <Navbar />
        <div className='cards'>
        {VideosList.map((VideoList) => (
            <VideoCard 
                key={VideoList.id}
                image={VideoList.image}
                url={VideoList.url}
                name={VideoList.name}
            />
        ))
        }
        </div>
    </div>
  )
}

export default Videos;
