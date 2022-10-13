import { localTodoRepo } from "../../modules/todo/repo/implementations/local";
import { testCerateTodoUseCase } from "../../modules/todo/usecases/createTodo";

(async () => {
  const task = "Learn SOLID principles";
  const taskId = await testCerateTodoUseCase.execute({ task });
  console.log(taskId);
  const localTodos = localTodoRepo.todos;
  console.log(localTodos[0].task === task);
})();
