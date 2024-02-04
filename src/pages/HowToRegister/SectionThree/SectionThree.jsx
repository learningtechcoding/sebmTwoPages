import React from 'react';
import styles from './index.module.css'
import img from '../../../assets/images/how-to-register/section-3.png'

const SectionThree = () => {
    return (
        <div className="">
            <div data-aos="fade-up" data-aos-offset="100" className="container my-md-5 py-md-5">
                <div className="row gap-md-4 my-md-5 py-5">
                    <div className="col-md text-center">
                        <h1><span className="title text-primary">Rewards</span> TAB</h1>
                        <img src={img} className='mw-100 mb-3' alt="" />
                        <p>Click on the <span className="text-primary">Rewards Icon</span> next to your profile to get ti the reward section.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;
