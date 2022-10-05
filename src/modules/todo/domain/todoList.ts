import { Entity } from '../../../shared/domain/entity';
import { ITodoProps, Todo } from './todo';

export interface ITodoListProps {
  todos?: Array<ITodoProps>;
}

export default class TodoList extends Entity<ITodoListProps> {
  private constructor(props: ITodoListProps) {
    super(props);
  }

  get todos() {
    return this.props.todos;
  }

  public static create(props: ITodoListProps): TodoList {
    const todoList = new TodoList({
      ...props,
      todos: props.todos ? props.todos : [],
    });
    return todoList;
  }
}
