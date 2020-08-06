import React, { Component } from 'react';
//import Navigation from '../../molecules/Navigation/Navigation';
import HeroSection from '../../HeroSection';

class Landing extends Component {
  render() {
    return (
      <>
        <HeroSection
          bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1596087435/mack.network/fabien-moline-XaQXyRU9pgo-unsplash_pbfnzz.jpg"
          bgImageOpacity="1"
          size="lg"
          title="Mackintosh Network"
          buttonColor="success"
          buttonText="Login"
        />
      </>
    );
  }
}

export default Landing;
