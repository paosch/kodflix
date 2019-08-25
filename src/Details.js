import React from 'react';
import { Link } from 'react-router-dom';
import getShowsInfo from './getShowsInfo';


export default class Details extends React.Component {
  constructor(){
    super();
    this.state = {
      show: {}
    };
  }

  componentDidMount(){
    let showId = this.props.match.params.showId;
    let show = getShowsInfo()
      .find((show) => show.id === showId);

    this.setState({ show });
  }

  render(){
    return(
      <div>
        <h1>{this.state.show.name}</h1>
        <Link to='/'>Back to home page</Link>
      </div>
    )
  }
}
