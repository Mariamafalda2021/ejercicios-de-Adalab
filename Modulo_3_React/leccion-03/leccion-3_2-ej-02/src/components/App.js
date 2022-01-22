import '../styles/App.scss';
// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [action, setAction] = useState('suma')

  const handleNumberA = ev => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = ev => {
    setNumberB(ev.target.value);
  };

  const handleAction = ev => {
    setAction(ev.currentTarget.value);
  }

  const getTotal = () => {
    let total = 0;
    if (action === 'suma') {
      total = parseInt(numberA) + parseInt(numberB);
    } else if (action === 'resta') {
      total = parseInt(numberA) - parseInt(numberB);
    } else if (action === 'multiplicacion') {
      total = parseInt(numberA) * parseInt(numberB);
    } else if (action === 'division') {
      total = parseInt(numberA) / parseInt(numberB);
    }
    return total;
  };

  const handleReset = () => {
    setAction('suma');
    setNumberA(0);
    setNumberB(0);
    getTotal();
  };



  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <select name="Elige una acción" id="accion" onChange={handleAction} value={action}>
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicacion</option>
          <option value="division">Dividision</option>
        </select>
        <label>
          Escribe un número:
          <input type="number" name="name" value={numberA} onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="email" value={numberB} onChange={handleNumberB} />
        </label>
      </form>
      <p>
        La {action} de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {getTotal()}</strong>.
      </p>
      <input type="button" value="reset" onClick={handleReset} />
    </div>
  );
};

export default App;
