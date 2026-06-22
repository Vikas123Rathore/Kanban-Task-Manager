import React from 'react'

const TaskList = ({
  tasks,
  setTasks,
  setInProgressTasks,
  setDoneTasks,
}) => {
  const handleDeleteTask = (index) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task?'
    )

    if (!confirmDelete) return

    setTasks((prev) => prev.filter((_, i) => i !== index))
  }

  const handleMoveToInProgress = (index) => {
    const confirmMove = window.confirm(
      'Move task to In Progress?'
    )

    if (!confirmMove) return

    const taskToMove = tasks[index]

    setInProgressTasks((prev) => [...prev, taskToMove])

    setTasks((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  const handleMoveToDone = (index) => {
    const confirmMove = window.confirm(
      'Move task to Done?'
    )

    if (!confirmMove) return

    const taskToMove = tasks[index]

    setDoneTasks((prev) => [...prev, taskToMove])

    setTasks((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  return (
    <div className="rounded-2xl bg-amber-200 w-full md:w-[30%]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <h2 className="text-2xl font-bold text-slate-600">
          Task List
        </h2>

        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          {tasks.length}
        </div>
      </div>

      <div className="m-4">
        {tasks.length === 0 ? (
          <p className="text-gray-800">No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
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

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    handleMoveToInProgress(index)
                  }
                  className="bg-blue-600 text-white px-3 py-1 rounded-xl"
                >
                  In Progress
                </button>

                <button
                  onClick={() => handleMoveToDone(index)}
                  className="bg-green-600 text-white px-3 py-1 rounded-xl"
                >
                  Done
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskList
