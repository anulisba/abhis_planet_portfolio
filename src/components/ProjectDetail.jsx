import React, { useState, useEffect, useRef } from 'react';
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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [overlayImage, setOverlayImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRefs = useRef([]);

    const viewImages = [p11, p12, p13, p14, p15, p16, p17, p18, p19, p110];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Check if sections are in view
            sectionRefs.current.forEach((ref, index) => {
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

                {/* Main hero section with fade-in */}
                <div
                    className="hero-container"
                    ref={el => sectionRefs.current[0] = el}
                >
                    <div className="hero-image-container">
                        <img
                            src={p1main}
                            alt="Main Project"
                            className="hero-image"
                        />
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

                    <div
                        className="project-description"
                        ref={el => sectionRefs.current[1] = el}
                    >
                        <p>
                            This modern living room design blends minimalism with functionality.
                            Neutral tones and elegant accents create a warm and inviting space.
                            Carefully selected furniture and decor elements enhance both style and comfort.
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

                {/* Gallery section with enhanced hover */}
                <div
                    className="gallery-section"
                    ref={el => sectionRefs.current[1] = el}
                >
                    <div className="section-header">
                        <h2>Project Gallery</h2>
                        <p>Explore the transformation through detailed visuals</p>
                    </div>

                    <div className="gallery-grid">
                        {viewImages.map((img, index) => (
                            <div
                                key={index}
                                className={`gallery-item ${index === 0 ? 'featured' : ''}`}
                                onClick={() => openOverlay(img)}
                            >
                                <img
                                    src={img}
                                    alt={`View ${index + 1}`}
                                    className="gallery-image"
                                />
                                <div className="image-overlay">
                                    <div className="zoom-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M21 12C19.1114 14.991 15.7183 17 12 17C8.2817 17 4.88856 14.991 3 12C4.88856 9.009 8.2817 7 12 7C15.7183 7 19.1114 9.009 21 12Z" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="image-title">View </div>
                                </div>
                                <div className="shine-effect"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Design philosophy section with animated points */}
                <div
                    className="philosophy-section"
                    ref={el => sectionRefs.current[2] = el}
                >
                    <div className="philosophy-content">
                        <div className="text-content">
                            <h2>Design Philosophy</h2>
                            <p>
                                Our approach centers on creating spaces that harmonize form and function.
                                We believe in the power of simplicity, where every element serves a purpose
                                and contributes to the overall aesthetic.
                            </p>
                            <div className="philosophy-points">
                                <div className="point">
                                    <div className="point-number">01</div>
                                    <div>
                                        <h3>Spatial Harmony</h3>
                                        <p>Creating balanced proportions and flow between different areas</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <div className="point-number">02</div>
                                    <div>
                                        <h3>Light & Texture</h3>
                                        <p>Strategic use of natural light and layered textures</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <div className="point-number">03</div>
                                    <div>
                                        <h3>Minimalist Elegance</h3>
                                        <p>Focus on essential elements and clean lines</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="philosophy-image">
                            <img src={p12} alt="Design philosophy" />
                            <div className="image-overlay-tint"></div>
                        </div>
                    </div>
                </div>

                {/* Image overlay for lightbox with fade */}
                {isOverlayVisible && (
                    <div
                        className="image-overlay-modal"
                        onClick={closeOverlay}
                        style={{ animation: 'fadeIn 0.4s forwards' }}
                    >
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button
                                className="close-modal"
                                onClick={closeOverlay}

                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <img
                                src={overlayImage}
                                alt="Full size"
                                className="overlay-image"
                                style={{ animation: 'scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </Page>
    );
};

export default ProjectDetailPage;