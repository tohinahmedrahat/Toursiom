import React from 'react';
import AllTour from '../AllTour/AllTour';
import Carosul from '../Carosul/Carosul';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Carosul></Carosul>
            <AllTour></AllTour>
        </div>
    );
};

export default Home;