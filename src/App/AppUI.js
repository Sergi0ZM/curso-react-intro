import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoContext } from "../TodoContext/";
function AppUI() {
  const {
    searchedTodos,
    completeTodos,
    deleteTodos,
    loading,
    error,
    openModal, 
  } = useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />
        <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <p>Error</p>}
        {!loading && searchedTodos.length === 0 && <p>Crea tu primer ToDo!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )} 
    </>
  );
}

export { AppUI };
