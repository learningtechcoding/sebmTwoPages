import React from 'react';
import styles from './index.module.css'
import img from '../../../assets/images/how-to-register/section-4.png'
import card_2_img from '../../../assets/images/how-to-register/Rectangle (7).png'
import howlmanue from '../../../assets/images/Howlmanue.gif'

const SectionFour = () => {
    return (
        <div className='inner-container d-flex flex-column gap-5  '>

            <div className="container">

                <h2 className={`${styles.levelstyle} text-center`}>  Bonus <span>
                    Section</span></h2>
                <div className={`${styles.bonusmain}`}>
                    <div className="row pb-2">

                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <img src={howlmanue} alt="" className='w-100' />

                        </div>

                        <div className="col-md-8">


                            <div className={`${styles.rowstyle}  row`}>
                                <div className="col-6 col-md-4 col-lg-2 d-flex p-md-0">
                                    <div className={`${styles.levelstyleicons} text-center`}>
                                        <i class="fas fa-times"></i>
                                    </div>

                                    <div className={`${styles.levelstyleicons} ml-2 text-center`}>
                                        <i class="fab fa-discord"></i>
                                    </div>
                                    <div className={`${styles.levelstyleicons} ml-2 text-center`}>
                                        <i class="fab fa-discord"></i>
                                    </div>

                                    <p className={`${styles.levelstylep} ml-2 `}>provably Fair</p>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-md-0">
                                    <p className={`${styles.levelstylep} `}>Haulfig Gestelite  Fragen</p>
                                </div>
                                <div className="col-6 col-md-4 col-lg-2 p-md-0">
                                    <p className={`${styles.levelstylep}  `}>Datenshutzbestimmungen</p>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 d-flex  ">
                                    <p className={`${styles.levelstylep}  `}>Term Of Service</p>
                                    <p className={`${styles.levelstylep}  px-2 `}>Support</p>

                                </div>
                                <div className="col-6 col-md-4 col-lg-3 d-flex  ">
                                    <p className={`${styles.levelstylep}  `}>Blog</p>
                                    <p className={`${styles.levelstylep}  px-2 text-white `}><i class="fas fa-box"></i> Bonus</p>

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-4 d-flex ">
                                    <div>
                                        <i class="fas fa-home" style={{ 'color': '#56566e' }}></i>
                                    </div>

                                    <div className='px-3'>
                                        <i class="far fa-life-ring" style={{ 'color': '#56566e' }}></i>

                                        <select name="" id="" className='bg-transparent ' style={{ 'color': '#56566e', 'border': 'none' }}>
                                            <option value="">Spiele</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn text-white " style={{ 'backgroundColor': '#15121c' }}><i class="fab fa-bitcoin"></i> 0.00</button>
                                        <button type="button" class="btn  text-white" style={{ 'backgroundColor': '#ea2e32' }}><i class="fas fa-wallet"></i> Knonto</button>

                                    </div>
                                </div>
                                <div className="col-md-4 d-flex mt-3 mt-md-0">
                                    <button type="button" class="btn btn-primary position-relative text-white " style={{ 'backgroundColor': '#ea2e32', 'fontSize': '12px' }} ><i class="fas fa-gift me-2"></i>
                                        reward
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-black">
                                            0
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                    </button>

                                    <div className=" d-flex align-items-center"><i class="fas fa-bell mx-3"></i></div>

                                    <div className={`${styles.div}  `}  >
                                        <input type="checkbox"
                                            id="switch"
                                            className={`${styles.checkbox} `} />

                                        <label for="switch"
                                            className={`${styles.toggle}  `}    >
                                            <p className={`${styles.onoff}  `} >
                                                OFF   ON
                                            </p>
                                        </label>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>


                    </div>


                </div>
            </div>
            <p class="py-4 SectionOne_vistpara__wsG1Q text-center fs-4">Click the<span> Bonus Icon </span>up to and a PopUp will appear.</p>

        </div>
    );
}

export default SectionFour;
