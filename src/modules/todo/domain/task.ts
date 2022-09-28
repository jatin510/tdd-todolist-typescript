import { ValueObject } from '../../../shared/domain/valueObject';

interface ITaskProps {
  text: string;
}

export class Task extends ValueObject<ITaskProps> {
  //   props: ITaskProps;

  private constructor(props: ITaskProps) {
    super(props);
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
