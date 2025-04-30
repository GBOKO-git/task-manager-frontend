


import axios from "axios";
import ITask  from "../Interface/Task";


const API_URL: string = import.meta.env.VITE_API_URL;


export const getTasks = () => axios.get<ITask[]>(API_URL);

export const postTask = (task: Omit<ITask, 'id'>) => axios.post<ITask[]>(API_URL, task);

export const updateTask = (taskId:number, task: Partial<ITask>) => axios.put<ITask[]>(`${API_URL}/${taskId}`, task);

export const deleteTask = (id:number) => axios.delete(`${API_URL}/${id}`);