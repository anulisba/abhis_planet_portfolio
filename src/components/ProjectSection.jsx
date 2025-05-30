// components/ProjectSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project1.png';
import './ProjectSection.css'
import { useNavigate } from 'react-router-dom';
const projects = [
    { image: project1, title: 'Living Room Design', category: 'Residential' },
    { image: project2, title: 'Kochin Villa', category: 'Luxury' },
    { image: project3, title: 'Modern Interior', category: 'Commercial' },
    { image: project4, title: 'Contemporary Space', category: 'Office' },
];

const ProjectSection = () => {
    const navigate = useNavigate();
    const handleAllProject = () => {
        navigate('/all-project');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' }); // no delay or jank
        }, 0);
    };

    const handleProjectDetail = () => {
        navigate('/project-detail')
    }
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
                        <h2>Spaces We've Transformed</h2>
                        <div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">OUR PROJECTS</span>
                    </div>
                </div>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="project-section-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="shine-effect"></div>
                        </div>

                        <div className="overlay">
                            <div className="overlay-content">
                                <div className="category-tag">{project.category}</div>
                                <h3 className="project-section-title">{project.title}</h3>
                                <div className="view-project">
                                    <span onClick={handleProjectDetail}>View Project</span>
                                    <FaArrowRight className="arrow-icon" />
                                </div>
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
                <button className="view-all-btn" onClick={handleAllProject}>
                    <span>View All Projects</span>
                    <div className="btn-hover-effect"></div>
                </button>
            </motion.div>
        </section>
    );
};

export default ProjectSection;