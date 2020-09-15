import React from 'react';
import backImage from './img/backImage.jpg';
import CarouselMovie from './CarouselMovie';

class Home extends React.Component {
    carouselUpcoming = () => {
        if(this.props.arrayUpcoming.length > 0){
            return(<CarouselMovie array={this.props.arrayUpcoming} changeMovieDetail={this.props.changeMovieDetail}/>)
        }
    }
    carouselPopular = () => {
        if(this.props.arrayPopular.length > 0){
            return(<CarouselMovie array={this.props.arrayPopular} changeMovieDetail={this.props.changeMovieDetail}/>)
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