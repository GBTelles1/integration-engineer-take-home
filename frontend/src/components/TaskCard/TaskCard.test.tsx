import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { TaskCard } from "./index";
import { deleteTask } from "../../actions";
import { Task } from "../../types";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";

jest.mock("../../actions", () => ({
  deleteTask: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("TaskCard Component", () => {
  const task: Task = {
    id: "1",
    title: "Test Task",
    description: "This is a test task description",
    createdAt: "",
  };

  const queryClient = new QueryClient();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderTaskCard = () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TaskCard task={task} />
      </QueryClientProvider>
    );
  };

  it("renders task title and description", () => {
    renderTaskCard();

    const taskCardByTitle = screen.getByText("Test Task");
    const taskCardByDescription = screen.getByText(
      "This is a test task description"
    );
    expect(taskCardByTitle).toBeInTheDocument();
    expect(taskCardByDescription).toBeInTheDocument();
  });

  it("navigates to the edit page when Update button is clicked", () => {
    const navigate = useNavigate() as jest.Mock;
    renderTaskCard();

    const updateButton = screen.getByText("Update");
    fireEvent.click(updateButton);

    expect(navigate).toHaveBeenCalledWith("/task/1/edit");
  });

  it("calls deleteTask mutation when Delete button is clicked", async () => {
    (deleteTask as jest.Mock).mockResolvedValue({});
    renderTaskCard();

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    await waitFor(() => expect(deleteTask).toHaveBeenCalledWith("1"));
  });
});
