import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateTask } from "../../actions";
import styles from "./UpdateTaskForm.module.css";
import { FormInput } from "../FormInput";
import { Task } from "../../types";

type UpdateTaskFormProps = {
  task: Task;
};

type FormState = {
  status: "" | "success" | "error" | "pending";
  message: string;
};

export const UpdateTaskForm = ({ task }: UpdateTaskFormProps) => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState(task);

  const [formState, setFormState] = useState<FormState>({
    status: "",
    message: "",
  });

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks", { id: task.id }] });
      setFormState({ status: "success", message: "Task saved!" });
    },
    onError: (error) => {
      setFormState({
        status: "error",
        message: `Error while saving task ${error}`,
      });
    },
  });

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (formData.title.length === 0) {
      setFormState({ status: "error", message: "A title is required" });
      return;
    }

    if (formData.description.length === 0) {
      setFormState({ status: "error", message: "A description is required" });
      return;
    }

    setFormState({ status: "pending", message: "Saving task..." });

    updateTaskMutation.mutate(formData);
  };

  return (
    <form className={styles.createTaskForm}>
      <h2>{`Edit Task: ${task?.title || ""}`}</h2>

      <div className={styles.inputs}>
        <FormInput
          label={"Title"}
          inputValue={formData.title}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />

        <FormInput
          label={"Description"}
          inputValue={formData.description}
          inputType="textarea"
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <div className={`${styles.formState} ${styles[formState.status]}`}>
          {formState.message}
        </div>

        <button onClick={submitForm}>Save</button>
      </div>
    </form>
  );
};
