import React from 'react';
import styles from "./hero.module.css";
import MagicScrollButton from '../../../components/MagicScrollButton/MagicScrollButton';
import herobg from "../../../assets/images/bgbaner.png";
import diamond from "../../../assets/images/bannercircle.png";
import burnere from "../../../assets/images/burner.png";
import seven from "../../../assets/images/home/hero/seven.png";
import dice from "../../../assets/images/home/hero/dice.png";



const Hero = () => {
   

    return (

        <>

        <div>

            <img   className={`heroobanner w-100 h-100`} src={herobg} alt=""  style={{'position':'absolute'}}/>
            
<div style={{'position':'relative','top':'100px'}}>
    
<h1 data-aos="fade-down" className={`text-center   ${styles.title} `}> <span className="text-primary">Welcome to  <span className='fw-bold'> RambleRewards</span>
</span></h1>
        <p data-aos="fade-down" className={`text-center shortbannertext ${styles.shortbannertext} `}> <p>Find all the infos about</p> <span>H<img className={`img-fluid ${styles.burnerimg}`} src={burnere} alt="" /> WL</span></p>
        <a href='#Bonuses' className="d-flex justify-content-center mt-5">
            <MagicScrollButton />
        </a>

</div>
        </div>

            <div className={` inner-container`}>
        
        <img className={`img-fluid ${styles.diamond} ${styles.floatingIcon}`} src={diamond} alt="" />
        <img className={`img-fluid ${styles.bell} ${styles.floatingIcon}`} src={diamond} alt="" />
        <img className={`img-fluid ${styles.seven} ${styles.floatingIcon}`} src={diamond} alt="" />
        <img className={`img-fluid ${styles.dice} ${styles.floatingIcon}`} src={diamond} alt="" />
        
    </div>
        </>
      
    );
}

export default Hero;
