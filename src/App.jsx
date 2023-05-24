import { useEffect, useState } from "react";
import "./App.css";
import NewItemForm from "./components/NewItemForm";
import ItemList from "./components/ItemList";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [itemList, setItemList] = useState(() => {
    let localStorageValue = localStorage.getItem("ITEMS");
    if(localStorageValue === null) return [];
    return JSON.parse(localStorageValue);
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(newItem){
      setItemList(currentItems => {
        return [...currentItems, {id: crypto.randomUUID(), title: newItem, completed: false}]
      });
      setNewItem("");
    }
  }
  const toggleTodo = (id, completed) => {
    setItemList(currentItems => {
      return currentItems.map(item => {
        if(item.id === id){
            return {...item, completed}
        } 
        return item;
      });
    });
  }

  const deleteTodo = (id) => {
    setItemList(currentItems => {
      return currentItems.filter(item => item.id !== id);
    })
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(itemList));
  }, [itemList]);
  return (
    <>
      <NewItemForm handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <h1>Todo List</h1>
      <ItemList deleteTodo={deleteTodo} toggleTodo={toggleTodo} itemList={itemList} />
    </>
  );
}
export default App;