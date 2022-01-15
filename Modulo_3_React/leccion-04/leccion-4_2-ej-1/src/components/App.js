import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ]);

  const [userSearch, setUserSearch] = useState('');

  const handleSubmit = (event) => event.preventDefault();

  const handleUserSearch = (event) => {
    setUserSearch(event.target.value);
  };

  const handleClick = (event) => {
    const clickedTask = event.currentTarget.id;
    tasks[clickedTask].completed = !tasks[clickedTask].completed;
    setTasks([...tasks]);
  };

  const renderTasks = () => {
    tasks
      .filter((task) => task.task.toLowerCase().includes(userSearch.toLowerCase()))
      //Mapeamos
      .map((task, index) => {
        if (task.completed === true) {
          return (
            <li id={index} key={index} className="task task--completed" onClick={handleClick}> {task.task}</li >
          );
        } else {
          return (
            <li id={index} key={index} className="task" onClick={handleClick}> {task.task}</li >)
        }
      });
  };
  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <ol>
        {renderTasks()}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" id="userSecarch" onChange={handleUserSearch} value={userSearch} />
      </form>
    </div>
  );
}

export default App;
