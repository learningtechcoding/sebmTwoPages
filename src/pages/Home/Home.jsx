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
            <Bonuses />
            <LevelUpReward />   
            <MonthlyLeaderboard />   
           <Unlimitedbounus />
           <Dailycase />
        </div>
    );
}

export default Home;
