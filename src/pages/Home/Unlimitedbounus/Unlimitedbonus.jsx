import React from 'react';
import styles from './index.module.css';
 
 
import card_2_img from '../../../assets/images/4rth.png';
const LevelUpReward = () => {
    return (
        <div className="container my-md-5">
        <div className="row ">
            <div className="col-md-1"></div>

            <div className="col-md-4    my-2"  data-aos="fade-up" data-aos-delay="10" data-aos-offset="200">
            <img src={card_2_img} className={`   w-100 h-100`} alt="..." />
            </div>
            <div className="col-md-6   p-md-5   my-2 align-self-center"  data-aos="fade-down" data-aos-delay="10" data-aos-offset="200">

                <h3  className={`${styles.levelstyle}`}> Unlimited Deposit <span> Bonuses</span></h3>

                <p className='py-4'>Choose between a 1.5x, 2.5x & 3x Deposit Bonus on EVERY Deposit you do:</p>
                <p className={`${styles.dashpara}`}>-   Deposit Bonus <span> everytime </span></p>


                <p className={`${styles.dashpara2}`}>- Wager between  <span>20x-35x</span></p>

                <p className={`${styles.dashpara2}`}>- Max Bet:<span> 5% </span>   of your initial Deposit</p>
                
               
 

                
            </div>
          

            <div className="col-md-1"></div>

         
        </div>
    </div>
    );
}

export default LevelUpReward;
