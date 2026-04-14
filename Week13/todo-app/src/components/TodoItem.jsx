function TodoItem({todo, onToggle, onEdit, editId, onEditText, editText, onSave, onDelete}) {
  return (
    <li key={todo.id}>
      {editId !== todo.id
        ?
          <span onClick={() => onToggle(todo.id)}>
            {todo.completed ? "✔" : ""}
            {todo.text}
          </span>
        :
          <input
            type="text"
            value={editText}
            onChange={(e) => onEditText(e.target.value)}
          />
      }
      {editId !== todo.id
        ? <button onClick={() => onEdit(todo.id)}>Edit</button>
        : <button onClick={() => onSave(todo.id)}>Save</button>
      }
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;