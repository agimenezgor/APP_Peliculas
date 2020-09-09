import React from 'react';
import Moviegrid from './MovieGrid.js';

class Upcoming extends React.Component {
    render(){
        return(
            <div><Moviegrid changeMovieDetail={this.props.changeMovieDetail} renderArray={this.props.arrayUpcoming}/></div>
        )
    }
}
export default Upcoming;