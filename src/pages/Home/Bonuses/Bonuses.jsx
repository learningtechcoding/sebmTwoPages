import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import styles from './index.module.css';
import card_1_img from '../../../assets/images/home/card-1.png';
import card_2_img from '../../../assets/images/bonusimg.png';
import card_3_img from '../../../assets/images/home/card-3.png';

const Bonuses = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='inner-container d-flex flex-column gap-5'>
            <h1 id='Bonuses' className={`${styles.title} text-center py-4`}>All Bonuses</h1>
            <div className="container">
                <div className="row ">
                    <div className="col-md-1"></div>
                    <div className="col-md-6   pe-5 my-2 align-self-center">

                        <h3  className={`${styles.levelstyle}`}>Level <span>Rewards</span></h3>

                        <p className='py-4'>With the new Level Rewards, you can claim multiple exclusive Instant, Daily, Weekly & Monthly Bonuses:</p>

                        <p className={`${styles.dashpara}`}>- Free <span>Daily Case</span></p>
                        <p className={`${styles.dashpara2}`}>- Exclusive<span>VIP Rewards</span></p>
                        <p className={`${styles.dashpara}`}>- <span>Instant, Daily, Weekly & Monthly</span> Rakeback</p>
                        <p className={`${styles.dashpara2}`}>- <span>Increased Vault</span>Limit</p>

                        <p className={`${styles.dashpara}`}>-Special <span>one Time Bonus</span> depending on Rank / Wager</p>


                        {/* <div data-aos="fade-up" data-aos-delay="10" data-aos-offset="200" className={`card h-100`}>
                            
                         
                        </div> */}
                    </div>
                    <div className="col-md-4    my-2">
                    <img src={card_2_img} className={`   w-100 h-100`} alt="..." />
                    </div>

                    <div className="col-md-1"></div>

                 
                </div>
            </div>
        </div>
    );
}

export default Bonuses;
