import React, { useState } from 'react'

const TaskForm = ({ setTasks }) => {
  const [taskText, setTaskText] = useState('')
  const [priority, setPriority] = useState('Medium')
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!taskText.trim()) return
    const newTask = {
      text: taskText,
      priority: priority,
    }
    console.log('Task:', taskText, 'Priority:', priority)
    setTasks((prevTasks) => [...prevTasks, newTask])

    setTaskText('')
    setPriority('Medium')
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="my-4 w-full md:w-[60%] bg-white   rounded-2xl">


        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-end gap-4  px-8 py-6 rounded-2xl"
        >
          {/* Task Input */}
          <div className="w-full md:w-1/3">
            <label
              htmlFor="task"
              className="block mb-2 text-sm font-semibold text-gray-700"
            >
              New Task
            </label>

            <input
              id="task"
              type="text"
              placeholder="Enter your task here..."
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 outline-none capitalize"
            />
          </div>

          {/* Priority */}
          <div className="w-full md:w-1/4">
            <label
              htmlFor="priority"
              className="block mb-2 text-sm font-semibold text-gray-700"
            >
              Priority
            </label>

            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 outline-none"
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* search-bar */}
      <div className="my-4 w-full md:w-[30%] bg-white px-2 py-4 rounded-2xl">
        <h2 className="text-xl font-bold mb-4 text-slate-600">Search Tasks</h2>
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 outline-none mb-4"
        />
      </div>
    </div>
  )
}

export default TaskForm
