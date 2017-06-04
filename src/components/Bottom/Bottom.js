import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../App/App.scss';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';

class Bottom extends Component {

  render() {
    return (
      <div className={s.fee}>
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(Bottom, s);
