import React from 'react';
import Qzone1 from '../../../assets/qZone1.png'
import Qzone2 from '../../../assets/qZone2.png'
import Qzone3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-secondary-subtle p-3 mt-4 text-center'>
            <h4 className='text-start'>Q-Zone</h4>
                <img src={Qzone1} />
                <img src={Qzone2} />
                <img src={Qzone3} />
        </div>
    );
};

export default QZone;