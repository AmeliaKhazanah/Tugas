const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const deleteAllBtn = document.getElementById("delete-all-btn");

addBtn.addEventListener("click", addTask);
deleteAllBtn.addEventListener("click", () => {
  todoList.innerHTML = `<tr><td colspan="4">No task found</td></tr>`;
});

function addTask() {
  const task = taskInput.value.trim();
  const date = dateInput.value;

  if (!task) {
    alert("Please enter a task!");
    return;
  }

  if (todoList.querySelector("td[colspan='4']")) {
    todoList.innerHTML = "";
  }

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${task}</td>
    <td>${date || "-"}</td>
    <td><input type="checkbox" class="status-checkbox"></td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Delete button
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
    if (todoList.children.length === 0) {
      todoList.innerHTML = `<tr><td colspan="4">No task found</td></tr>`;
    }
  });

  todoList.appendChild(row);

  taskInput.value = "";
  dateInput.value = "";
}
