import { useState } from "react";
import axios from "axios";
import Button from "./Button";

interface Task {
  id: string;
  title: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleClick = async () => {
    try {
      setErrorMessage(null);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(data);
    } catch (error: any) {
      setErrorMessage(error?.message || "An error occurred");
    }
  };

  return (
    <>
      <h1>Tasks from API</h1>
      <Button disabled={false} onClick={handleClick}>
        Get Tasks from API
      </Button>

      {tasks.length > 0 &&
        tasks.map((task) => <p key={task.id}>{task.title}</p>)}

      {/* Adicione um elemento para a mensagem de erro com test-id */}
      {errorMessage && <div data-testid="error-message">{errorMessage}</div>}
    </>
  );
};

export default Tasks;
