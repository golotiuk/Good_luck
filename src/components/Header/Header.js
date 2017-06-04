import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Link className={s.brand} to="/">
            <img src={require('./Logo.jpg')} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>Good luck!!!</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}><a href="/admin">Строим новый ЖК</a></h1>
            <p className={s.bannerDesc}>Надеемся что найдете тут свое счастье =)</p>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
