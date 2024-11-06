import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../actions";
import { Task } from "../../types";
import styles from "./TaskCard.module.css";
import { useNavigate } from "react-router-dom";

type TaskCardProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const deleteTaskButtonText = () => {
    if (deleteTaskMutation.isPending) {
      return "Deleting";
    }

    if (deleteTaskMutation.isError) {
      return "Could not delete task data. Please check your internet and try to reload the page";
    }

    return "Delete";
  };

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskInformation}>
        <h3>{task.title}</h3>

        <p>{task.description}</p>
      </div>

      <div className={styles.taskActions}>
        <button onClick={() => navigate(`/task/${task.id}/edit`)}>
          Update
        </button>

        <button
          className={styles.deleteTaskButton}
          onClick={() => deleteTaskMutation.mutate(task.id)}
        >
          {deleteTaskButtonText()}
        </button>
      </div>
    </div>
  );
};
