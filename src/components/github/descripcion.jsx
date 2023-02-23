import React, { useState, useEffect } from "react";

function ProjectDetail({ username, repoName }) {
const [project, setProject] = useState(null);

useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
    .then(response => response.json())
    .then(data => setProject(data));
}, [username, repoName]);

if (!project) {
    return <div>Loading...</div>;
}

return (
    <div>
        <h2 >{project.name}</h2>
            <p>{project.description}</p>
        <a  target="_blank" href={project.html_url} >See on Github</a>
    </div>
);
}

export default ProjectDetail;
