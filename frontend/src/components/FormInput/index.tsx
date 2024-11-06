import { HTMLInputTypeAttribute } from "react";
import styles from "./FormInput.module.css";

type FormInputProps = {
  label: string;
  inputType?: HTMLInputTypeAttribute;
  inputValue: string | number | readonly string[] | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  isRequired?: boolean;
};

export const FormInput = ({
  label,
  inputType = "text",
  inputValue,
  handleChange,
  isRequired = true,
}: FormInputProps) => {
  return (
    <div className={styles.formInput}>
      <label className={styles.inputTitle}>{label}</label>

      <input
        className={styles.input}
        type={inputType}
        placeholder={label}
        value={inputValue}
        onChange={handleChange}
        required={isRequired}
      />
    </div>
  );
};
