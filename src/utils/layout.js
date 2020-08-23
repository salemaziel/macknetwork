import React, { Component, Fragment } from 'react';

import Navigation from '../components/molecules/Navigation/Navigation';
import getFirebase, { FirebaseContext } from './Firebase';
import withAuthentication from './Session/withAuthentication';
import SEO from './SEO';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';

class Layout extends Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0]);

      this.setState({ firebase });
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <AppWithAuthentication {...this.props} />
      </FirebaseContext.Provider>
    );
  }
}

const AppWithAuthentication = withAuthentication(
  ({ hideNav, seo, children }) => (
    <Fragment>
      <SEO {...seo} />
      {!hideNav && <Navigation />}
      {children}
      {/*<Footer
      bg="success"
      textColor="light"
      size="lg"
      bgImage=""
      bgImageOpacity="1"
      logo="https://res.cloudinary.com/dexdumfqy/image/upload/v1598156762/mack.network/macknetwork-logo_hcuotz.png"
      description="Mack Network"
      copyright="Copyright Mackintosh Network"
      />*/}
      <Footer />

    </Fragment>
  ),
);

export default Layout;
