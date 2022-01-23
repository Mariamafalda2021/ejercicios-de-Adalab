import '../styles/App.scss';
import Header from './Header';
import Main from './Main';


const App = () => {
  return (
    <div className="app">
      <div className="head">
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?
    family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./css/style.css" />
        <title>Evaluación Intermedia</title>
      </div>

      <div className="body">
        <Header />
        <Main />

      </div>
    </div >
  );
}

export default App;
