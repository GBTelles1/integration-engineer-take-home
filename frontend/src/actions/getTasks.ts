import { Task } from "../types";

export const getTasks = async () => {
  const response = await fetch("http://localhost:8000/tasks", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const tasks: Task[] = await response.json();

  return tasks;
};
