import React from 'react';
import styles from './index.module.css'
 
import card_2_img from '../../../assets/images/how-to-register/Rectangle (6).png';
 

const SectionTwo = () => {
    return (
        <div className="">
            <div className="container ">
        <div className="row pt-5">
            <div className="col-md-1"></div>
         
            <div className="col-md-4    my-2"  data-aos="fade-up" data-aos-delay="10" data-aos-offset="200">
            <img src={card_2_img} className={`   w-100 h-100`} alt="..." />
            </div>
            <div className="col-md-6   p-md-5 my-2 align-self-center" data-aos="fade-up" data-aos-delay="10" data-aos-offset="200">

<h2 className={`${styles.levelstyle}`}> Register
 <span> Account </span></h2>

<p className={`py-4 ${styles.vistpara}`}>Register an Account by entering your credentials. Or choose the easy option and continue with Steam, Twitch or Google.</p>

<button className="btn btn-primary   text-white fw-bold" style={{ 'width': '300px' }}>REGISTER NOW</button>


</div>

            <div className="col-md-1"></div>

         
        </div>
    </div>
        </div>
    );
}

export default SectionTwo;
