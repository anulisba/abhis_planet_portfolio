// components/ContactLandingSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './ContactLanding.css'
const ContactLandingSection = () => {
    return (
        <section className="contact-landing-section">
            <div className="contact-landing-overlay"></div>

            <div className="contact-landing-container">
                <motion.div
                    className="contact-landing-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="contact-landing-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span>READY TO BEGIN YOUR JOURNEY?</span>
                    </motion.div>

                    <motion.h2
                        className="contact-landing-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Transform Your Space with Our Expertise
                    </motion.h2>

                    <motion.p
                        className="contact-landing-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Let's collaborate to create an environment that reflects your style and elevates your everyday experience.
                    </motion.p>

                    <motion.div
                        className="contact-landing-button"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <button className="contact-landing-btn">
                            <span>Schedule a Consultation</span>
                            <FaArrowRight className="contact-landing-icon" />
                            <div className="contact-landing-btn-hover"></div>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <div className="contact-landing-shapes">
                <div className="contact-landing-shape-1"></div>
                <div className="contact-landing-shape-2"></div>
                <div className="contact-landing-shape-3"></div>
            </div>
        </section>
    );
};

export default ContactLandingSection;