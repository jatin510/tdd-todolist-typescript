import { Todo } from "../domain/todo";

export interface ITodoRepo {
  save(todo: Todo): Promise<void>;
}
