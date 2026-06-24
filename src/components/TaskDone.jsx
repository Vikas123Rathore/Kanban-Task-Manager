import React, { useState } from 'react'
import toast from 'react-hot-toast'

const TaskDone = ({ doneTasks, setDoneTasks, searchTerm }) => {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editText, setEditText] = useState('')

  const filteredTasks = doneTasks.filter((task) =>
    task.text.toLowerCase().includes((searchTerm || '').toLowerCase()),
  )

  const handleDeleteTask = (task) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task?',
    )

    if (!confirmDelete) return

    setDoneTasks((prevTasks) =>
      prevTasks.filter(
        (t) => !(t.text === task.text && t.priority === task.priority),
      ),
    )

    toast.error(`"${task.text}" removed from completed tasks`)
  }

  const handleSaveEdit = (index) => {
    if (!editText.trim()) {
      toast.error('Task cannot be empty')
      return
    }

    const updatedTasks = [...doneTasks]

    updatedTasks[index].text = editText

    setDoneTasks(updatedTasks)

    setEditingIndex(null)
    setEditText('')

    toast.success('Task updated!')
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
        {filteredTasks.length === 0 ? (
          <p className="text-gray-800">No completed tasks.</p>
        ) : (
          filteredTasks.map((task, index) => (
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
                  onClick={() => handleDeleteTask(task)}
                  className="text-gray-500 text-xl w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer"
                >
                  ×
                </button>
              </div>

              {editingIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border p-2 rounded-md w-full"
                />
              ) : (
                <span className="capitalize text-xl">{task.text}</span>
              )}

              {editingIndex === index ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="bg-green-600 text-white px-3 py-1 rounded-xl"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => {
                      setEditingIndex(null)
                      setEditText('')
                    }}
                    className="bg-gray-500 text-white px-3 py-1 rounded-xl"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setEditingIndex(index)
                    setEditText(task.text)
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-xl w-fit"
                >
                  Edit
                </button>
              )}

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
