import '../styles/App.scss';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header'

const App = () => {
  return (

    <div>
      <h2>Este título aparece siempre</h2>
      <Header />

      <Route exact path="/Overview">
        <h2>Este título solo aparece cuando la usuaria entra en la página de OVERVIEW</h2>
      </Route>
      <Route exact path="/Repositories">
        <h2>Este título solo aparece cuando la usuaria entra en la página de Repositories</h2>
      </Route>
      <Route exact path="/Packages">
        <h2>Este título solo aparece cuando la usuaria entra en la página de Packages</h2>
      </Route>
      <Route exact path="/People">
        <h2>Este título solo aparece cuando la usuaria entra en la página de People</h2>
      </Route>
      <Route exact path="/Teams">
        <h2>Este título solo aparece cuando la usuaria entra en la página de Teams</h2>
      </Route>
      <Route exact path="/Projects">
        <h2>Este título solo aparece cuando la usuaria entra en la página de Projects</h2>
      </Route>
      <Route exact path="/Settings">
        <h2>No apto para manazas</h2>
      </Route>



    </div>
  );
};

export default App;
