import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <h2>Experience</h2>
            <div className="experience-container">
                <div className="experience-item">
                    <h3>Job Title 1</h3>
                    <p>Company Name | Dates</p>
                    <p>Description of your role and achievements.</p>
                </div>
                <div className="experience-item">
                    <h3>Job Title 2</h3>
                    <p>Company Name | Dates</p>
                    <p>Description of your role and achievements.</p>
                </div>
                {/* Add more experiences as needed */}
            </div>
        </section>
    );
}

export default Experience;
