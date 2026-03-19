// ===============================
// Portfolio To-Do List (Week 8)
// Concepts: submit, preventDefault, input.value, trim,
// createElement, appendChild, remove, classList, localStorage
// ===============================


// ---------- 1) DOM SELECTION ----------

// Grab the form element (we listen for submit on the FORM)
const form = document.getElementById("taskForm");

// Grab the input element (we read what the user typed)
const input = document.getElementById("taskInput");

// Grab the UL where tasks will be displayed
const taskList = document.getElementById("taskList");

// Grab the error message paragraph for validation feedback
const errorMessage = document.getElementById("errorMessage");

// Grab count elements so we can update totals
const totalCountEl = document.getElementById("totalCount");
const doneCountEl = document.getElementById("doneCount");
const characterCount = document.getElementById("characterCount");

// Grab the search bar
const searchBar = document.getElementById("searchBar");

// Grab action buttons
const clearCompletedBtn = document.getElementById("clearCompleted");
const clearAllBtn = document.getElementById("clearAll");

// Grab the message to display when no tasks are available
const emptyMessage = document.getElementById("emptyMessage");

// Grab all filter buttons (All/Active/Completed)
const filterButtons = document.querySelectorAll(".filters .btn");


// ---------- 2) APP STATE ----------

// Our tasks array will store objects like:
// { id: 123, text: "Buy milk", time: "1:30 PM", done: false }
let tasks = [];

// Track which filter is active
let currentFilter = "all";

// Track which task is being edited
let currentEdit = -1;


// ---------- 3) LOCAL STORAGE HELPERS ----------

// Key name used in localStorage
const STORAGE_KEY = "portfolio_todo_tasks";

// Save tasks array into localStorage (as a string)
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Load tasks array from localStorage
function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);

  // If nothing saved, do nothing
  if (!saved) return;

  // Convert saved string back into array
  tasks = JSON.parse(saved);
}


// ---------- 4) VALIDATION HELPERS ----------

// Show an error message on the page
function showError(message) {
  errorMessage.textContent = message;
}

// Clear the error message
function clearError() {
  errorMessage.textContent = "";
}

// Check if a task exists
function taskExists(text, idToSkip) {
  // Initialize exists to false
  let exists = false;

  // Loop through and check each task
  tasks.forEach(task => {
    // Ignore the task to skip, to prevent unchanged edits from being rejected
    if (task.id !== idToSkip)
    {
      // If text matches then store the result in exists
      if (task.text === text)
      {
        exists = true;
      }
    }
  });

  // Return whether it already exists
  return exists;
}


// ---------- 5) RENDERING ----------

// Update Total and Completed counters
function updateCounts() {
  // Total tasks is length of tasks array
  const total = tasks.length;

  // Completed tasks = count tasks where done is true
  const completed = tasks.filter(t => t.done).length;

  // Update UI text
  totalCountEl.textContent = `Total: ${total}`;
  doneCountEl.textContent = `Completed: ${completed}`;
}

// Decide if a task should be visible based on currentFilter
function passesFilter(task) {
  let keyword = searchBar.value;

  if (currentFilter === "all") return true;          // show everything
  if (currentFilter === "active") return !task.done; // show only not done
  if (currentFilter === "completed") return task.done; // show only done
  if (currentFilter === "search") return task.text.includes(keyword);  // show if contains keyword
  return true;
}

// Build ONE list item element for a task object
function createTaskElement(task) {
  // Create the <li>
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.dataset.id = task.id; // store id on the element for easy lookup

  // Create the task text <span>
  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = task.text + " - Added at " + task.time;

  // If done, add done class
  if (task.done) {
    span.classList.add("done");
  }

  // Create input for editing
  const editInput = document.createElement("input")
  editInput.value = task.text;

  // Toggle done when clicking the text
  span.addEventListener("click", function () {
    // Flip done value
    task.done = !task.done;

    // Toggle CSS class
    span.classList.toggle("done");

    // Save + update counts (and re-render for filter correctness)
    saveTasks();
    render();
  });

  // Create a container for buttons
  const btnBox = document.createElement("div");
  btnBox.classList.add("task-buttons");

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.textContent = "Edit";
  editBtn.classList.add("btn", "primary");

  // Save button
  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.textContent = "Save";
  saveBtn.classList.add("btn", "primary");

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.textContent = "Delete";
  delBtn.classList.add("btn", "danger", "small");

  // Edit task on click
  editBtn.addEventListener("click", function() {
    // Edit selected task
    currentEdit = task.id;

    // Render tasks again so that input and Save button appear
    render();
  });

  // Save task on click
  saveBtn.addEventListener("click", function() {
    // Set edited task to invalid id so that input disappears
    currentEdit = -1;

    // Ensure new task text does not already exist
    if (taskExists(editInput.value, task.id))
    {
      showError("Task with that name already exists!");
      return;
    }

    // Clear any previous error
    clearError();

    // Update text of selected task
    for (let i = 0; i < tasks.length; i++)
    {
      if (tasks[i].id === task.id)
      {
        tasks[i].text = editInput.value;
      }
    }

    // Save + update counts (and re-render for filter correctness)
    saveTasks();
    render();
  })

  // Remove task on click
  delBtn.addEventListener("click", function () {
    // Keep only tasks that do NOT match this task id
    tasks = tasks.filter(t => t.id !== task.id);

    // Save + re-render
    saveTasks();
    render();
  });

  // Add span + buttons to the list item

  // Add Edit or Save button to button box
  if (currentEdit === task.id)
  {
    btnBox.appendChild(saveBtn);
  }
  else
  {
    btnBox.appendChild(editBtn);
  }

  // Add Delete button to button box
  btnBox.appendChild(delBtn);

  // Add span or input to list item
  if (currentEdit === task.id)
  {
    li.appendChild(editInput);
  }
  else {
    li.appendChild(span);
  }

  // Add button button box to list item
  li.appendChild(btnBox);

  return li;
}

