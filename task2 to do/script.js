document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const emptyMsg = document.getElementById("emptyMsg");

  const updateEmptyState = () => {
    emptyMsg.style.display = taskList.children.length === 0 ? "block" : "none";
  };

  const createTaskItem = (taskText) => {
    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        taskList.removeChild(li);
        updateEmptyState();
      }
    });

    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    return li;
  };

  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskInput.focus();
    updateEmptyState();
  };

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  updateEmptyState();
});
