import React, { Component } from 'react';
//import Navigation from '../../molecules/Navigation/Navigation';
import HeroSection from '../../HeroSection';
import { SIGN_IN } from '../../../constants/routes'


class Landing extends Component {
  render() {
    return (
      <>
        <HeroSection
          textColor="light"
          bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1596087435/mack.network/fabien-moline-XaQXyRU9pgo-unsplash_pbfnzz.jpg"
          bgImageOpacity="1"
          size="lg"
          title="Mackintosh Network"
          buttonColor="success"
          buttonText="Login"
          buttonOnClick={() => {
            navigateTo(SIGN_IN);
          }}
        />
      </>
    );
  }
}

export default Landing;
