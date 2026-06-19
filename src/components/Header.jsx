import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-2 border-b border-gray-200 bg-black shadow-sm">
      <h1 className="text-center text-2xl md:text-5xl font-extrabold uppercase tracking-wider bg-linear-to-r from-yellow-200  to-green-800 bg-clip-text text-transparent ">
        Kanban Task Board
      </h1>
      <p className="text-center text-red-300 mt-2">
        Organize, Track & Manage Your Tasks
      </p>
    </header>
  );
};

export default Header;
