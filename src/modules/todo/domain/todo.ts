import { Entity } from '../../../shared/domain/entity';

export interface ITodoProps {
  task: string;
  isCompleted?: boolean;
  deadline?: Date;
  createdAt?: Date;
  updatedAt?: Date;
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

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  public static create(props: ITodoProps): Todo {
    const task = props.task;

    if (typeof task !== 'string' || task.trim().length === 0) {
      throw new Error('Invalid Todo');
    }

    const todo = new Todo({
      ...props,
      isCompleted: props.isCompleted ? props.isCompleted : false,
      createdAt: props.createdAt ? props.createdAt : new Date(),
      updatedAt: props.updatedAt ? props.updatedAt : new Date(),
    });

    return todo;
  }
}
