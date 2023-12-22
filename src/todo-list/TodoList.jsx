import React, { useContext } from "react";
import TodoListHeader from "./header/TodoListHeader";
import TodoListBody from "./body/TodoListBody";
import TodoListInputForm from "./input-form/TodoListInputForm";
import styles from "./TodoList.module.css";
import {
  TodoStateContext,
  TodoStateProvider,
} from "./common/context/TodoStateContext";

export default function TodoList() {
  return (
    <div className={styles.container}>
      <TodoStateProvider>
        <TodoListHeader />
        <TodoListBody />
      </TodoStateProvider>
      <TodoListInputForm />
    </div>
  );
}
