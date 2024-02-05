import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import styles from './index.module.css';
import card_1_img from '../../../assets/images/home/card-1.png';
import card_2_img from '../../../assets/images/3rd.png';
import card_3_img from '../../../assets/images/home/card-3.png';
const  MonthlyLeaderboard = () => {
    return (
        <div className="container ">
        <div className="row pt-5">
            <div className="col-md-1"></div>
            <div className="col-md-6    my-2 align-self-center"  data-aos="fade-down" data-aos-delay="30" data-aos-offset="200">

                <h3  className={`${styles.levelstyle}`}>Daily, Weekly & Monthly
Rakeback <span>Rakeback</span></h3>

                <p className='py-4'>On top of all the other Bonuses, you can claim Rakeback aswell:</p>

               
                <p className={`${styles.dashpara}`}>-  <span>Instant</span>  Rakeback</p>
                <p className={`${styles.dashpara}`}>-  <span>Daily</span>  Rakeback</p>
                <p className={`${styles.dashpara}`}>-  <span>Weekly</span>  Rakeback</p>
                <p className={`${styles.dashpara}`}>-  <span>Monthly</span>  Rakeback</p>
               

                {/* <div data-aos="fade-up" data-aos-delay="10" data-aos-offset="200" className={`card h-100`}>
                    
                 
                </div> */}
            </div>
            <div className="col-md-4    my-2"  data-aos="fade-up" data-aos-delay="10" data-aos-offset="200">
            <img src={card_2_img} className={`   w-100 h-100`} alt="..." />
            </div>

            <div className="col-md-1"></div>

         
        </div>
    </div>
    );
}

export default MonthlyLeaderboard;
