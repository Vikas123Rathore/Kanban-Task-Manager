import React from 'react'

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-gray-200 bg-yellow-200 rounded-2xl shadow-sm px-4">
      <div className="flex items-center justify-start gap-3">

        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
          <span className="text-green-500 font-extrabold text-xl">
            KB
          </span>
        </div>

        {/* App Name */}
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wider">
          <span className="text-black">Kan</span>
          <span className="text-green-800">ban</span>
        </h1>

      </div>

      <p className=" text-red-800 mt-2">
        Organize, Track & Manage Your Tasks
      </p>
    </header>
  )
}

export default Header
