import './index.css';
import React, { useState } from 'react';
import Header from './components/common/Header';
import ProjectCard from './features/projects/ProjectCard';
import CreateProjectModal from './features/projects/CreateProjectModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== projectId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
          >
            + Add New Project
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center text-gray-500">
            <p className="text-lg mb-2">No projects yet</p>
            <p className="text-sm">Click "+ Add New Project" to create your first one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDelete={handleDeleteProject}
              />
            ))}
          </div>
        )}
      </main>

      {isModalOpen && (
        <CreateProjectModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddProject}
        />
      )}
    </div>
  );
}

export default App;