import React from 'react'

const TaskDone = () => {
  return (
    <div className="rounded-2xl bg-gray-200 border-double border-green-800 text-white w-full md:w-[30%] ">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <div className="text-2xl font-bold  text-slate-600 uppercase tracking-wider">
          Done
        </div>
        <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center ">
          0
        </div>
      </div>
      <div className="m-4 pb-2 px-4">
        <p className="text-gray-800">No tasks in done.</p>
      </div>
    </div>
  )
}

export default TaskDone
