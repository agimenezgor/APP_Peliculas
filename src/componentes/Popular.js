import React from 'react';
import Moviegrid from './MovieGrid.js';

class Popular extends React.Component {
    render(){
        return(
            <div><Moviegrid changeMovieDetail={this.props.changeMovieDetail} renderArray={this.props.arrayPopular}/></div>
        )
    }
}
export default Popular;