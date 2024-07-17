import { useState } from "react";
import { MyPropEdit } from "../interfaces/myprops";

const TaskEdit = ({task,toggleEdit,saveItem}: MyPropEdit) => {

    const [taskitem,setTask] = useState(task.task);
    const [description,setDescription] = useState(task.description);
  
    const onSave = () => {
  
      const itemToSave = {
        id: task.id,
        task: taskitem,
        description: description,
        edit: !task.edit
      };
  
      saveItem(itemToSave);
  
    }
  
    return (
      <tr>
        <td><input value={taskitem} onChange={e => setTask(e.target.value)} /></td>
        <td><input value={description} onChange={e => setDescription(e.target.value)} /></td>
        <td><button onClick={() => toggleEdit(task.id)}>cancel</button></td>
        <td><button onClick={onSave}>save</button></td>
      </tr>
    )
  }
  export default TaskEdit;