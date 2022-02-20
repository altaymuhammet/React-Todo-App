import React from "react";
import classes from "./Todo.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = (props) => {
     const checkHandler = () => {
          props.getId(Number(props.id))
     }
     const editHandler = () => {
          props.getEdit(props.id)
     }
     const deleteHandler = () => {
          props.deleteId(Number(props.id))
     }
  return (
    <li className={classes.todo} style={props.style}>
      <p className={classes.text}>
        <i>
          <em>{props.text}</em>
        </i>
      </p>
      <div className={classes.dateAndIcons}>
        <time>
          <span style={{ fontWeight: "bold" }}>Deadline:&nbsp; </span>
          <span style={{ fontWeight: "bold", color: "darkred" }}>
            {props.deadLine}
          </span>
        </time>
        <span className={classes.icons}>
          <BsFillCheckCircleFill onClick={checkHandler}/>
          <FaEdit onClick={editHandler} />
          <MdDelete onClick={deleteHandler} />
        </span>
      </div>
    </li>
  );
};

export default Todo;
