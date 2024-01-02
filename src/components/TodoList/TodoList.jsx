import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterd = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterd.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          >
            {item.text}
          </Todo>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    // gogo
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
