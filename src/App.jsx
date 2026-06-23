import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Progress from './components/Progress'
import TaskDone from './components/TaskDone'
import DashboardOverview from './components/DashboardOverview'

// Main App Component - Manages all task states and handles local storage persistence
const App = () => {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('')

  // State for tasks that are not started yet - loads from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  // State for tasks that are currently in progress - loads from localStorage
  const [inProgressTasks, setInProgressTasks] = useState(() => {
    const savedTasks = localStorage.getItem('inProgressTasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  // State for tasks that are completed - loads from localStorage
  const [doneTasks, setDoneTasks] = useState(() => {
    const savedTasks = localStorage.getItem('doneTasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Save inProgressTasks to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('inProgressTasks', JSON.stringify(inProgressTasks))
  }, [inProgressTasks])

  // Save doneTasks to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks))
  }, [doneTasks])

  // Function to clear all data from localStorage and reset all states
  const clearAllData = () => {
    localStorage.removeItem('tasks')
    localStorage.removeItem('inProgressTasks')
    localStorage.removeItem('doneTasks')

    setTasks([])
    setInProgressTasks([])
    setDoneTasks([])
  }

  return (
    <div className="mx-auto min-h-screen px-4 py-6 text-slate-900 bg-lime-200 md:px-8">
      <Header clearAllData={clearAllData} />

      <div className="mt-6 md:mx-24">
        <DashboardOverview
          tasks={tasks}
          inProgressTasks={inProgressTasks}
          doneTasks={doneTasks}
        />
      </div>

      <TaskForm
        setTasks={setTasks}
        tasks={tasks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="flex flex-col md:flex-row gap-4 mt-4 mx-auto w-full md:w-[90%] rounded-2xl md:ml-30">
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          setInProgressTasks={setInProgressTasks}
          setDoneTasks={setDoneTasks}
          searchTerm={searchTerm}
        />

        <Progress
          inProgressTasks={inProgressTasks}
          setInProgressTasks={setInProgressTasks}
          setDoneTasks={setDoneTasks}
          searchTerm={searchTerm}
        />

        <TaskDone
          doneTasks={doneTasks}
          setDoneTasks={setDoneTasks}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  )
}

export default App
