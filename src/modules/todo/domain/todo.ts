import { Entity } from '../../../shared/domain/entity';

interface ITodoProps {
  text: string;
  isCompleted?: boolean;
}

export class Todo extends Entity<ITodoProps> {
  public text: string;
  public isCompleted: boolean;

  private constructor(props: ITodoProps, id?: string) {
    super(props, id);
    this.text = props.text;
    this.isCompleted = props?.isCompleted ?? false;
  }

  public static create(props: ITodoProps) {
    const text = props.text;

    if (typeof text !== 'string' || text.trim().length === 0) {
      throw new Error('Invalid Todo');
    }

    const todo = new Todo(props);
    return todo;
  }
}
