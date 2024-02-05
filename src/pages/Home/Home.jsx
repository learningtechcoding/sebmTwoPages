import React from 'react';
import Hero from './Hero/Hero';
import Bonuses from './Bonuses/Bonuses';
import LevelUpReward from './LevelUpReward/LevelUpReward';
import MonthlyLeaderboard from './MonthlyLeaderboard/MonthlyLeaderboard';
import  Unlimitedbounus from './Unlimitedbounus/Unlimitedbonus';
import  Dailycase from './DailyCase/Dailycase';

 

const Home = () => {
    return (
        <div>
            <Hero />
           

           <div className='levelstylefirstmain' >
           <Bonuses />
           </div>
            <div className='levelstyle'>
            <LevelUpReward />  
                </div> 

                <div className='levelstyle'> 
        <MonthlyLeaderboard />  
            </div>
            <div className='levelstyle'> 
           <Unlimitedbounus />
           </div>
           <div className='levelstyle'> 
           <Dailycase />
           </div>
        </div>
    );
}

export default Home;
