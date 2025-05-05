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
      try {
        const response = await getTasks();
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          console.error(
            "La réponse de l'API n'est pas un tableau:",
            response.data
          );
          setTasks([]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des tâches:", error);
        setTasks([]);
      }
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