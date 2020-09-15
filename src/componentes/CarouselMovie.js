import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

class CarouseMovies extends React.Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[0].id} onClick={this.props.changeMovieDetail}
                        className="d-block" src={`https://image.tmdb.org/t/p/w400/${this.props.array[0].poster_path}`} alt="1" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                    </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[1].id} onClick={this.props.changeMovieDetail}
                        className="d-block" src={`https://image.tmdb.org/t/p/w400/${this.props.array[1].poster_path}`} alt="2" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[2].id} onClick={this.props.changeMovieDetail}
                        className="d-block"src={`https://image.tmdb.org/t/p/w400/${this.props.array[2].poster_path}`} alt="3" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[3].id} onClick={this.props.changeMovieDetail}
                        className="d-block"src={`https://image.tmdb.org/t/p/w400/${this.props.array[3].poster_path}`} alt="4" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[4].id} onClick={this.props.changeMovieDetail}
                        className="d-block"src={`https://image.tmdb.org/t/p/w400/${this.props.array[4].poster_path}`} alt="5" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[5].id} onClick={this.props.changeMovieDetail}
                        className="d-block"src={`https://image.tmdb.org/t/p/w400/${this.props.array[5].poster_path}`} alt="6" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[6].id} onClick={this.props.changeMovieDetail}
                        className="d-block"src={`https://image.tmdb.org/t/p/w400/${this.props.array[6].poster_path}`} alt="7" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[7].id} onClick={this.props.changeMovieDetail}
                        className="d-block"src={`https://image.tmdb.org/t/p/w400/${this.props.array[7].poster_path}`} alt="8" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                    <img id={this.props.array[8].id} onClick={this.props.changeMovieDetail}
                    className="d-block"src={`https://image.tmdb.org/t/p/w400/${this.props.array[8].poster_path}`} alt="9" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/pelicula">
                        <img id={this.props.array[9].id} onClick={this.props.changeMovieDetail}
                        className="d-block"src={`https://image.tmdb.org/t/p/w400/${this.props.array[9].poster_path}`} alt="10" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                    </Link>
                </Carousel.Item>
            </Carousel>)
    }
}

export default CarouseMovies;
