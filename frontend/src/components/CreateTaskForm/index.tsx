import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createTask } from "../../actions";
import styles from "./CreateTaskForm.module.css";
import { FormInput } from "../FormInput";

type FormState = {
  status: "" | "success" | "error" | "pending";
  message: string;
};

export const CreateTaskForm = () => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({ title: "", description: "" });

  const [formState, setFormState] = useState<FormState>({
    status: "",
    message: "",
  });

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

      setFormState({ status: "", message: "" });

      setFormData({ title: "", description: "" });
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

    createTaskMutation.mutate(formData);
  };

  return (
    <form className={styles.createTaskForm}>
      <h2>Create Task</h2>

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
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <div className={`${styles.formState} ${styles[formState.status]}`}>
          {formState.message}
        </div>

        <button onClick={submitForm}>Create</button>
      </div>
    </form>
  );
};
