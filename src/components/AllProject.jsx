import React, { useState, useEffect, useRef } from 'react';
import './AllProject.css';

// Importing local images
import project1 from '../assets/bg.jpg';
import project2 from '../assets/bg1.jpg';
import project3 from '../assets/bg2.png';
import project4 from '../assets/project1.png';
import project5 from '../assets/project2.png';
import project6 from '../assets/project3.png';
import Page from './ScrollToTop';
import Footer from './Footer';
import Header from './Header';

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isScrolled, setIsScrolled] = useState(false);
    const projectRefs = useRef([]);

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

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Page>
            <div className="projects-page">
                <Header />
                {/* Hero section */}
                <div
                    className="projects-hero"
                    style={{
                        backgroundPosition: `center ${isScrolled ? -window.scrollY * 0.3 : 0}px`
                    }}
                >
                    <div className="all-project-hero-content">
                        <h1>Our Design Portfolio</h1>
                        <p>Explore our curated collection of interior design projects</p>
                    </div>
                </div>

                {/* Filter bar */}
                <div className="filter-bar">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('residential')}
                    >
                        Residential
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('commercial')}
                    >
                        Commercial
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'hospitality' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('hospitality')}
                    >
                        Hospitality
                    </button>
                </div>

                {/* Projects grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
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

                {/* CTA section */}
                {/* <div className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to transform your space?</h2>
                        <button className="cta-button">
                            Schedule a Consultation
                        </button>
                    </div>
                </div> */}
            </div>
            <Footer />
        </Page>
    );
};

export default ProjectsPage;