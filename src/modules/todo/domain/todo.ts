import { Entity } from '../../../shared/domain/entity';

export interface ITodoProps {
  task: string;
  isCompleted?: boolean;
  deadline?: Date;
}

export class Todo extends Entity<ITodoProps> {
  private constructor(props: ITodoProps, id?: string) {
    super(props, id);
  }

  get task() {
    return this.props.task;
  }

  get isCompleted() {
    return this.props.isCompleted;
  }

  get deadline() {
    return this.props.deadline;
  }

  public static create(props: ITodoProps) {
    const task = props.task;

    if (typeof task !== 'string' || task.trim().length === 0) {
      throw new Error('Invalid Todo');
    }

    const todo = new Todo(props);
    return todo;
  }
}
