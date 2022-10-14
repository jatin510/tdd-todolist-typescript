import { localTodoRepo } from '../../modules/todo/repo/implementations/local';
import { testCerateTodoUseCase } from '../../modules/todo/usecases/createTodo';
import { testEditTodoUseCase } from '../../modules/todo/useCases/editTodo';

(async () => {
  const task = 'Learn SOLID principles';
  const taskId = await testCerateTodoUseCase.execute({ task });
  console.log(taskId);
  const localTodos = localTodoRepo.todos;
  console.log(localTodos[0].task === task);

  await testEditTodoUseCase.execute({ id: taskId, task: 'updated task' });
  console.log(localTodos[0].task === 'updated task');
})();
