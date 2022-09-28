import { Task } from './task';

describe('Testing Task domain', () => {
  it('task should be a non empty string', () => {
    const taskProps = { text: '' };
    const createTask = () => {
      Task.create(taskProps);
    };
    expect(createTask).toThrow();
  });

  it('task should be string and not be empty', () => {
    //  expect();
  });
});
