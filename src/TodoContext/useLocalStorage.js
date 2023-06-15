import { useEffect, useState } from "react";

// Líneas de codigo para dejar por defecto un objeto con un part de ToDos, esto para probar el LocalStorage
// const defaultTodos = [
//   { text: "Sacar a Bruno", completed: true },
//   { text: "Cortar cebolla", completed: false },
//   { text: "Estudiar React", completed: true },
//   { text: "Lalalala", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function useLocaleStorage(itemName, initialValue) {

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localeStorageItem = localStorage.getItem(itemName);
  
      let parsedItem;
      if (!localeStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localeStorageItem);
        setItem(parsedItem)
      }
      setLoading(false)
  
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem, 
    loading, 
    error,
  };
}

export { useLocaleStorage };
