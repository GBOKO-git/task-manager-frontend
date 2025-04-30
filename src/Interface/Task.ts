



type TStatus = "pending" | "done"

export default interface ITask {
    id: number,
    title: string,
    description: string,
    status: TStatus,
}

export interface TaskItemProps {
    tasks: ITask[];
    handleDelete: (id: number) => void;
  }
 

export type ButtonProps = Omit<TaskItemProps, "tasks"> & {
  name: string;
  taskID: number;
};