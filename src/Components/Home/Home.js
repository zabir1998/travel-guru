import React, { useState } from 'react';
import { fakeData } from '../../fakeData/fakeData';
import Destination from '../Destination/Destination';

const Home = () => {
    console.log(fakeData)
    const[destination,setdestination]=useState(fakeData)
    return (
        <div>
          
            <h3>
                {
                    destination.map(ds=> <Destination destination={ds}></Destination>)
                }
            </h3>
        </div>
    );
};

export default Home;