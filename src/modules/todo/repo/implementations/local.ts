import { ITodoRepo } from "..";
import { Todo } from "../../domain/todo";

class LocalTodoRepo implements ITodoRepo {
  private _todos = [];

  constructor() {}

  get todos() {
    return this._todos;
  }

  async save(todo: Todo): Promise<void> {
    this._todos.push(todo);
  }
}

export const localTodoRepo = new LocalTodoRepo();
