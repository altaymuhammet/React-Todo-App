import React, { useRef } from "react";
import classes from "./TodoForm.module.css";
import { MdOutlineAddCircle } from "react-icons/md";

const TodoForm = (props) => {
  const inputRef = useRef();
  const dateRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const values = {
      id: Math.floor(Math.random() * 99999),
      inputValue: inputRef.current.value,
      dateValue: dateRef.current.value,
      isCompleted: false,
    };

    props.onGetValues(values);

    setTimeout(() => {
      inputRef.current.value = "";
      dateRef.current.value = "";
    }, 10);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        className={classes.textInput}
        placeholder="Type here, then pick a deadline.."
        ref={inputRef}
      />
      <input type="date" className={classes.date} ref={dateRef} />
      <button className={classes.button} type="submit">
        <MdOutlineAddCircle />
      </button>
    </form>
  );
};

export default TodoForm;
