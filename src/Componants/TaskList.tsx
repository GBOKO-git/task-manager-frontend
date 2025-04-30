import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskTitle from "./TaskTitle";
import ITask from "../Interface/Task";
import { deleteTask, getTasks } from "../Gateways/TaskGateways";






const TaskList = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(() => {
      fetchTasks();
    }, []);
  
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
  
    const handleDelete = async (id: number) => {
      await deleteTask(id);
      fetchTasks();
    };
    return (
        <>
            <div>
                <TaskTitle/>
                <TaskItem handleDelete={handleDelete}  tasks={tasks} />
            </div>
        </>
    )
}

export default TaskList;