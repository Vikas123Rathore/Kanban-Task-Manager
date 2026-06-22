import React, { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Progress from './components/Progress'
import TaskDone from './components/TaskDone'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])
  return (
    <>
      <div className="min-h-screen bg-red-50 text-white px-8 py-4">
        <Header />

        <TaskForm setTasks={setTasks} />

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <TaskList
          
            tasks={tasks}
            setTasks={setTasks}
            setInProgressTasks={setInProgressTasks}
            setDoneTasks={setDoneTasks}
          />
          {/* <Progress /> */}
          <Progress inProgressTasks={inProgressTasks} setInProgressTasks={setInProgressTasks}/>
          {/* <TaskDone /> */}
          <TaskDone />
        </div>
      </div>
    </>
  )
}

export default App
