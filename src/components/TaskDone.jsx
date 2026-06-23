import React from 'react'

// TaskDone Component - Displays completed tasks
const TaskDone = ({ doneTasks, setDoneTasks, searchTerm }) => {
  // Filter done tasks based on search term
  const filteredTasks = doneTasks.filter((task) =>
    task.text.toLowerCase().includes((searchTerm || '').toLowerCase()),
  )

  // Delete a completed task
  const handleDeleteTask = (task) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task?',
    )

    // Exit if user cancels
    if (!confirmDelete) return

    // Remove task from done list by matching text and priority
    setDoneTasks((prevTasks) =>
      prevTasks.filter(
        (t) => !(t.text === task.text && t.priority === task.priority),
      ),
    )
  }

  return (
    <div className="rounded-2xl bg-linear-to-r from-amber-200 to-green-300 border-double border-green-800 text-white w-full md:w-[30%]">
      {/* Header Section - Shows title and task count */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <h2 className="text-2xl font-bold text-slate-600 uppercase tracking-wider">
          Done
        </h2>

        {/* Display total number of completed tasks */}
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          {doneTasks.length}
        </div>
      </div>

      {/* Display completed tasks list */}
      <div className="m-4 pb-2 px-4">
        {/* Show message if no tasks match search */}
        {filteredTasks.length === 0 ? (
          <p className="text-gray-800">No completed tasks.</p>
        ) : (
          // Render each filtered task
          filteredTasks.map((task, index) => (
            <div
              key={index}
              className="mb-2 p-3 bg-white text-black rounded-2xl flex flex-col gap-4"
            >
              {/* Individual Completed Task Card with Priority Badge and Delete Button */}
              <div className="flex items-center justify-between">
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
                  className="text-gray-500 text-xl w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer"
                >
                  ×
                </button>
              </div>

              {/* Task Text */}
              <span className="capitalize text-xl">{task.text}</span>

              {/* Completion Indicator */}
              <div className="w-fit bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                Completed ✓
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskDone
