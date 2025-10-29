import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Workout Maintainer</h1>
        <p className="text-sm text-gray-600">welcome to personalised workout maintainer</p>
        <div className="mt-6">
          <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700">plan workout</button>
        </div>
      </div>
    </div>
  )
}
