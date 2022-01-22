import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  // Creamos la constante de estado text con el valor inicial a string vacío
  const [text, setText] = useState('');
  // Creamos la función manejadora
  const handleText = ev => {
    // En la que guardamos el valor del input en name con setText
    setText(ev.target.value.replace(/[aeou]/g, 'i')
    );
  };

  return (
    <div>
      <h2>Traductor MIMIMI</h2>
      <label htmlFor="sentence">Escribe aquí tu frase </label>
      <input type="text" id="sentence" onChange={handleText} />
      <p>Esto es lo que oigo</p>
      <p className='traduccion'>{text}</p>



    </div>
  )
}

export default App;
