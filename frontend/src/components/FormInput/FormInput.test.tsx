import { render, screen, fireEvent } from "@testing-library/react";
import { FormInput } from "./index";
import "@testing-library/jest-dom";

describe("FormInput Component", () => {
  it("renders label and input with correct props", () => {
    render(
      <FormInput
        label="Username"
        inputType="text"
        inputValue="test user"
        isRequired={true}
      />
    );

    const labelElement = screen.getByText("Username");
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(
      "Username"
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveValue("test user");
    expect(inputElement).toBeRequired();
  });

  it("calls handleChange when input value changes", () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        label="Email"
        inputType="email"
        inputValue=""
        handleChange={handleChange}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      "Email"
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "user@example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders input as optional when isRequired is false", () => {
    render(
      <FormInput
        label="Phone"
        inputType="tel"
        inputValue="123-456-7890"
        isRequired={false}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      "Phone"
    ) as HTMLInputElement;
    expect(inputElement).not.toBeRequired();
  });
});
