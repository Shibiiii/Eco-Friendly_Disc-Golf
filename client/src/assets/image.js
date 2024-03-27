import React from 'react';
import images from './images/';

function Imgs() {
    return(
        <div style={{
            height: 300
        }}>
            <img src= {images} alt='eco-friendly-discgolf-gear'></img>
        </div>
    )
}

export default Imgs;