import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const editTask = (id) => {
    setEditId(id);
    let selectedTodo = todos.filter(todo => todo.id === id)[0];
    setEditText(selectedTodo.text);
  }

  const saveTask = (id) => {
    setEditId(-1);
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  return (
    <div>
      <h1>React To-Do App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleComplete}
            onEdit={editTask}
            editId={editId}
            onEditText={setEditText}
            editText={editText}
            onSave={saveTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
 
export default App;