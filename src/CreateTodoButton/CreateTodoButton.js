import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);

  return (
    <div className="TodoButton-container">
      <button className="TodoButton" onClick={() => setOpenModal(!openModal)}>
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
