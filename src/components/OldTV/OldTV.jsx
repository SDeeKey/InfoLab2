import React, { useState } from 'react';
import './OldTV.scss';

const OldTV = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = ['url(#image1)', 'url(#image2)', 'url(#image3)']; // Идентификаторы для использования в SVG

    const changeImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="television-wrapper">
            <svg width="600" height="400" viewBox="0 0 600 400" className="television">
                <defs>
                    <pattern id="image1" patternUnits="userSpaceOnUse" width="600" height="400">
                        <image href="gato.jpg" x="0" y="0" width="600" height="400" />
                    </pattern>
                    <pattern id="image2" patternUnits="userSpaceOnUse" width="600" height="400">
                        <image href="pict2.jpg" x="0" y="0" width="600" height="400" />
                    </pattern>
                    <pattern id="image3" patternUnits="userSpaceOnUse" width="600" height="400">
                        <image href="pict3.jpg" x="0" y="0" width="600" height="400" />
                    </pattern>
                </defs>
                <rect x="50" y="50" width="500" height="300" fill={images[imageIndex]} />
                <circle cx="550" cy="350" r="30" fill="red" className="change-button" onClick={changeImage} />
            </svg>
        </div>
    );
};

export default OldTV;
