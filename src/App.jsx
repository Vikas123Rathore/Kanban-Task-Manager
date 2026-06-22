import React, { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([])

  return (
    <div className="min-h-screen bg-red-50 text-white px-8 py-4">
      <Header />

      <TaskForm setTasks={setTasks} />

      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
