import React from 'react'

// TaskList Component - Displays tasks that haven't been started yet
const TaskList = ({
  tasks,
  setTasks,
  setInProgressTasks,
  setDoneTasks,
  searchTerm,
}) => {
  // Filter tasks based on search term (returns only matching tasks)
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes((searchTerm || '').toLowerCase()),
  )

  // Delete a task after confirmation
  const handleDeleteTask = (index) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task?',
    )

    // Exit if user cancels
    if (!confirmDelete) return

    // Remove task from array
    setTasks((prev) => prev.filter((_, i) => i !== index))
  }

  // Move task from Task List to In Progress
  const handleMoveToInProgress = (index) => {
    const confirmMove = window.confirm('Move task to In Progress?')
    if (!confirmMove) return

    // Get the task to move
    const taskToMove = tasks[index]

    // Add task to in-progress list
    setInProgressTasks((prev) => [...prev, taskToMove])

    // Remove task from task list
    setTasks((prev) => prev.filter((_, i) => i !== index))
  }

  // Move task from Task List directly to Done
  const handleMoveToDone = (index) => {
    const confirmMove = window.confirm('Move task to Done?')
    if (!confirmMove) return

    // Get the task to move
    const taskToMove = tasks[index]

    // Add task to done list
    setDoneTasks((prev) => [...prev, taskToMove])

    // Remove task from task list
    setTasks((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="rounded-2xl bg-linear-to-br from-lime-300 to-emerald-400 w-full md:w-[30%]">
      {/* Header Section - Shows title and task count */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <h2 className="text-2xl font-bold text-slate-600">Task List</h2>

        {/* Display total number of tasks */}
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          {tasks.length}
        </div>
      </div>

      {/* Tasks Display Area */}
      <div className="m-4">
        {filteredTasks.length === 0 ? (
          // No tasks message
          <p className="text-gray-800">No tasks added yet.</p>
        ) : (
          // Render each filtered task
          filteredTasks.map((task, index) => {
            // Find the actual index in the original tasks array
            const actualIndex = tasks.findIndex(
              (t) => t.text === task.text && t.priority === task.priority,
            )
            return (
              <div
                key={index}
                className="mb-3 p-3 bg-white text-black rounded-2xl flex flex-col gap-4"
              >
                {/* Individual Task Card with Priority Badge and Delete Button */}
                <div className="flex justify-between">
                  {/* Priority Label - Color coded (Red: High, Yellow: Medium, Green: Low) */}
                  <span
                    className={`py-2 text-sm rounded-full text-white w-1/3 text-center ${
                      task.priority === 'High'
                        ? 'bg-red-500'
                        : task.priority === 'Medium'
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                    }`}
                  >
                    {task.priority}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteTask(actualIndex)}
                    className="w-6 h-6 rounded-full bg-gray-300"
                  >
                    ×
                  </button>
                </div>

                {/* Task Text */}
                <span className="text-xl capitalize">{task.text}</span>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {/* Move to In Progress Button */}
                  <button
                    onClick={() => handleMoveToInProgress(actualIndex)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-xl"
                  >
                    In Progress
                  </button>

                  {/* Move to Done Button */}
                  <button
                    onClick={() => handleMoveToDone(actualIndex)}
                    className="bg-green-600 text-white px-3 py-1 rounded-xl"
                  >
                    Done
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default TaskList
