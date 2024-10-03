import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <h2>Projects</h2>
            <div className="project-cards">
                <div className="project-card">
                    <h3>Project 1</h3>
                    <p>Description of your project here.</p>
                    <a href="#" className="btn">View Project</a>
                </div>
                <div className="project-card">
                    <h3>Project 2</h3>
                    <p>Description of your project here.</p>
                    <a href="#" className="btn">View Project</a>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
}

export default Projects;
