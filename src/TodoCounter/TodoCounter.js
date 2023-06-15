import { TodoContext } from "../TodoContext";
import {useContext} from 'react'
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return completedTodos === totalTodos ? (
    <h1 className="title-todo-counter">Felicidades! Completaste tus tareas</h1>
  ) : (
    <h1 className="title-todo-counter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
}
export { TodoCounter };
