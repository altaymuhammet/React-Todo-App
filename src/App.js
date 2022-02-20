import React, { useState } from "react";
import Card from "./components/Card";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Error from "./components/Error/Error";
import {GiThink} from 'react-icons/gi';

const EmptyList = () => {
  return <div style={{textAlign:" center"}}>
    <GiThink style={{color: "#fb8500", fontSize:"8rem"}}/>
    <h2 style={{color: "#fb8500", fontSize:"2rem"}}>You have nothing to do?</h2>
  </div>
}

const App = () => {
  const [todos, setTodos] = useState([{
    id: Math.floor(Math.random() * 99999),
    inputValue: "Bu bir denemdir.",
    dateValue: "20/04/1995",
    isCompleted: false,
  }]);
  const [errorHandler, setErrorHandler] = useState(false);

  const getValuesHandler = (value, id) => {
    if (value.dateValue === "" || value.inputValue === "") {
      setErrorHandler(true);
      setTimeout(() => {
        setErrorHandler(false);
      }, 3000);
    } else {
      if (id) {
        const newTodos = todos.map(todo =>{
          if(todo.id === id){
            todo = {...value};
            return todo;
          }
          return todo;
        });

        setTodos(newTodos);
      } else {
        const newTodos = [value, ...todos];
        setTodos(newTodos);
      }
    }
  };

  const getIdHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteIdHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Card>
        <h1 style={{ color: "#fb8500", margin: "10px 0 0 0" }}>What's plan?</h1>
        {errorHandler && <Error />}
        <TodoForm onGetValues={getValuesHandler} />
        <TodoList
          onGetValues={getValuesHandler}
          allTodos={todos}
          getId={getIdHandler}
          deleteId={deleteIdHandler}
        />
        {todos.length === 0 && <EmptyList />}
      </Card>
    </div>
  );
};

export default App;
