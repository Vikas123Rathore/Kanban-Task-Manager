import React from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import Task from './components/Task'

const App = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      <Header/>
      <TaskForm/>
      <Task/>
    </div>
  )
}

export default App
