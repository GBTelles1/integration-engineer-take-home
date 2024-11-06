import { Task } from "../types";

export const getTaskById = async (taskId: string) => {
  const url = `http://localhost:8000/tasks/${taskId}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const task: Task = await response.json();

  return task;
};
