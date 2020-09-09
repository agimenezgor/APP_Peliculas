import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import backImage from './img/backImage.jpg';

class Home extends React.Component {
    carouselUpcoming = () => {
        if(this.props.arrayUpcoming.length > 0){
            return(this.carouselMovies(this.props.arrayUpcoming))
        }
    }
    carouselPopular = () => {
        if(this.props.arrayPopular.length > 0){
            return(this.carouselMovies(this.props.arrayPopular))
        }
    }
    carouselMovies = (array) =>{
        if(array.length > 0){
            return (
            <Carousel>
                <Carousel.Item>
                <img id={array[0].id} onClick={this.props.changeMovieDetail}
                className="d-block" src={`https://image.tmdb.org/t/p/w400/${array[0].poster_path}`} alt="1" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[1].id} onClick={this.props.changeMovieDetail}
                className="d-block" src={`https://image.tmdb.org/t/p/w400/${array[1].poster_path}`} alt="2" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[2].id} onClick={this.props.changeMovieDetail}
                className="d-block"src={`https://image.tmdb.org/t/p/w400/${array[2].poster_path}`} alt="3" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[3].id} onClick={this.props.changeMovieDetail}
                className="d-block"src={`https://image.tmdb.org/t/p/w400/${array[3].poster_path}`} alt="4" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[4].id} onClick={this.props.changeMovieDetail}
                className="d-block"src={`https://image.tmdb.org/t/p/w400/${array[4].poster_path}`} alt="5" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[5].id} onClick={this.props.changeMovieDetail}
                className="d-block"src={`https://image.tmdb.org/t/p/w400/${array[5].poster_path}`} alt="6" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[6].id} onClick={this.props.changeMovieDetail}
                className="d-block"src={`https://image.tmdb.org/t/p/w400/${array[6].poster_path}`} alt="7" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[7].id} onClick={this.props.changeMovieDetail}
                className="d-block"src={`https://image.tmdb.org/t/p/w400/${array[7].poster_path}`} alt="8" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[8].id} onClick={this.props.changeMovieDetail}
                className="d-block"src={`https://image.tmdb.org/t/p/w400/${array[8].poster_path}`} alt="9" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
                <Carousel.Item>
                <img id={array[9].id} onClick={this.props.changeMovieDetail}
                className="d-block"src={`https://image.tmdb.org/t/p/w400/${array[9].poster_path}`} alt="10" style={{maxHeight:'45vh', minHeight: '45vh', cursor: 'pointer'}}/>
                </Carousel.Item>
            </Carousel>)
        }   
    }
    render(){
        return(
            <React.Fragment>
                <div className="container" style={{minHeight: 30+"vh"}}>
                    <div className="bg-image text-white" style={ {backgroundImage:`url(${backImage})`,  
                                                                    backgroundPosition: 'center',
                                                                    backgroundSize: '100% 100%',
                                                                    backgroundRepeat: 'no-repeat'} }>
                        <h2 className="d-flex justify-content-center p-5">Bienvenido a tu web de películas.</h2>
                        <h4 className="d-flex justify-content-center p-4"> Inserta el nombre de tu película favorita para conocer todos sus detalles</h4>
                    </div> 
                </div>
                <div className="container" style={{minHeight: '53vh'}}>
                    <div className="row">
                        <div className="d-inline-block col-md-6">
                            <h2 className="text-white d-flex justify-content-center">Novedades</h2>
                            <div className="d-flex justify-content-center">{this.carouselUpcoming()}</div>
                        </div>
                        <div className="d-inline-block col-md-6">
                            <h2 className="text-white d-flex justify-content-center">Populares</h2>
                            <div className="d-flex justify-content-center">{this.carouselPopular()}</div>
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}
export default Home;