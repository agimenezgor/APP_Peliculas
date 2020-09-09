import React from 'react';

class MovieDetail extends React.Component {
    homePage = () =>{
        if(this.props.movie.homepage !== ''){
            window.open(this.props.movie.homepage)
        }
    }
    componentDidMount = () => {
        let arrayGenres =  this.props.movie.genres;
        let genres = 'Géneros: '
        for(let i = 0; i < this.props.movie.genres.length; i++){
            genres += ' '
            genres += arrayGenres[i].name;
            if(i !== this.props.movie.genres.length - 1){
                genres += ','
            }
        }
        this.setState({genres: genres})
    }
    rendermovie = () =>{
        const movie = this.props.movie;
        const genres = this.props.genres;
        return (
            <div className="pt-4 container" onClick={this.homePage} style={{cursor:'pointer'}}>
                <div className="bg-info p-4 rounded-lg" style={{maxHeight: '75vh', minHeight: '75vh'}}>
                    <div className="d-flex mr-5">
                        <img className="d-block ml-5" src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="Imagen no encontrada" style={{maxHeight:'40vh', minHeight: '40vh'}}/>
                        <div className="w-100 d-flex flex-column p-3 align-items-end text-white">
                            <h2 className="mt-5">{movie.title} ({movie.original_title})</h2>
                            <h5 className="mt-5">Fecha de lanzamiento: {movie.release_date}</h5>
                            <h3 className="mt-5">Puntuación: {movie.vote_average}</h3>
                            <div className="mt-3">{genres}</div>
                        </div>
                    </div>
                    <h4 className="d-flex align-items-center text-white" style={{maxHeight: '30vh', minHeight: '30vh'}}>{movie.overview}</h4>
                </div> 
            </div>
        )
    }
    render() {
        return(
            <div>
                {this.rendermovie()}
            </div>
        )
    }
}
export default MovieDetail;