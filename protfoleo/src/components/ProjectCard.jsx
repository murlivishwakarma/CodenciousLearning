import React from 'react';

function ProjectCard({ title, description,link }) {
    return (
        <div className="bg-indigo-100 p-6 rounded-xl shadow-2xl mb-6 w-100">
            <h3 className="text-2xl font-semibold-serif mb-2">{title}</h3>
            <p className="text-gray-900">{description}</p>
            <a href={link} className="text-blue-500 hover:underline mt-2 block">
                Live Demo
            </a>
        </div>
    );
}

export default ProjectCard;