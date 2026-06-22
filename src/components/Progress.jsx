import React from 'react'

const Progress = ({ inProgressTasks, setInProgressTasks }) => {
  const handleDeleteTask = (index) => {
    const updatedTasks = inProgressTasks.filter((_, i) => i !== index)
    console.log('Deleting task at index:', index)
    setInProgressTasks(updatedTasks)
  }
  return (
    <div className="rounded-2xl bg-gray-200 border-double border-green-800 text-white w-full md:w-[30%] ">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <div className="text-2xl font-bold  text-slate-600 uppercase tracking-wider">
          In Progress
        </div>
        <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center ">
          {inProgressTasks.length}
        </div>
      </div>
      <div className="m-4 pb-2 px-4">
        {inProgressTasks.length === 0 ? (
          <p className="text-gray-800">No tasks added yet.</p>
        ) : (
          inProgressTasks.map((task, index) => (
            <div
              key={index}
              className="mb-2 p-3 bg-white text-black rounded-2xl flex flex-col gap-4 "
            >
              <div className="flex items-center justify-between">
                <span
                  className={` py-2 text-sm rounded-full text-white w-1/3 text-center ${
                    task.priority === 'High'
                      ? 'bg-red-500'
                      : task.priority === 'Medium'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                  }`}
                >
                  {task.priority}
                </span>
                <div
                  className="text-gray-500 text-xl w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer"
                  onClick={() => handleDeleteTask(index)}
                >
                  x
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="capitalize leading-2 text-xl">
                  {task.text}
                </span>
              </div>
              <div className="flex gap-4 ">
                <button className="bg-green-600 text-white px-2 border border-gray-500 py-1 texy-sm rounded-2xl">
                  Move to Done
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Progress
