// import React from 'react'

// const TaskDone = ({doneTasks}) => {
//   const handleDeleteTask = (index) => {
//     const confirmDelete = window.confirm(
//       'Are you sure you want to delete this task?',
//     )
//     if (!confirmDelete) return

//     setDoneTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
//   }
//   return (
//     <div className="rounded-2xl bg-gray-200 border-double border-green-800 text-white w-full md:w-[30%] ">
//       <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
//         <div className="text-2xl font-bold  text-slate-600 uppercase tracking-wider">
//           Done
//         </div>
//         <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center ">
//           {doneTasks.length}
//         </div>
//       </div>
//       <div className="m-4 pb-2 px-4">
//         {doneTasks.length === 0 ? (
//           <p className="text-gray-800">No tasks added yet.</p>
//         ) : (
//           doneTasks.map((task, index) => (
//             <div
//               key={index}
//               className="mb-2 p-3 bg-white text-black rounded-2xl flex flex-col gap-4 "
//             >
//               <div className="flex items-center justify-between">
//                 <span
//                   className={` py-2 text-sm rounded-full text-white w-1/3 text-center ${
//                     task.priority === 'High'
//                       ? 'bg-red-500'
//                       : task.priority === 'Medium'
//                         ? 'bg-yellow-500'
//                         : 'bg-green-500'
//                   }`}
//                 >
//                   {task.priority}
//                 </span>
//                 <div
//                   className="text-gray-500 text-xl w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer"
//                   onClick={() => handleDeleteTask(index)}
//                 >
//                   x
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="capitalize leading-2 text-xl">
//                   {task.text}
//                 </span>
//               </div>
//               <div className="flex gap-4 ">
//                 <button className="bg-green-600 text-white px-2 border border-gray-500 py-1 texy-sm rounded-2xl">
//                   Done
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   )
// }

// export default TaskDone
import React from 'react'

const TaskDone = ({ doneTasks, setDoneTasks }) => {
  const handleDeleteTask = (index) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task?'
    )

    if (!confirmDelete) return

    setDoneTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    )
  }

  return (
    <div className="rounded-2xl bg-linear-to-r from-amber-200 to-green-300 border-double border-green-800 text-white w-full md:w-[30%]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <h2 className="text-2xl font-bold text-slate-600 uppercase tracking-wider">
          Done
        </h2>

        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          {doneTasks.length}
        </div>
      </div>

      <div className="m-4 pb-2 px-4">
        {doneTasks.length === 0 ? (
          <p className="text-gray-800">No completed tasks.</p>
        ) : (
          doneTasks.map((task, index) => (
            <div
              key={index}
              className="mb-2 p-3 bg-white text-black rounded-2xl flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
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
                  className="text-gray-500 text-xl w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer"
                >
                  ×
                </button>
              </div>

              <span className="capitalize text-xl">
                {task.text}
              </span>

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
