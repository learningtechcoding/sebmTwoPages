import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import styles from './index.module.css';
import card_1_img from '../../../assets/images/home/card-1.png';
import card_2_img from '../../../assets/images/5th.png';
import card_3_img from '../../../assets/images/home/card-3.png';
const  MonthlyLeaderboard = () => {
    return (
        <div className="container ">
        <div className="row pt-5">
            <div className="col-md-1"></div>
            <div className="col-md-6    my-2 align-self-center">

                <h3  className={`${styles.levelstyle}`}>Daily
<span>Cases</span></h3>

                <p className='py-4'>Claim a Daily Case every 24 hours. Prizes depending 
on your VIP Rank with Bonuses like:</p>

               
                <p className={`${styles.dashpara}`}>-  <span>Rakeboost</span>  Rakeback</p>
                <p className={`${styles.dashpara}`}>-  <span>Free Spins</span>  Rakeback</p>
                <p className={`${styles.dashpara}`}>-  <span>Weekly</span>  Rakeback</p>
                <p className={`${styles.dashpara2}`}>-  <span>Coins</span> & much more</p>
               

                {/* <div data-aos="fade-up" data-aos-delay="10" data-aos-offset="200" className={`card h-100`}>
                    
                 
                </div> */}
            </div>
            <div className="col-md-4    my-2">
            <img src={card_2_img} className={`   w-100 h-100`} alt="..." />
            </div>

            <div className="col-md-1"></div>

         
        </div>
    </div>
    );
}

export default MonthlyLeaderboard;
