import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import styles from './index.module.css';
import card_1_img from '../../../assets/images/home/card-1.png';
import card_2_img from '../../../assets/images/how-to-register/Rectangle (5).png';
import card_3_img from '../../../assets/images/home/card-3.png';

const SectionOne = () => {
    return (
        <div className='inner-container d-flex flex-column gap-5  '>
            <h1 id='Bonuses' className={`${styles.title} text-center py-4 `}>How to Register?</h1>
            <div className="container">
                <div className="row ">
                    <div className="col-md-1"></div>
                    <div className="col-md-6     pe-5 my-2 align-self-center" data-aos="fade-up" data-aos-delay="10" data-aos-offset="200">

                        <h2 className={`${styles.levelstyle}`}>Visit <span>
                            Howl.gg</span></h2>

                        <p className={`py-4 ${styles.vistpara}`}>Visit
                            <span> Howl.gg </span>
                            via my Link down bellow to be able to receive all
                            Bonuses. Make sure to click the Login Button at the top.</p>

                        <button className="btn btn-primary   text-white fw-bold" style={{ 'width': '300px' }}>VISIT HOWL</button>


                    </div>
                    <div className="col-md-4    my-2" data-aos="fade-down" data-aos-delay="10" data-aos-offset="200">
                        <img src={card_2_img} className={`   w-100 h-100`} alt="..." />
                    </div>

                    <div className="col-md-1"></div>


                </div>
            </div>
        </div>
    );
}

export default SectionOne;
