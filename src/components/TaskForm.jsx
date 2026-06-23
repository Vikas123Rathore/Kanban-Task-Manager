import React, { useState } from 'react'
import toast from 'react-hot-toast'
// TaskForm Component - Handles task creation and search functionality
const TaskForm = ({ setTasks, searchTerm, setSearchTerm, tasks }) => {
  // State for the input task text
  const [taskText, setTaskText] = useState('')
  // State for task priority (High, Medium, Low)
  const [priority, setPriority] = useState('Medium')

  // Handle form submission for adding a new task
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate that task text is not empty
    if (!taskText.trim()) {
      toast.error('Please enter a task')
      return
    }

    // Create new task object with text and priority
    const newTask = {
      text: taskText,
      priority: priority,
    }
    console.log('Task:', taskText, 'Priority:', priority)

    // Add new task to tasks array
    setTasks((prevTasks) => [...prevTasks, newTask])

    // Show success toast
    toast.success(`Task "${taskText}" added successfully!`)

    // Reset form fields
    setTaskText('')
    setPriority('Medium')
  }

  // Filter tasks based on search term (case-insensitive)
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col md:flex-row gap-4  mx-auto w-full md:w-[90%] rounded-2xl md:ml-30 md:mt-10">
      {/* Task Input Section */}
      <div className="my-4 w-full md:w-[60%] bg-white rounded-2xl">
        {/* Form for adding new tasks */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-end gap-4  px-8 py-6 rounded-2xl"
        >
          {/* Task Text Input */}
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
              required
            />
          </div>

          {/* Priority Dropdown */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* Search Section */}
      <div className="my-4 w-full md:w-[30%] bg-white px-2 py-4 rounded-2xl">
        <h2 className="text-xl font-bold mb-4 text-slate-600">Search Tasks</h2>
        {/* Search Input - Filters tasks in real-time */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 outline-none mb-4"
        />
      </div>
    </div>
  )
}

export default TaskForm
