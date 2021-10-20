import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Shopping',
      day: 'Feb 10 2021',
      reminder: true
    },
    {
      id: 2,
      text: 'Fishing',
      day: 'Feb 11 2021',
      reminder: true
    },
    {
      id: 3,
      text: 'Jogging',
      day: 'Feb 12 2021',
      reminder: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task }
    setTask([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task'}
    </div>
  );
}

export default App;
