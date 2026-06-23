import React from 'react'
import toast from 'react-hot-toast'

const Header = ({ clearAllData }) => {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 px-6 py-5 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)] md:px-8 md:py-6">
      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-lime-400/20 blur-3xl" />
      <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-lime-400 to-emerald-500 shadow-lg ring-2 ring-lime-300/30">
            <div className="absolute inset-0.5 rounded-full bg-linear-to-br from-lime-300 to-emerald-400" />
            <span className="relative font-black text-2xl text-slate-900">
              KB
            </span>
          </div>

          {/* App Name & Tagline */}
          <div>
            <h1 className="text-4xl font-black leading-none tracking-tight md:text-5xl">
              <span className="bg-linear-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Kanban
              </span>
            </h1>
            <p className="mt-1 text-sm font-medium text-slate-300 md:text-base">
              Task Manager
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="hidden flex-col items-end gap-1 md:flex">
          <p className="text-right text-sm font-semibold uppercase tracking-widest text-emerald-300/90">
            Organize • Track • Deliver
          </p>
          <button
            onClick={() => {
              clearAllData()
              toast.success('All tasks cleared!')
            }}
            className="bg-red-500 px-4 py-2 rounded-xl text-sm font-semibold text-white hover:bg-red-600 transition-colors cursor-pointer"
          >
            Clear All
          </button>
          {/* <div className="h-1 w-12 rounded-full bg-linear-to-r from-lime-400 to-emerald-400" /> */}
        </div>
      </div>
    </header>
  )
}

export default Header
