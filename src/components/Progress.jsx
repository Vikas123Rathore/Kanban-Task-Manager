import React from 'react'

const Progress = ({
  inProgressTasks,
  setInProgressTasks,
  setDoneTasks,
  searchTerm,
}) => {
  // Filter in-progress tasks based on search term
  const filteredTasks = inProgressTasks.filter((task) =>
    task.text.toLowerCase().includes((searchTerm || '').toLowerCase()),
  )

  // Delete a task from the in-progress list
  const handleDeleteTask = (task) => {
    // Remove task from in-progress list by matching text and priority
    setInProgressTasks((prev) =>
      prev.filter(
        (t) => !(t.text === task.text && t.priority === task.priority),
      ),
    )
  }

  // Move task from In Progress to Done
  const handleDoneTask = (task) => {
    // Show confirmation dialog
    const confirmMove = window.confirm('Move task to Done?')
    if (!confirmMove) return

    // Add task to done list
    setDoneTasks((prev) => [...prev, task])

    // Remove task from in-progress list
    setInProgressTasks((prev) =>
      prev.filter(
        (t) => !(t.text === task.text && t.priority === task.priority),
      ),
    )
  }

  return (
    <div className="rounded-2xl bg-linear-to-r from-emerald-100 to-emerald-900 w-full md:w-[30%]">
      {/* Header Section - Shows title and task count */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <h2 className="text-2xl font-bold text-slate-600">In Progress</h2>

        {/* Display total number of in-progress tasks */}
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          {inProgressTasks.length}
        </div>
      </div>

      {/* Tasks Display Area */}
      <div className="m-4">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-800">No tasks in progress.</p>
        ) : (
          filteredTasks.map((task, index) => (
            <div
              key={index}
              className="mb-3 p-3 bg-white text-black rounded-2xl flex flex-col gap-4"
            >
              {/* Individual In-Progress Task Card with Priority Badge and Delete Button */}
              <div className="flex justify-between">
                {/* Priority Label - Color coded */}
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
                  onClick={() => handleDeleteTask(task)}
                  className="w-6 h-6 rounded-full bg-gray-300"
                >
                  ×
                </button>
              </div>

              {/* Task Text */}
              <span className="text-xl capitalize">{task.text}</span>

              {/* Move to Done Button */}
              <button
                onClick={() => handleDoneTask(task)}
                className="bg-green-600 text-white px-3 py-1 rounded-xl w-fit"
              >
                Move To Done
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Progress
