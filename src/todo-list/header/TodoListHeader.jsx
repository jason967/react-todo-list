import React, { useContext } from "react";
import ModeChangeButton from "./components/ModeChangeButton";
import TextButton from "./components/TextButton";
import { TodoStateContext } from "../common/context/TodoStateContext";
import { todoStatus } from "../common/constant";

export default function TodoListHeader() {
  const { todoState, changeTodoState } = useContext(TodoStateContext);

  return (
    <div>
      <p>todo-list-header</p>
      <ModeChangeButton />
      {Object.entries(todoStatus).map(([key, value]) => (
        <TextButton
          key={key}
          text={value}
          handleClick={() => changeTodoState(value)}
        />
      ))}
    </div>
  );
}
