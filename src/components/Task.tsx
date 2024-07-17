import { MyProp } from "../interfaces/myprops";

const Task = ({task,toggleEdit,removeItem}: MyProp) => {

    return (
      <tr>
        <td>{task.task}</td>
        <td>{task.description}</td>
        <td><button onClick={() => toggleEdit(task.id)}>edit</button></td>
        <td><button onClick={() => removeItem(task.id)}>delete</button></td>
      </tr>
    )
  }

  export default Task;