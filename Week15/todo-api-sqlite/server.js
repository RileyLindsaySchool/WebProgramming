const express = require('express');
const sqlite3 = require('sqlite3').verbose();
 
const app = express();
app.use(express.json());
 
// Connect to SQLite database file
const db = new sqlite3.Database('./todos.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});
 
// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL,
    completed INTEGER DEFAULT 0
  )
`);
 
// Insert default records first
db.get('SELECT COUNT(*) AS count FROM todos', (err, row) => {
  if (err) {
    console.error(err.message);
    return;
  }
 
  if (row.count === 0) {
    db.run(`INSERT INTO todos (task, completed) VALUES ('Learn Express', 0)`);
    db.run(`INSERT INTO todos (task, completed) VALUES ('Build API', 1)`);
    console.log('Default records inserted');
  }
});
 
// READ all
app.get('/todos', (req, res) => {
  db.all('SELECT * FROM todos', [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
 
    const formattedRows = rows.map(todo => ({
      id: todo.id,
      task: todo.task,
      completed: todo.completed === 1
    }));
 
    res.json(formattedRows);
  });
});
 
// READ by ID
app.get('/todos/:id', (req, res) => {
  db.get('SELECT * FROM todos WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Not found');
 
    res.json({
      id: row.id,
      task: row.task,
      completed: row.completed === 1
    });
  });
});
 
// CREATE
app.post('/todos', (req, res) => {
  const { task, completed = false } = req.body;
 
  if (!task) return res.status(400).send('Task is required');
 
  db.run(
    'INSERT INTO todos (task, completed) VALUES (?, ?)',
    [task, completed ? 1 : 0],
    function (err) {
      if (err) return res.status(500).send(err.message);
 
      res.json({
        id: this.lastID,
        task,
        completed
      });
    }
  );
});
 
// UPDATE
app.put('/todos/:id', (req, res) => {
  const { task, completed } = req.body;
 
  db.get('SELECT * FROM todos WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Not found');
 
    const updatedTask = task ?? row.task;
    const updatedCompleted = completed ?? (row.completed === 1);
 
    db.run(
      'UPDATE todos SET task = ?, completed = ? WHERE id = ?',
      [updatedTask, updatedCompleted ? 1 : 0, req.params.id],
      function (err) {
        if (err) return res.status(500).send(err.message);
 
        res.json({
          id: Number(req.params.id),
          task: updatedTask,
          completed: updatedCompleted
        });
      }
    );
  });
});
 
// DELETE
app.delete('/todos/:id', (req, res) => {
  db.run('DELETE FROM todos WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).send(err.message);
    if (this.changes === 0) return res.status(404).send('Not found');
 
    res.send(`To-Do ${req.params.id} deleted`);
  });
});
 
app.listen(3000, () => {
  console.log('Server running on port 3000');
});