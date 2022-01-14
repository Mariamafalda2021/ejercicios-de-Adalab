import '../styles/App.css';

function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      if (task.completed === true) {
        return (
          <li key={index} className="completed"> {task.task}</li >
        );
      } else {
        return (
          <li key={index}> {task.task}</li >)
      }
    });
  };


  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <ol>
        {renderTasks()}
      </ol>
    </div>
  );
}

export default App;
