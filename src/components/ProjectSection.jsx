// components/ProjectSection.jsx
import React from 'react';
import './ProjectSection.css';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project1.png';

const projects = [
    { image: project1, title: 'Living Room Design' },
    { image: project2, title: 'Kochin Villa' },
    { image: project3, title: 'Modern Interior' },
    { image: project4, title: 'Contemporary Space' },
];

const ProjectSection = () => {
    return (
        <section className="project-section">
            <motion.div
                className="project-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="our-services-header">
                    <div className='our-service-title'>
                        <h2>Spaces We've Transformed</h2><div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">OUR PROJECTS</span>
                    </div>
                </div>

            </motion.div>

            <div className="parent">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className={`div${index + 1} project-card`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={project.image} alt={project.title} />
                        <div className="overlay">
                            <div className="overlay-content">
                                <p>{project.title}</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="project-button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                <button>View All Projects</button>
            </motion.div>
        </section>
    );
};

export default ProjectSection;