import React from 'react'

const Progress = ({
  inProgressTasks,
  setInProgressTasks,
  setDoneTasks,
}) => {
  const handleDeleteTask = (index) => {
    setInProgressTasks((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  const handleDoneTask = (index) => {
    const confirmMove = window.confirm(
      'Move task to Done?'
    )

    if (!confirmMove) return

    const taskToMove = inProgressTasks[index]

    setDoneTasks((prev) => [...prev, taskToMove])

    setInProgressTasks((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  return (
    <div className="rounded-2xl bg-emerald-100 w-full md:w-[30%]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <h2 className="text-2xl font-bold text-slate-600">
          In Progress
        </h2>

        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          {inProgressTasks.length}
        </div>
      </div>

      <div className="m-4">
        {inProgressTasks.length === 0 ? (
          <p className="text-gray-800">
            No tasks in progress.
          </p>
        ) : (
          inProgressTasks.map((task, index) => (
            <div
              key={index}
              className="mb-3 p-3 bg-white text-black rounded-2xl flex flex-col gap-4"
            >
              <div className="flex justify-between">
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

                <button
                  onClick={() => handleDeleteTask(index)}
                  className="w-6 h-6 rounded-full bg-gray-300"
                >
                  ×
                </button>
              </div>

              <span className="text-xl capitalize">
                {task.text}
              </span>

              <button
                onClick={() => handleDoneTask(index)}
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
