import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Progress = ({
  inProgressTasks,
  setInProgressTasks,
  setDoneTasks,
  searchTerm,
}) => {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editText, setEditText] = useState('')

  // Filter tasks
  const filteredTasks = inProgressTasks.filter((task) =>
    task.text.toLowerCase().includes((searchTerm || '').toLowerCase()),
  )

  // Delete Task
  const handleDeleteTask = (task) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task?',
    )

    if (!confirmDelete) return

    setInProgressTasks((prev) =>
      prev.filter(
        (t) => !(t.text === task.text && t.priority === task.priority),
      ),
    )

    toast.error(`"${task.text}" removed from In Progress`)
  }

  // Move To Done
  const handleDoneTask = (task) => {
    const confirmMove = window.confirm('Move task to Done?')

    if (!confirmMove) return

    setDoneTasks((prev) => [...prev, task])

    setInProgressTasks((prev) =>
      prev.filter(
        (t) => !(t.text === task.text && t.priority === task.priority),
      ),
    )

    toast.success(`"${task.text}" completed! 🎉`)
  }

  // Save Edited Task
  const handleSaveEdit = (index) => {
    if (!editText.trim()) {
      toast.error('Task cannot be empty')
      return
    }

    const updatedTasks = [...inProgressTasks]

    updatedTasks[index].text = editText

    setInProgressTasks(updatedTasks)

    setEditingIndex(null)
    setEditText('')

    toast.success('Task updated successfully!')
  }

  return (
    <div className="rounded-2xl bg-linear-to-r from-emerald-100 to-emerald-900 w-full md:w-[30%]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-400">
        <h2 className="text-2xl font-bold text-slate-600">In Progress</h2>

        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          {inProgressTasks.length}
        </div>
      </div>

      <div className="m-4">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-800">No tasks in progress.</p>
        ) : (
          filteredTasks.map((task, index) => (
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
                  onClick={() => handleDeleteTask(task)}
                  className="w-6 h-6 rounded-full bg-gray-300"
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
                <span className="text-xl capitalize">{task.text}</span>
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
