import React, { useRef } from "react";
import classes from "./EditForm.module.css";
import { MdOutlineAddCircle } from "react-icons/md";

const EditForm = (props) => {
  const inputRef = useRef("");
  const dateRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const values = {
      id: Math.floor(Math.random() * 99999),
      inputValue: inputRef.current.value,
      dateValue: dateRef.current.value,
      isCompleted: false,
    };

    props.onGetValues(values);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        className={classes.textInput}
        placeholder="Edit todo and pick a deadline.."
        ref={inputRef}
      />
      <input type="date" className={classes.date} ref={dateRef} />
      <button className={classes.button} type="submit">
        <MdOutlineAddCircle />
      </button>
    </form>
  );
};

export default EditForm;
