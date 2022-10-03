import { randomUUID } from 'crypto';

export type TodoListProps = {
  id?: string;
};

export default class TodoList {
  id: string;

  constructor(props: TodoListProps) {
    this.id = props?.id || randomUUID();
  }
}
