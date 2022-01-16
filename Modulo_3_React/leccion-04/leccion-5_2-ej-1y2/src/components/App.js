import '../styles/App.css';
import { useEffect, useState } from 'react';
import callToApi from '../services/callToApi';

function App() {
  //Estados
  //Creamos serie para guardar los shows respondidos por el API, por eso es un array vacío
  const [series, setSeries] = useState([]);

  //Creamos searchName para gestionar el input de búsqueda, por eso es un string vacío
  const [searchName, setSearchName] = useState('');

  //useEffect

  useEffect(() => {
    //Llamamos a la API pasando por parámetros searchName
    callToApi(searchName).then(response => {
      //cuando el API responde guardamos los datos en el estado
      setSeries(response);
    });
    //Este useEffect depende del searchName por eso ponemos [searchName]
    //Cuando la usuaria cambia el searchName este useEffect se vuelve a ejecutar
  }, [searchName]);

  //Eventos

  const handleSearchName = event => {
    //Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchName(event.target.value);
  };

  //Renderizado

  const renderSeries = () => {
    //Pintamos el listado de series respondido por el API
    return series.map((serie, index) => {
      //el API no nos devuelve un id para cada serie por eso usamos el index
      return <li key={index}>Nombre:{serie.name} </li>;
    });
  };


  return (
    //HTML
    <div>
      <h1>Llamar al API de Series:</h1>

      <form>
        <label htmlFor="name">Busca por el nombre de tu serie favorita:</label>
        <input type="text" name="name" id="name" value={searchName} onChange={handleSearchName} />
      </form>

      <h2>Series con el nombre: {searchName}</h2>
      <ul>{renderSeries()}</ul>
    </div>
  );
};


export default App;
