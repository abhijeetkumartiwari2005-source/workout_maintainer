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




export { Navbar, Hero };
// 2. Hero Component
function Hero() {
  return (
    <div className="bg-gray-900 text-white py-20 md:py-32">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Track Your Progress. Crush Your Goals.</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          The all-in-one solution to log your workouts, monitor your gains, and stay motivated.
        </p>
        <a href="#" className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300">
          Get Started for Free
        </a>
      </div>
    </div>
  );
}
