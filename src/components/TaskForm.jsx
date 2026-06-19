import React from 'react'
import { useState } from 'react'
const TaskForm = () => {
  const [task, setTask] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim() === '') return
    console.log(task)
    setTask('')
  }
  return (
    <div className="m-4 p-4 ">
      <h2 className="text-xl font-bold mb-4 text-white ">Add New Task</h2>
      <form
        onSubmit={handleSubmit}
        className="px-4 py-2 flex flex-col md:flex-row items-center gap-2 "
      >
        <input
          type="text"
          className="mt-1  w-full md:w-1/2 border border-gray-300 rounded-md shadow-sm p-2 px-2 outline-none placeholder-white text-white bg-transparent/5 capitalize"
          placeholder="Enter your task here..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 w-full md:w-1/6 text-white px-4 py-2.5 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm
