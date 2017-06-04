import React, {Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Admin.scss'
import {database} from '../../actions/firebase'

let count = 0

class Admin extends Component{
  constructor(){
    super();
    this.state = {
      data: null,
      build: {
        floor: {
          flat: ''
        }
      }
    }
    this.buildRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // getInitialState() {
  // return {
  //   building: this.props.building,
  //   floor: this.props.floor,
  //   flat: this.props.flat,
  //   }
  // }
  componentDidMount(){
    this.buildRef = database.ref('/build')
    this.buildRef.on('value', (snapshot)=>{
      this.setState({
        data: snapshot.val()
      })
    });
  }
  handleChange(event){
    const build = event.target.value;
    this.setState({
      build
    })
  }

  handleSubmit(event){
    event.preventDefault();
    count = count + 1;
    console.log(count);
    this.buildRef.push({number: this.state.build})
  }

  render(){
    const {build} = this.state.build;
    return <div className={s.container}>
      <h1>Hello!!!</h1>
      <form className='App-form' onSubmit={this.handleSubmit}>
        <input type="number" placeholder="number of building" value={build} onChange={this.handleChange} /><br/>
        <input type="number" placeholder="number of floor" /><br/>
        <input type="number" placeholder="number of flat" /><br/>
        <input type="submit" /><br/>
      </form>
    </div>
  }
}
export default withStyles(Admin, s);
