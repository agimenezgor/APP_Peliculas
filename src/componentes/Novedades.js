import React from 'react';
import Moviegrid from './MovieGrid.js';

class Novedades extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrayNovedades: props.arrayNovedades
        }
    }
    render(){
        return(
            <div><Moviegrid changeDetallePelicula={this.props.changeDetallePelicula} renderArray={this.state.arrayNovedades}/></div>
        )
    }
}
export default Novedades;