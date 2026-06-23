import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Progress from './components/Progress'
import TaskDone from './components/TaskDone'
import DashboardOverview from './components/DashboardOverview'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [inProgressTasks, setInProgressTasks] = useState(() => {
    const savedTasks = localStorage.getItem('inProgressTasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [doneTasks, setDoneTasks] = useState(() => {
    const savedTasks = localStorage.getItem('doneTasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('inProgressTasks', JSON.stringify(inProgressTasks))
  }, [inProgressTasks])

  useEffect(() => {
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks))
  }, [doneTasks])

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
