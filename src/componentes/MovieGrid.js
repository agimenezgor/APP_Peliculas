import React from 'react';

class MovieGrid extends React.Component {
    mapArray = () => {
        return <React.Fragment>
        {this.props.renderArray.map((movie, index) => (
            <div id={movie.id} onClick={this.props.changeDetallePelicula} className="col-md-3 mb-5" key={index}>
                <div id={movie.id} className="border border-danger bg-info m-5 p-3 rounded-lg d-flex flex-column align-items-center justify-content-center" style={{maxHeight: '60vh', minHeight: '60vh', cursor: 'pointer'}}>
                    <img id={movie.id} className="d-block" src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="Imagen no encontrada" style={{maxHeight:'30vh', minHeight: '30vh'}}/>
                    <h4 id={movie.id} className="mt-2">{movie.title} ({movie.original_title})</h4>
                    <h5 id={movie.id} className="mt-2">Fecha de lanzamiento: {movie.release_date}</h5>
                    <h3 id={movie.id} className="mt-2 text-white">Puntuación: {movie.vote_average}</h3>
                </div> 
            </div>))}
        </React.Fragment>
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    {this.mapArray()}
                </div>
            </div>
        )
    }
}
export default MovieGrid;