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

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const projectRefs = useRef([]);

    const projects = [
        {
            id: 1,
            title: "Modern Living Room",
            description: "Minimalist design with warm accents",
            category: "residential",
            image: project1,
            size: "85 m²",
            year: "2024"
        },
        {
            id: 2,
            title: "Urban Loft",
            description: "Industrial meets contemporary elegance",
            category: "commercial",
            image: project2,
            size: "120 m²",
            year: "2023"
        },
        {
            id: 3,
            title: "Lakeside Retreat",
            description: "Nature-inspired luxury interior",
            category: "residential",
            image: project3,
            size: "200 m²",
            year: "2024"
        },
        {
            id: 4,
            title: "Executive Office",
            description: "Professional yet inviting workspace",
            category: "commercial",
            image: project4,
            size: "150 m²",
            year: "2023"
        },
        {
            id: 5,
            title: "Coastal Villa",
            description: "Beachfront luxury with organic textures",
            category: "residential",
            image: project5,
            size: "320 m²",
            year: "2024"
        },
        {
            id: 6,
            title: "Boutique Hotel",
            description: "Unique guest experience through design",
            category: "hospitality",
            image: project6,
            size: "850 m²",
            year: "2022"
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Check if projects are in view
            projectRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                    if (isInView) {
                        ref.classList.add('visible');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Reset visibility when filter changes
    useEffect(() => {
        projectRefs.current.forEach(ref => {
            if (ref) ref.classList.remove('visible');
        });

        // Trigger visibility check after a short delay
        setTimeout(() => {
            const handleScroll = () => {
                projectRefs.current.forEach((ref, index) => {
                    if (ref) {
                        const rect = ref.getBoundingClientRect();
                        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                        if (isInView) {
                            ref.classList.add('visible');
                        }
                    }
                });
            };
            handleScroll();
        }, 50);
    }, [activeFilter]);

    return (
        <Page>
            <div className="projects-page">
                {/* Hero section with parallax effect */}
                <div
                    className="projects-hero"
                    style={{
                        backgroundPosition: `center ${isScrolled ? -window.scrollY * 0.3 : 0}px`
                    }}
                >
                    <div className="hero-content">
                        <h1>Our Design Portfolio</h1>
                        <p>Explore our curated collection of interior design projects that blend elegance, functionality, and timeless aesthetics.</p>
                    </div>

                    {/* Animated scroll indicator */}
                    <div className="scroll-indicator">
                        <div className="scroll-line"></div>
                        <span>Scroll to explore</span>
                    </div>
                </div>

                {/* Filter bar with animated underline */}
                <div className="filter-bar">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Projects
                        <span className="underline"></span>
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('residential')}
                    >
                        Residential
                        <span className="underline"></span>
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('commercial')}
                    >
                        Commercial
                        <span className="underline"></span>
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'hospitality' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('hospitality')}
                    >
                        Hospitality
                        <span className="underline"></span>
                    </button>
                </div>

                {/* Projects grid with staggered animations */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            ref={el => projectRefs.current[index] = el}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            <div className="card-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="card-image"
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <span>View Project</span>
                                        <div className="line-animation"></div>
                                    </div>
                                </div>
                                <div className="shine-effect"></div>
                            </div>
                            <div className="card-content">
                                <div className="project-meta">
                                    <span>{project.size}</span>
                                    <span>•</span>
                                    <span>{project.year}</span>
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-category">{project.category}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA section */}
                <div className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to transform your space?</h2>
                        <p>Let's collaborate to create an interior that reflects your style and enhances your daily experience.</p>
                        <button className="cta-button">
                            <span>Schedule a Consultation</span>
                            <div className="button-hover-effect"></div>
                        </button>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default ProjectsPage;