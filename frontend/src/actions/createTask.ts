import { ITaskDTO, Task } from "../types";

export const createTask = async (newTask: ITaskDTO) => {
  const url = "http://localhost:8000/tasks";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  const createdTask: Task = await response.json();

  return createdTask;
};
