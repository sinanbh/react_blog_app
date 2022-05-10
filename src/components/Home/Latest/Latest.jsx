import React from 'react';
import './Latest.css';
import LatestComponent from './LatestComponent';
import BlogData from '../../BlogData';

const Latest = () => {
    return (
        <div className='Latest'>
            <div className='latest-box'>
                <div className='latest-heading'>The Latest</div>
                <div className='latest-flex-container'>
                    {
                        BlogData.slice(3, 6).map(
                            (data, index) => (
                                <LatestComponent data={data} key={index} />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Latest;