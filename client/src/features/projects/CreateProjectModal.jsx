import React, { useState } from 'react';

function CreateProjectModal({ onClose, onSubmit }) {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [deadline, setDeadline] = useState('');

  const availableMembers = [
    { id: 1, name: 'Hari' },
    { id: 2, name: 'Arun' },
    { id: 3, name: 'Priya' },
    { id: 4, name: 'TL Raj' },
  ];

  // Create quick lookup map
  const memberMap = Object.fromEntries(
    availableMembers.map(m => [m.id, m.name])
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectName.trim()) {
      alert('Project name is required!');
      return;
    }

    const newProject = {
      id: crypto.randomUUID(),
      name: projectName.trim(),
      description: description.trim(),
      status: 'Pending',
      createdAt: new Date().toLocaleDateString(),
      deadline: deadline || 'Not set',
      members: selectedMembers.map(id => memberMap[id] || 'Unknown'),
    };

    onSubmit(newProject);
    onClose();

    // Reset form
    setProjectName('');
    setDescription('');
    setSelectedMembers([]);
    setDeadline('');
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Create New Project
        </h3>

        <form onSubmit={handleSubmit}>

          {/* Members (Checkbox style) */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Assign Members
            </label>

            <div className="space-y-2">
              {availableMembers.map(member => (
                <label key={member.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(member.id)}
                    onChange={(e) => {
                      const id = member.id;
                      if (e.target.checked) {
                        setSelectedMembers([...selectedMembers, id]);
                      } else {
                        setSelectedMembers(
                          selectedMembers.filter(m => m !== id)
                        );
                      }
                    }}
                  />
                  <span>{member.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Name */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="e.g. E-commerce Website"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              rows="4"
              placeholder="What is this project about?"
            />
          </div>

          {/* Deadline */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Deadline
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
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
  );
}

export default CreateProjectModal;