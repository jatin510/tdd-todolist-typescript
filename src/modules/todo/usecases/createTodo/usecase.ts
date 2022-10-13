import { Todo } from "../../domain/todo";
import { ITodoRepo } from "../../repo";
import { CreateTodoDTO } from "./dto";

export class CreateTodoUseCase {
  private todoRepo: ITodoRepo;
  constructor(todoRepo: ITodoRepo) {
    this.todoRepo = todoRepo;
  }

  async execute(request: CreateTodoDTO): Promise<string> {
    const todo = Todo.create(request);
    // save in repo
    await this.todoRepo.save(todo);
    return todo.id;
  }
}