// Render the entire list based on tasks + filter
function render() {
  // Clear the current list UI
  taskList.innerHTML = "";

  // Store whether any tasks are currently being displayed
  tasksAvailable = false;

  // For each task, if it passes the filter, add it
  for (const task of tasks) {
    if (passesFilter(task)) {
      const li = createTaskElement(task);
      taskList.appendChild(li);
      tasksAvailable = true;
    }
  }

  // Display message if no tasks are available
  emptyMessage.hidden = tasksAvailable;

  // Update counters every render
  updateCounts();
}


// ---------- 6) EVENTS ----------

// Handle form submission (Add task)
form.addEventListener("submit", function (event) {
  // Stop the page refresh
  event.preventDefault();

  // Read and clean input
  const text = input.value.trim();

  // Validate
  if (text === "") {
    showError("Task cannot be empty.");
    return;
  }

  // Ensure task does not already exist
  if (taskExists(text, -1)) {
    showError("Task with that name already exists!");
    return;
  }

  // Clear any previous error
  clearError();

  // Get current time
  let date = new Date();
  let time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });

  // Create a new task object
  const newTask = {
    id: Date.now(),   // simple unique id
    text: text,       // what user typed
    time: time,       // time stamp
    done: false       // default not completed
  };

  // Add it to tasks array
  tasks.push(newTask);

  // Save to localStorage
  saveTasks();

  // Clear input box
  input.value = "";

  // Re-render list
  render();
});

// Clear error while user types (nice UX)
input.addEventListener("input", function () {
  if (input.value.trim() !== "") {
    clearError();
  }
});

// Clear completed tasks
clearCompletedBtn.addEventListener("click", function () {
  // Keep only tasks that are NOT done
  tasks = tasks.filter(t => !t.done);

  // Save + re-render
  saveTasks();
  render();
});

// Clear all tasks
clearAllBtn.addEventListener("click", function () {
  // Confirm with the user
  if (!confirm("Are you sure you want to delete all tasks?")) {
    return;
  }

  // Remove everything
  tasks = [];

  // Save + re-render
  saveTasks();
  render();
});

// Filter buttons (All / Active / Completed)
for (const btn of filterButtons) {
  btn.addEventListener("click", function () {
    // Read filter value from data-filter attribute
    currentFilter = btn.dataset.filter;

    // Activate search bar if Search filter is activated
    if (currentFilter === "search")
    {
      searchBar.disabled = false;
    }
    else
    {
      searchBar.disabled = true;
    }

    // Update button highlight
    for (const b of filterButtons) {
      b.classList.remove("active");
    }
    btn.classList.add("active");

    // Re-render list with new filter
    render();
  });
}

// Refresh when the search bar is used
searchBar.addEventListener("input", function() {
  // Re-render list with new search keyword
  render();
});

// Display input character count / disable Add button when input is empty 
input.addEventListener("input", function () {
  // Read and clean input
  const text = input.value.trim();

  // Display input character count
  characterCount.textContent = "Characters: " + text.length;

  // Grab the button in the form
  const submitButton = document.querySelector("#taskForm button");

  // Disable the button if text is blank
  if (text === "")
  {
    submitButton.disabled = true;
    submitButton.classList.remove("primary");
  }
  else
  {
    submitButton.disabled = false;
    submitButton.classList.add("primary");
  }
});


// ---------- 7) INIT ----------

// Load saved tasks when page opens
loadTasks();

// Render tasks immediately
render();