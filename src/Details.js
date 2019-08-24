import React from 'react';
import { Link } from 'react-router-dom';


export default class Details extends React.Component {
  constructor(){
    super();
    this.state = {
      welcomeMessage: 'Hi, welcome to the details page'
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        welcomeMessage: 'The best is yet to come!'
      });
    }, 3000);
  }

  render(){
    return(
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <Link to='/'>Back to home page</Link>
      </div>
    )
  }
}
