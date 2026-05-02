let tasks = [];
let completedTasks = [];
let completedTaskCount = 0;

function showTask() {
  if (tasks.length === 0) {
    return "Задачи отсутствуют";
  }

  for (const item of tasks) {
    console.log(item.title);
    console.log(item.description);
    console.log(item.isCompleted);
    console.log(item.createdDate);
    console.log(item.completedDate);
  }
}

function setTask(taskTitle, taskDescription) {
  if (taskTitle.length < 1 || taskDescription.length < 1) {
    return "Некорректный ввод задач: слишком короткое имя";
  }

  const newTask = {
    title: taskTitle,
    description: taskDescription,
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null,
  };
  tasks.push(newTask);
}

function completeTask(index) {
  if (typeof index !== "number" || index >= tasks.length || index < 0) {
    return "Некорректный индекс";
  }

  if (tasks[index].isCompleted === true) {
    return "Задача уже выполнена";
  }

  tasks[index].isCompleted = true;
  tasks[index].completedDate = new Date();

  const completedTask = tasks.splice(index, 1)[0];
  completedTasks.push(completedTask);
  completedTaskCount++;
}

function deleteTask(index) {
  if (typeof index !== "number" || index >= tasks.length || index < 0) {
    return "Некорректный индекс";
  }

  if (tasks[index].isCompleted === true) {
    tasks.splice(index, 1);
    return "Таска удалена";
  }

  if (tasks[index].isCompleted === false) {
    const answer = confirm("Таска еще не выполнена, удалить?");

    if (answer === true) {
      tasks.splice(index, 1);
      return "Таска удалена";
    } else {
      return "Удаление отменено";
    }
  }
}

function clearTasks() {
  tasks = [];
}
