import './index.css';   
import React, { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Smart Project Manager</h1>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
          <button 
            onClick={openModal}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
          >
            + Add New Project
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Card */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Sample Project</h3>
            <p className="text-gray-600 mb-4">Placeholder for future tasks.</p>
            <div className="flex justify-between text-sm">
              <span className="text-blue-600 font-medium">In Progress</span>
              <span className="text-gray-500">Due: 2026-04-15</span>
            </div>
          </div>

          {/* Empty State */}
          <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500 py-10 col-span-1 md:col-span-2 lg:col-span-3">
            No projects yet<br />
            <span className="text-sm">Click "Add New Project" to get started!</span>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md mx-4">
            <h3 className="text-2xl font-bold mb-6">Create New Project</h3>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Website Redesign"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Brief project overview..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;