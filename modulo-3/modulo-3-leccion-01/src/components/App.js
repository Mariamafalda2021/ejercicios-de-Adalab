import '../styles/App.css';

function App() {
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
        <header className="header">
          <a href="https://adalab.es"><img className="logo" src="../images/adalab-logo-155x61.png" alt="logo-adalab" /></a>
          <nav>
            <ul className="menu">
              <li><a className="menu-item" href="#">Blog</a></li>
              <li><a className="menu-item" href="#">Contacto</a></li>
            </ul>

          </nav>

        </header>

        <main className="main">
          <h1 className="title">
            Creando diversidad digital
          </h1>

        </main>
      </div>
    </div >
  );
}
export default App;
