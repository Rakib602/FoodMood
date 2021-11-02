import React from 'react';
import Banner from './Banner';
import ClientReview from './ClientReview';
import Food from './FoodMenu/Food';
import OurMission from './OurMission/OurMission';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Food></Food>
            <OurMission></OurMission>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;