import React, { Component } from 'react';
//import Navigation from '../../molecules/Navigation/Navigation';
import HeroSection2 from '../../HeroSection2';
import { SIGN_IN } from '../../../constants/routes'
import { navigateTo } from 'gatsby'
import FeaturesSection from '../../FeaturesSection'

class Landing extends Component {
  render() {
    return (
      <>
        <HeroSection2
          textColor="light"
          bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1596089148/mack.network/crisoforo-gaspar-hernandez-lMX5vchHvdo-unsplash-oaxaca_vbqo6r.jpg"
          bgImageOpacity="1"
          size="lg"
        />
        <FeaturesSection
          bg="light"
          textColor="dark"
          size="md"
          bgImage=""
          title="Features"
          subtitle="What's Available in Mackintosh Network"
/>
      </>
    );
  }
}

export default Landing;
