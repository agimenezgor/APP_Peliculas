import React from 'react';
import Moviegrid from './MovieGrid.js';

class Upcoming extends React.Component {
    render(){
        return(
            <div><Moviegrid changeDetallePelicula={this.props.changeDetallePelicula} renderArray={this.props.arrayNovedades}/></div>
        )
    }
}
export default Upcoming;