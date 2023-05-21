import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-dark-subtle mt-4'>
            <h3 className='mb-3'>Q-Zone</h3>
            <div className='text-center'>
                <img src={qZone1} alt="Swimming Picture of kids" />
                <img src={qZone2} alt="Class picture of kids" />
                <img src={qZone3} alt="Playground Picture of kids" />
            </div>
        </div>
    );
};

export default QZone;