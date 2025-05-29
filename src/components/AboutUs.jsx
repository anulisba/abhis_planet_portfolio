// src/components/AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import img1 from '../assets/aboutus1.jpg';
import img2 from '../assets/aboutus2.jpg';

const AboutUs = () => {
    return (
        <section id="about-us" className="about-us-section">
            <div className="about-us-container">
                <motion.div
                    className="about-us-images"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: false, amount: 0.3 }}

                >
                    <img src={img1} alt="About 1" className="about-img main-img" />
                    <img src={img2} alt="About 2" className="about-img overlay-img" />
                </motion.div>

                <motion.div
                    className="about-us-text"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}

                >
                    <div className="about-us-heading">

                        <h2>
                            Designing More Than Spaces,<br />
                            We Craft Experiences
                        </h2><div className="about-us-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">ABOUT US</span>
                    </div>
                    <p className="about-us-description">
                        Dolen Son The dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc
                        Dolen Son The dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc
                        Dolen Son The dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc
                        Dolen Son The dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="about-us-button">Contact Us</button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
