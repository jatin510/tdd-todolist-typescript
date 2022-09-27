import { randomUUID } from 'crypto';

export default class Todo {
  id: string;

  constructor(id?: string) {
    this.id = id || randomUUID();
  }
}
