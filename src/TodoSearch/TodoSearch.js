import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
import { useContext } from 'react'
function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <div className="todoSearch-container">
      <input
        placeholder="Cortar cebollas"
        className="todoSearch"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export { TodoSearch };
