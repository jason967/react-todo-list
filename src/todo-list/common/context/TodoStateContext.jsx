import { createContext, useState } from "react";
import { todoStatus } from "../constant";

export const TodoStateContext = createContext();

export function TodoStateProvider({ children }) {
  const [todoState, setTodoState] = useState(todoStatus.all);
  const changeTodoState = (state) => setTodoState(state);
  return (
    <TodoStateContext.Provider value={{ todoState, changeTodoState }}>
      {children}
    </TodoStateContext.Provider>
  );
}
