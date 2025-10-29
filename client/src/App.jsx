import React from 'react'


// 1. Navbar Component
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">WorkoutMaintainer</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-indigo-300">Login</a>
          <a href="#" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
<nav className="bg-gray-800 text-white p-4 shadow-md bg-red-500"></nav>


export { Navbar };
