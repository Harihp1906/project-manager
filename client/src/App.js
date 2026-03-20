import './index.css';   
import React, { useState } from 'react';

function App() {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for the list of projects (starts empty)
  const [projects, setProjects] = useState([]);

  // State for form inputs
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form when closing
    setProjectName('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectName.trim()) {
      alert('Project name is required!');
      return;
    }

    // Create new project object
    const newProject = {
      id: Date.now(), // simple unique ID for now
      name: projectName.trim(),
      description: description.trim(),
      status: 'Pending', // default status
      createdAt: new Date().toISOString().split('T')[0], // today's date
    };

    // Add to projects list
    setProjects([...projects, newProject]);

    // Reset form & close modal
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Smart Project Manager</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
          <button
            onClick={openModal}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
          >
            + Add New Project
          </button>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center text-gray-500">
            <p className="text-lg mb-2">No projects yet</p>
            <p className="text-sm">Click "+ Add New Project" to create your first one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description || 'No description'}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                    {project.status}
                  </span>
                  <span className="text-gray-500">
                    Created: {project.createdAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg mx-4 transform transition-all">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Create New Project</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="e.g. E-commerce Website"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  rows="4"
                  placeholder="What is this project about? Goals, features, etc..."
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md"
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