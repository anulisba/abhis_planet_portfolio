// components/ProjectSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import project1 from '../assets/bg.jpg';
import project2 from '../assets/bg1.jpg';
import project3 from '../assets/bg2.png';
import project4 from '../assets/project1.png';
import project5 from '../assets/project2.png';
import project6 from '../assets/project3.png';
import './ProjectSection.css'
import { useNavigate } from 'react-router-dom';
const projects = [
    {
        id: 1,
        title: "Modern Living Room",
        description: "Minimalist design with warm accents creating a cozy yet sophisticated atmosphere",
        category: "residential",
        image: project1,
    },
    {
        id: 2,
        title: "Urban Loft",
        description: "Industrial elements meet contemporary elegance in this metropolitan space",
        category: "commercial",
        image: project2,
    },
    {
        id: 3,
        title: "Lakeside Retreat",
        description: "Nature-inspired luxury with organic materials and panoramic views",
        category: "residential",
        image: project3,
    },
    {
        id: 4,
        title: "Executive Office",
        description: "Professional workspace designed for productivity and comfort",
        category: "commercial",
        image: project4,
    },
    {
        id: 5,
        title: "Coastal Villa",
        description: "Beachfront elegance with organic textures and serene color palette",
        category: "residential",
        image: project5,
    },
    {
        id: 6,
        title: "Boutique Hotel",
        description: "Unique guest experience through carefully curated design elements",
        category: "hospitality",
        image: project6,
    }
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
                <div className="our-services-header-padding">
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
                </div>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                    >
                        <div className="card-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="card-image"
                            />
                            <div className="minimal-info">
                                <h3>{project.title}</h3>
                                <div className="project-category">{project.category}</div>
                            </div>
                            <div className="full-overlay">
                                <div className="overlay-content">
                                    <h3>{project.title}</h3>
                                    <div className="project-category">{project.category}</div>
                                    <p>{project.description}</p>
                                    <button className="view-project-btn">
                                        View Project
                                        <span className="arrow">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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