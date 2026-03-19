import React from 'react';
import './index.css';
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-purple-800 text-white p-6 shadow-xl rounded-b-2xl">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Smart Project Manager</h1>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition">
            + Add New Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Sample Project</h3>
            <p className="text-gray-600 mb-4">Placeholder for future tasks.</p>
            <div className="flex justify-between text-sm">
              <span className="text-blue-600">In Progress</span>
              <span className="text-gray-500">Due: 2026-04-15</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500 py-10">
            No projects yet<br />Start by adding one!
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;