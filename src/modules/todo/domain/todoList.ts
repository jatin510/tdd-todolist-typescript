import { randomUUID } from 'crypto';
import { Entity } from '../../../shared/domain/entity';
import { Todo } from './todo';

// export type TodoListProps = {
//   id?: string;
//   todos: Todo[];
// };

export default class TodoList extends Entity<null> {
  todos: Todo[];

  constructor() {
    super(null);
    this.todos = [];
  }

  public static;
}
