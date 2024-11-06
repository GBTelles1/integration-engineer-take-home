type ResponseMessage = {
  message: string;
};

export const deleteTask = async (taskId: string) => {
  const url = `http://localhost:8000/tasks/${taskId}`;

  const response = await fetch(url, {
    method: "DELETE",
  });

  const message: ResponseMessage = await response.json();

  return message;
};
