import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import img1 from '../assets/aboutus1.jpg';
import img2 from '../assets/aboutus2.jpg';
import img3 from '../assets/aboutus1.jpg'; // Add a third image for the gallery

const AboutUs = () => {
    return (
        <section id="about-us" className="about-us-section">
            <div className="golden-line"></div>

            <motion.div
                className="about-us-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="text-content">
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <motion.span
                            className="about-us-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            ABOUT US
                        </motion.span>
                    </div>

                    <div className="about-us-heading">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Designing More Than Spaces,<br />
                            <span className="gold-accent">We Craft Experiences</span>
                        </motion.h2>
                        <div className="about-us-line-heading" />
                    </div>

                    <div className="description-container">
                        <motion.p
                            className="about-us-description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            At our core, we believe that exceptional interior design transcends aesthetics to create meaningful experiences.
                            Our approach combines timeless elegance with innovative solutions to transform spaces into personalized sanctuaries
                            that reflect your unique identity and enhance your daily life.
                        </motion.p>

                        <motion.p
                            className="about-us-description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Founded by visionary designers with over 15 years of industry experience, our studio specializes in creating
                            harmonious environments that balance form and function. We meticulously attend to every detail, from spatial
                            planning to material selection, ensuring each project embodies sophistication and comfort.
                        </motion.p>
                    </div>

                    <motion.div
                        className="button-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="about-us-button"
                            whileHover={{
                                backgroundColor: "#1a1a1a",
                                color: "#ffffff"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Us
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>

                <div className="image-content">
                    <motion.div
                        className="image-grid"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="main-image"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img src={img1} alt="Luxury interior design" />
                        </motion.div>
                        <div className="secondary-images">
                            <motion.div
                                className="image-2"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={img2} alt="Design detail" />
                            </motion.div>
                            <motion.div
                                className="image-3"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src={img3} alt="Material texture" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="stats-container"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">15+</div>
                            <div className="stat-label">Years Experience</div>
                        </motion.div>
                        <div className="stat-divider"></div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">250+</div>
                            <div className="stat-label">Projects Completed</div>
                        </motion.div>
                        <div className="stat-divider"></div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">50+</div>
                            <div className="stat-label">Awards Received</div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="signature-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <div className="signature-line"></div>
                <div className="signature">Founder & Creative Director</div>
            </motion.div>
        </section>
    );
};

export default AboutUs;