import { useParams } from "react-router-dom";
import { UpdateTaskForm } from "../../components/UpdateTaskForm";
import { getTaskById } from "../../actions";
import { useQuery } from "@tanstack/react-query";

export const EditTaskPage = () => {
  const { taskId } = useParams() as { taskId: string };

  const {
    isError,
    isSuccess,
    isPending,
    data: task,
  } = useQuery({
    queryKey: ["tasks", { id: taskId }],
    queryFn: () => getTaskById(taskId),
  });

  const getTaskByIdFeedback = () => {
    if (isPending) {
      return "Loading task data... Please wait a moment";
    }

    if (isError) {
      return "Could not retrieve task data. Please check your internet and try to reload the page";
    }

    return "";
  };

  return (
    <div>
      <div>{getTaskByIdFeedback()}</div>

      {isSuccess && <UpdateTaskForm task={task} />}
    </div>
  );
};
