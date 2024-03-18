// Клас для створення завдань
class Task {
  // Конструктор класу, приймає опис завдання
  constructor(description) {
    this.description = description; // Зберігаємо опис завдання
    this.completed = false; // Встановлюємо прапорець "completed" в логічне значення "false" (завдання ще не виконане)
  }

  // Метод для позначення завдання як виконаного
  complete() {
    this.completed = true; // Змінюємо значення прапорця "completed" на "true" (завдання виконане)
  }
}

// Клас для туду-ліста
class TodoList {
  // Конструктор класу
  constructor() {
    this.tasks = []; // Масив для зберігання завдань
  }

  // Метод для додавання нового завдання в список
  addTask(description) {
    const task = new Task(description); // Створюємо новий об'єкт завдання
    this.tasks.push(task); // Додаємо завдання до масиву
  }

  // Метод для виведення списку завдань
  showTasks() {
    const taskList = document.getElementById("taskList"); // Отримуємо елемент списку завдань
    taskList.innerHTML = ""; // Очищаємо список

    // Перебираємо всі завдання в масиві
    this.tasks.forEach((task, index) => {
      const li = document.createElement("li"); // Створюємо новий елемент списку
      li.textContent = `${index + 1}. ${task.description} ${
        task.completed ? "(completed)" : ""
      }`; // Додаємо опис завдання до тексту елементу
      taskList.appendChild(li); // Додаємо елемент до списку
    });
  }

  // Метод для позначення завдання як виконаного за його індексом
  completeTask(index) {
    // Перевіряємо, чи індекс є допустимим
    if (index >= 0 && index < this.tasks.length) {
      // Викликаємо метод "complete" для відповідного завдання
      this.tasks[index].complete();
    }
  }
}

// Створення екземпляра туду-ліста
const todoList = new TodoList();

// Функція для обробки події відправки форми
function handleFormSubmit(event) {
  event.preventDefault(); // Забороняємо стандартну поведінку форми

  const taskInput = document.getElementById("taskInput"); // Отримуємо поле введення для завдання
  const description = taskInput.value.trim(); // Отримуємо введений текст і видаляємо зайві пробіли

  if (description) {
    todoList.addTask(description); // Додаємо завдання до туду-ліста
    todoList.showTasks(); // Виводимо список завдань
    taskInput.value = ""; // Очищаємо поле введення
  }
}

const taskForm = document.getElementById("taskForm"); // Отримуємо форму для додавання завдань
taskForm.addEventListener("click", handleFormSubmit); // Додаємо обробник події відправки форми
