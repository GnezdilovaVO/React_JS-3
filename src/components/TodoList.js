import DeleteIcon from "@mui/icons-material/Delete";
import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <>
      <TextField
        label="Enter text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTask}
        style={{ marginBottom: 20 }}
      >
        Add task
      </Button>
      {tasks.map((task, i) => (
        <Card key={i} variant="outlined">
          <CardContent>
            <Typography>{task}</Typography>
            <IconButton onClick={() => deleteTask(i)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default TodoList;
