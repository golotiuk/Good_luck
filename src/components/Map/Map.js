import React, {Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../App/App.scss'

 class  H1 extends Component {
  render() {
    return <div className={s.container}><h1>Lorem <span>ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cum deleniti doloremque incidunt! Accusamus
      ad asperiores, aspernatur at cum eligendi ipsa iusto odio odit possimus saepe sapiente sunt tenetur
      voluptatum!</span></h1></div>
  }
}
export default withStyles(H1, s);
