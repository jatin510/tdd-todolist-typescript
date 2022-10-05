import { Entity } from '../../../shared/domain/entity';
import { Todo } from './todo';

export interface ITodoListProps {
  todos?: [] | Todo[];
  totalNumTodos?: number;
}

export default class TodoList extends Entity<ITodoListProps> {
  private constructor(props: ITodoListProps) {
    super(props);
  }

  get todos() {
    return this.props.todos;
  }

  get totalNumTodos() {
    return this.props.totalNumTodos;
  }

  public addTask(todo: Todo) {
    // TODO
    //  figure out how to add in readonly props
  }

  public static create(props: ITodoListProps): TodoList {
    const todoList = new TodoList({
      ...props,
      todos: props.todos ? props.todos : [],
      totalNumTodos: props.totalNumTodos ? props.totalNumTodos : 0,
    });
    return todoList;
  }
}
