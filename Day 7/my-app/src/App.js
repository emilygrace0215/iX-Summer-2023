import './App.css';
import { useState, useEffect } from 'react';
import { Task } from './models/task';

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/taskform';
import BookTable from './components/tasktable';

function App() {
  const [tasks, setTasks] = useState([]);
  // const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks]);

  function onTaskCreated(task) {
    //setBookToEdit(null);
    setTasks([...tasks, task]);
  }

  function onTaskDelete(task) {
    setTasks(tasks.filter((x) => x.title !== task.title));
  }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setBooks(taskArr.map((x) => Task.fromJSON(x)));
      }
    }
  }

  return (
    <div className="m-5">
      <div className="card p-4">
        <TaskForm onTaskCreated={onTaskCreated} />
        <TaskTable
          tasks={tasks}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;

