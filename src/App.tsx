import { useState } from "react";
import { generateId } from "./services/generateid";
import { Item } from "./interfaces/item";
import Task from "./components/Task";
import TaskEdit from "./components/TaskEdit";


function App() {

  const [task,setTask] = useState("");
  const [desc,setDesc] = useState("");
  const [todoList,setTodoList] = useState<Item[]>([]);

  const addNewItem = () => {

    const newTask = {
      id: generateId(),
      task:task,
      description: desc,
      edit:false
    };

    setTodoList([...todoList,newTask]);
  }


const toggleEdit = (id:number): void => {

  const itemToEdit = todoList.find(i => i.id === id)!;
  const editedItem = {...itemToEdit, edit : !itemToEdit.edit};
  setTodoList(todoList.map(i => i.id !== id ? i: editedItem));

};

const saveItem = (item: Item): void => {

  setTodoList(todoList.map(i => i.id !== item.id ? i: item));

};

const removeItem = (id: number): void => {

  setTodoList(todoList.filter(i => i.id !== id));
  
};


  return (
    <div>
      <label>Task: </label>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <label>Description: </label>
      <input value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={addNewItem}>add</button>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Edit</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            todoList.map(task => task.edit ?
              <TaskEdit key={task.id} task={task} toggleEdit={toggleEdit} saveItem={saveItem} /> :
              <Task key={task.id} task={task} toggleEdit={toggleEdit} removeItem={removeItem} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
