import { ValueObject } from '../../../shared/domain/valueObject';

interface ITaskProps {
  text: string;
  isCompleted?: boolean;
}

export class Task extends ValueObject<ITaskProps> {
  //   props: ITaskProps;

  public text: string;
  public isCompleted: boolean;

  private constructor(props: ITaskProps) {
    super(props);
    this.text = props.text;
    this.isCompleted = props?.isCompleted ?? false;
  }

  public static create(props: ITaskProps) {
    const text = props.text;

    if (typeof text !== 'string' || text.trim().length === 0) {
      throw new Error('Invalid task');
    }

    const task = new Task(props);
    return task;
  }
}
