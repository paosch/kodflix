import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getShowsInfo from '../getShowsInfo';
import './Details.css';

export default class Details extends React.Component {
 constructor(){
   super();
   this.state = {
     show: {}
   };
 }

 componentDidMount(){
   fetch('/rest/shows')
     .then(res => res.json())
     .then(shows => {
        this.setState({ shows })
        let showId = this.props.match.params.showId;
        let show = shows
          .find((show) => show.id === showId);
        this.setState({ show });
      }).catch(error => console.log(error))
  }

 render(){
    if (this.state.show === undefined){
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div className='Details'>
          <h1>{this.state.show.name}</h1>
          <div className='container'>
            <div>
              {this.state.show.description}</div>
            <img
              src={this.state.show.image}
              alt={this.state.show.name} />
          </div>
          <Link to='/'>Back to home page</Link>
        </div>
      )
    }
  }
}
