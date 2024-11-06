import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTaskUseCase } from "../../useCases/createTask/CreateTaskUseCase";

class CreateTaskController {
  async handle(request: Request, response: Response): Promise<any> {
    if (!request.body.title)
      return response
        .status(400)
        .json({ message: "The task title is missing" });

    if (!request.body.description)
      return response
        .status(400)
        .json({ message: "The task description is missing" });

    const createTaskUseCase = container.resolve(CreateTaskUseCase);

    const { title, description } = request.body;

    const task = await createTaskUseCase.execute({
      title,
      description,
    });

    if (!task.data) {
      return response.status(400).json(task);
    }

    return response.status(201).json(task);
  }
}

export { CreateTaskController };
