import React, { useState, useEffect } from "react";

function ProjectList({ username }) {
const [projects, setProjects] = useState([]);

useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => setProjects(data));
}, [username]);

return (
    <ul>
        {projects.map(project => (
        <li key={project.id}>
            <a href={project.html_url}>{project.name}</a>
        </li>
    ))}
    </ul>
);
}

export default ProjectList;
