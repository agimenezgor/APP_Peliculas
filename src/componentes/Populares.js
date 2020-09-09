import React from 'react';
import Moviegrid from './MovieGrid.js';

class Populares extends React.Component {
    render(){
        return(
            <div><Moviegrid changeDetallePelicula={this.props.changeDetallePelicula} renderArray={this.props.arrayPopulares}/></div>
        )
    }
}
export default Populares;