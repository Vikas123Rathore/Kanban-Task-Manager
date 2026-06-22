import React, { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Progress from './components/Progress'
import TaskDone from './components/TaskDone'
import DashboardOverview from './components/DashboardOverview'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])

  return (
    <div className="mx-auto min-h-screen px-4 py-6 text-slate-900 bg-lime-200 md:px-8">
      <Header />

      <div className="mt-6 md:mx-24">
        <DashboardOverview
          tasks={tasks}
          inProgressTasks={inProgressTasks}
          doneTasks={doneTasks}
        />
      </div>

      <TaskForm setTasks={setTasks} />

      <div className="flex flex-col md:flex-row gap-4 mt-4 mx-auto w-full md:w-[90%] rounded-2xl md:ml-30">
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          setInProgressTasks={setInProgressTasks}
          setDoneTasks={setDoneTasks}
        />

        <Progress
          inProgressTasks={inProgressTasks}
          setInProgressTasks={setInProgressTasks}
          setDoneTasks={setDoneTasks}
        />

        <TaskDone doneTasks={doneTasks} setDoneTasks={setDoneTasks} />
      </div>
    </div>
  )
}

export default App
