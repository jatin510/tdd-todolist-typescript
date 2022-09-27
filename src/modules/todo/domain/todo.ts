import { randomUUID } from 'crypto';

export type TodoProps = {
  id?: string;
};

export default class Todo {
  id: string;

  constructor(props: TodoProps) {
    this.id = props?.id || randomUUID();
  }
}
