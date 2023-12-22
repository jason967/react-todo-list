import React, { useContext } from "react";
import { TodoStateContext } from "../common/context/TodoStateContext";
import styles from "./TodoListBody.module.css";

export default function TodoListBody() {
  const { todoState, changeTodoState } = useContext(TodoStateContext);

  return (
    <div className={styles.container}>
      <p>todo-list-body</p>
      <p>{todoState}</p>
    </div>
  );
}
