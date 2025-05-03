import { TaskItemProps } from "../Interface/Task";
import SharedButton from "./SharedButton";

// const taskss = [
  // {
  //   id: 123,
  //   title: "test",
  //   status: "done",
  // }
// ]


const TaskItem: React.FC<TaskItemProps> = ({ tasks =[{
  id: 123,
  title: "test",
  status: "done",
}], handleDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.status}
          <SharedButton
            handleDelete={() => handleDelete(task.id)}
            taskID={task.id}
            name="Supprimer"
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskItem;