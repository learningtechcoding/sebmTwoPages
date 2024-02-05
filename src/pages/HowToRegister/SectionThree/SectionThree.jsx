import React from 'react';
import styles from './index.module.css'
import  card_2_img from '../../../assets/images/how-to-register/Rectangle (7).png'

const SectionThree = () => {
    return (
        <div className='inner-container d-flex flex-column gap-5  '>
        
        <div className="container">
            <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-6     pe-5 my-2 align-self-center" data-aos="fade-up" data-aos-delay="10" data-aos-offset="200">

                    <h2 className={`${styles.levelstyle}`}> Enter <span>
                    Code: Ramble777</span></h2>

                    <p className={`py-4 ${styles.vistpara}`}> You made it! Your last step is to enter Code
                        <span>"Ramble777"</span> . <br />
                        and you are good to go. Enjoy playing on Howl.gg</p>

                 

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

export default SectionThree;
