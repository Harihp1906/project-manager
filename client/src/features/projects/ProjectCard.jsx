import React from 'react';

function ProjectCard({ project, onDelete }) {
  const getInitials = (name) => {
    if (!name) return '?';
    const names = name.split(' ');
    return (names[0][0] + (names[1] ? names[1][0] : '')).toUpperCase();
  };

  const getAvatarColor = (name) => {
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 border border-gray-100 relative">
      
      {/* Delete button */}
      <button
        onClick={() => onDelete(project.id)}
        className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-sm font-medium hover:bg-red-50 px-2 py-1 rounded transition"
      >
        Delete
      </button>

      {/* Project Name */}
      <h3 className="text-xl font-bold mb-2 text-gray-800 pr-16">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 line-clamp-3">
        {project.description || 'No description provided'}
      </p>

      {/* Status + Created Date */}
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
          {project.status}
        </span>
        <span className="text-gray-500">
          Created: {project.createdAt}
        </span>
      </div>

      {/* ✅ Deadline Added Here */}
      {project.deadline && (
        <div className="mt-2 text-sm">
          <span className="text-gray-600 font-medium">Deadline: </span>
          <span className="text-red-600 font-medium">
            {project.deadline}
          </span>
        </div>
      )}

      {/* Members */}
      {project.members && project.members.length > 0 ? (
        <div className="mt-4">
          <p className="text-sm text-gray-600 font-medium mb-2">
            Team Members:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.members.map((member, idx) => (
              <div key={idx} className="relative group" title={member}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium shadow-sm ${getAvatarColor(member)}`}
                >
                  {getInitials(member)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 text-sm text-gray-500 italic">
          No members assigned yet
        </div>
      )}
    </div>
  );
}

export default ProjectCard;