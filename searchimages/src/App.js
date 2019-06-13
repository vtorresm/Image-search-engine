import React, {Component} from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=12767615-0aa6dc1c2b8a7f9407f9d6a0f&q=${termino}&per_page=30`;
  
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
