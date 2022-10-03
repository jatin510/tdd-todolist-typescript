import { ValueObject } from '../../../shared/domain/valueObject';

interface ITodoProps {
  text: string;
  isCompleted?: boolean;
}

export class Todo extends ValueObject<ITodoProps> {
  //   props: ITodoProps;

  public text: string;
  public isCompleted: boolean;

  private constructor(props: ITodoProps) {
    super(props);
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
