import { Entity } from '../../../shared/domain/entity';

export interface ITodoProps {
  task: string;
  isCompleted?: boolean;
}

export class Todo extends Entity<ITodoProps> {
  public task: string;
  public isCompleted: boolean;

  private constructor(props: ITodoProps, id?: string) {
    super(props, id);
    this.task = props.task;
    this.isCompleted = props?.isCompleted ?? false;
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
