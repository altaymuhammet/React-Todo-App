import React, {useState} from "react";
import Todo from "../Todo/Todo";
import classes from "./TodoList.module.css";
import EditForm from "../EditForm/EditForm";

const TodoList = (props) => {
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const getIdHandler = (id) => {
    props.getId(id);
  };

  const deleteHandler = (id) => {
    props.deleteId(id)
  };

  const editHandler = (id) => {
    setEditId(id);
    setEdit(true);
  }

  const getValuesHandler = (values) => {
      props.onGetValues(values, editId);
      setEditId(null);
      setEdit(false)
  };

  if(edit){
    return <EditForm  onGetValues={getValuesHandler} id={editId} />
  }

  return (
    <ul className={classes.list}>
      { 
      props.allTodos.map((todo, i) => {
        if (todo.isCompleted === true) {
          return (
            <Todo
              key={i}
              id={todo.id}
              deadLine={todo.dateValue}
              text={todo.inputValue}
              getId={getIdHandler}
              deleteId={deleteHandler}
              style={{ textDecoration: "line-through", opacity: .6 }}
              getEdit={editHandler}
            />
          );
        } else {
          return (
            <Todo
              key={i}
              id={todo.id}
              deadLine={todo.dateValue}
              text={todo.inputValue}
              getId={getIdHandler}
              deleteId={deleteHandler}
              getEdit={editHandler}
            />
          );
        }
      })}
    </ul>
  );
};

export default TodoList;
