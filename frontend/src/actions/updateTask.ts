import { ITaskDTO, Task } from "../types";

export const updateTask = async (updatedTask: Task) => {
  const url = `http://localhost:8000/tasks/${updatedTask.id}`;

  const taskBody: ITaskDTO = {
    title: updatedTask.title,
    description: updatedTask.description,
  };

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskBody),
  });

  const task: Task = await response.json();

  return task;
};
