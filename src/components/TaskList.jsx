import React from 'react'

const TaskList = ({ tasks }) => {
  return (
    <div className="rounded-2xl bg-gray-200 border-double border-green-800 text-white w-full md:w-[30%]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <div className="text-2xl font-bold  text-slate-600 uppercase tracking-wider">
          Task List
        </div>
        <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center ">
          0
        </div>
      </div>
      <div className="m-4 pb-2 px-4">
        {tasks.length === 0 ? (
          <p className="text-gray-800">No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className="mb-2 p-3 bg-white text-black rounded-md"
            >
              <span>{task.text}</span>

              <span
                className={`px-2 py-1 text-xs rounded-full text-white ${
                  task.priority === 'High'
                    ? 'bg-red-500'
                    : task.priority === 'Medium'
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                }`}
              >
                {task.priority}
              </span>
              <div>
                <button>Move to In Progress</button>
                <button>Move to Done</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskList
