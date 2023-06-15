import React, { useState, useContext } from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {addTodo, setOpenModal} = useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    
    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (e) => { 
        setNewTodoValue(e.target.value)
    }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea placeholder="Cortar cebolla para el almuerzo" value={newTodoValue} onChange={onChange} required/>
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
