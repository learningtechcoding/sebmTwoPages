import React from 'react';
import styles from './index.module.css';
 
 
import card_2_img from '../../../assets/images/2nd.png';
const LevelUpReward = () => {
    return (
        <div className="container my-md-5">
        <div className="row ">
            <div className="col-md-1"></div>

            <div className="col-md-4    my-2"  data-aos="fade-up" data-aos-delay="10" data-aos-offset="200">
            <img src={card_2_img} className={`   w-100 h-100`} alt="..." />
            </div>
            <div className="col-md-6   p-md-5   my-2 align-self-center"  data-aos="fade-down" data-aos-delay="10" data-aos-offset="200">

                <h3  className={`${styles.levelstyle}`}>The <span>Vault</span></h3>

                <p className='py-4'>The new Vault System allows Players to store their Coins with  a extra feature:</p>

                <p className={`${styles.dashpara2}`}>- Store up to <span>10,000,000.00 Coins</span></p>

                <p className={`${styles.dashpara}`}>-  Deposit & Withdraw<span> Instantly </span></p>
                <p className={`${styles.dashpara2}`}>- <span>Earn 1% Interest</span> per month on every vault deposit</p>
                
               
 

                
            </div>
          

            <div className="col-md-1"></div>

         
        </div>
    </div>
    );
}

export default LevelUpReward;
