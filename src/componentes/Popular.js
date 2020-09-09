import React from 'react';
import Moviegrid from './MovieGrid.js';

class Popular extends React.Component {
    render(){
        return(
            <div><Moviegrid changeDetallePelicula={this.props.changeDetallePelicula} renderArray={this.props.arrayPopulares}/></div>
        )
    }
}
export default Popular;