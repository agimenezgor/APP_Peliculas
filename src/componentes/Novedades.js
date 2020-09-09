import React from 'react';
import Moviegrid from './MovieGrid.js';

class Novedades extends React.Component {
    render(){
        return(
            <div><Moviegrid changeDetallePelicula={this.props.changeDetallePelicula} renderArray={this.props.arrayNovedades}/></div>
        )
    }
}
export default Novedades;