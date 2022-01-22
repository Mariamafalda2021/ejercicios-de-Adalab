import '../styles/App.scss';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';



const App = () => {
  //Creamos la variable de estado para tener la lista de series y repintarla
  const [series, setSeries] = useState([])
  //Creamos la variable de estado para las búsquedas
  const [searchSerie, setSearchSerie] = useState('');

  // Llamar al api con useEffect
  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi(searchSerie).then((response) => {
      // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
      setSeries(response);
    });
    // Aquí ponemos un array vacío porque queremos que se llame al API solo la primera vez
  }, [searchSerie]);

  const handleSearch = (ev) => {
    setSearchSerie(ev.target.value);
  };

  const renderResults = () => {
    // Pintamos el listado de series respondido por el API
    return series.map((serie) => {
      return <li key={serie.id}>Nombre:{serie.name}</li>;
    });
  };

  return (
    <div>
      <h2>Paranormal Activity</h2>
      <form>
        <label>Busca una serie </label>
        <input type="text" value={searchSerie} onChange={handleSearch} id="name" name="name" />
      </form>
      <p>Resultados con el nombre: {searchSerie}</p>
      <ul>{renderResults()}</ul>
    </div>
  );
};

export default App;
