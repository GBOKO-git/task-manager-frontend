import { ButtonProps } from "../Interface/Task";

const SharedButton: React.FC<ButtonProps> = ({
  handleDelete,
  name,
  taskID,
}) => {
  return <button onClick={() => handleDelete(taskID)}>{name}</button>;
};

export default SharedButton;