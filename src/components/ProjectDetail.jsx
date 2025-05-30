import React, { useState, useEffect } from 'react';
import './ProjectDetail.css';

// Importing local images
import p1main from '../assets/bg.jpg';
import p11 from '../assets/bg1.jpg';
import p12 from '../assets/bg2.png';
import p13 from '../assets/project1.png';
import p14 from '../assets/project2.png';
import p15 from '../assets/project3.png';
import p16 from '../assets/project1.png';
import p17 from '../assets/project1.png';
import p18 from '../assets/project2.png';
import p19 from '../assets/project1.png';
import p110 from '../assets/project2.png';
import Page from './ScrollToTop';

const ProjectDetailPage = () => {
    const [activeImage, setActiveImage] = useState(p1main);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [overlayImage, setOverlayImage] = useState(null);

    const viewImages = [p11, p12, p13, p14, p15, p16, p17, p18, p19, p110];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openOverlay = (img) => {
        setOverlayImage(img);
        setIsOverlayVisible(true);
        document.body.style.overflow = 'hidden';
    };

    const closeOverlay = () => {
        setIsOverlayVisible(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <Page>
            <div className="project-detail">
                {/* Back button with scroll effect */}
                <button className={`back-button ${isScrolled ? 'scrolled' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Projects
                </button>

                {/* Main hero section */}
                <div className="hero-container">
                    <div className="hero-image-container">
                        <img
                            src={activeImage}
                            alt="Main Project"
                            className="hero-image"
                            onLoad={(e) => e.target.classList.add('loaded')}
                        />
                        <div className="hero-overlay" />
                        <div className="hero-content">
                            <div className="project-meta">
                                <span>Residential Design</span>
                                <span>•</span>
                                <span>120 m²</span>
                                <span>•</span>
                                <span>2024</span>
                            </div>
                            <h1 className="project-title">Modern Living Room Makeover</h1>
                        </div>
                    </div>

                    <div className="project-description">
                        <p>
                            This modern living room design blends minimalism with functionality. Neutral tones and elegant accents create
                            a warm and inviting space. Carefully selected furniture and decor elements enhance both style and comfort.
                        </p>
                        <div className="project-details">
                            <div className="detail-item">
                                <h3>Client</h3>
                                <p>Thompson Residence</p>
                            </div>
                            <div className="detail-item">
                                <h3>Location</h3>
                                <p>New York, NY</p>
                            </div>
                            <div className="detail-item">
                                <h3>Duration</h3>
                                <p>3 months</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery section */}
                <div className="gallery-section">
                    <div className="section-header">
                        <h2>Project Gallery</h2>
                        <p>Explore the transformation through detailed visuals</p>
                    </div>

                    <div className="gallery-grid">
                        {viewImages.map((img, index) => (
                            <div
                                key={index}
                                className="gallery-item"
                                onClick={() => openOverlay(img)}
                            >
                                <img
                                    src={img}
                                    alt={`View ${index + 1}`}
                                    className="gallery-image"
                                    onLoad={(e) => e.target.classList.add('loaded')}
                                />
                                <div className="image-overlay">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="white" strokeWidth="2" />
                                        <path d="M21 12C19.1114 14.991 15.7183 17 12 17C8.2817 17 4.88856 14.991 3 12C4.88856 9.009 8.2817 7 12 7C15.7183 7 19.1114 9.009 21 12Z" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Design philosophy section */}
                <div className="philosophy-section">
                    <div className="section-header">
                        <h2>Design Philosophy</h2>
                        <p>The thinking behind our approach</p>
                    </div>

                    <div className="philosophy-grid">
                        <div className="philosophy-card">
                            <div className="card-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 21H21M4 18H20M6 18V13M10 18V10M14 18V15M18 18V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M3 7L12 3L21 7V10H3V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Spatial Harmony</h3>
                            <p>Creating balanced proportions and flow between different areas to enhance functionality and aesthetics.</p>
                        </div>

                        <div className="philosophy-card">
                            <div className="card-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3V5M18 21V19M21 12H19M5 12H3M16.9497 7.05025L15.5355 8.46447M8.46447 15.5355L7.05025 16.9497M16.9497 16.9497L15.5355 15.5355M8.46447 8.46447L7.05025 7.05025M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Light & Texture</h3>
                            <p>Strategic use of natural light and layered textures to create depth and atmosphere throughout the space.</p>
                        </div>

                        <div className="philosophy-card">
                            <div className="card-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 7H20M4 12H20M4 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Minimalist Elegance</h3>
                            <p>Focus on essential elements, clean lines, and uncluttered spaces to achieve timeless sophistication.</p>
                        </div>
                    </div>
                </div>

                {/* Image overlay for lightbox */}
                {isOverlayVisible && (
                    <div className="image-overlay-modal" onClick={closeOverlay}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="close-modal" onClick={closeOverlay}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <img src={overlayImage} alt="Full size" className="overlay-image" />
                        </div>
                    </div>
                )}
            </div>
        </Page>
    );
};

export default ProjectDetailPage;