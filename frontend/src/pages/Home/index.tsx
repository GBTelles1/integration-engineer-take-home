import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../actions";
import { CreateTaskForm } from "../../components/CreateTaskForm";
import styles from "./Home.module.css";
import { TaskCard } from "../../components/TaskCard";

export const Home = () => {
  const {
    isError,
    isSuccess,
    isPending,
    data: tasks,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const getTaskFeedback = () => {
    if (isPending) {
      return "Loading tasks data... Please wait a moment";
    }

    if (isError) {
      return "Could not retrieve tasks data. Please check your internet and try to reload the page";
    }

    return "";
  };

  return (
    <div className={styles.home}>
      <div>
        <h2>
          Current Tasks:{" "}
          {tasks?.length !== 0 && (
            <span className={styles.taskAmount}>{tasks?.length || ""}</span>
          )}
        </h2>

        <div>{getTaskFeedback()}</div>

        <ul className={styles.taskList}>
          {tasks?.length === 0 && <div>No tasks at the moment</div>}

          {isSuccess &&
            tasks.map((task) => {
              return (
                <li key={task.id}>
                  <TaskCard task={task} />
                </li>
              );
            })}
        </ul>
      </div>

      <CreateTaskForm />
    </div>
  );
};
