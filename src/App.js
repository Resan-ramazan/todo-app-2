import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import logo from './assets/indir.png'
import squirrel from './assets/squirrel.png'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    console.log('hey');	
    saveLocalTodos();
  }, [todos, status]);

  const setTodoCompleted = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }));
  }

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if(localTodos.length > 0) {
      setTodos(localTodos)
    }
  }

  return (
    <div className="App">
      <h1 className='header'><img className='squirrel' src={squirrel} />Squirrel Todo Lists </h1>
      {/* <FontAwesomeIcon icon="fa-solid fa-squirrel" /> */}
      <img className='logo' src={logo} />
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}

      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
        saveLocalTodos={saveLocalTodos}
      />
    </div>
  );
}

export default App;