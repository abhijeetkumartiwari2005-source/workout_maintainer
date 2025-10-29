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




export { Navbar, Hero,  Features, Footer };
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
// 3. Features Component
function Features() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why You'll Love It</h3>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-500 text-4xl mb-4">🏋️</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Log Any Workout</h4>
            <p className="text-gray-600">
              From weightlifting to cardio, log every set, rep, and minute with our easy-to-use interface.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-500 text-4xl mb-4">📈</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Visualize Progress</h4>
            <p className="text-gray-600">
              Watch your strength and endurance grow with beautiful, simple charts and graphs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-indigo-500 text-4xl mb-4">💪</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Stay Motivated</h4>
            <p className="text-gray-600">
              Set personal records, earn achievements, and build a consistent routine.
            </p>
          </div>

        </div>
      </div>
    </div>
  );}
  // 4. Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 WorkoutMaintainer. All rights reserved.</p>
      </div>
    </footer>
  );
}

