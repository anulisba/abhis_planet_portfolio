// components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import './ContactUs.css'
import bg1 from '../assets/bg1.jpg';
import Header from './Header';
import Footer from './Footer';
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <>
            <Header />
            <section id="contact" className="contact-section">

                <div className="contact-container">
                    {/* Header */}
                    <motion.div
                        className="contact-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="our-services-header">
                            <div className='our-service-title'>
                                <h2>Let's Create Something<br />Exciting</h2>
                                <div className="our-service-line-heading" />
                            </div>
                            <div className="about-us-line-container">
                                <div className="about-us-line" />
                                <span className="about-us-subtitle">CONTACT US</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="contact-content">
                        {/* Contact Information with Background */}
                        <motion.div
                            className="contact-info"
                            style={{ backgroundImage: `url(${bg1})` }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="contact-info-overlay"></div>
                            <div className="contact-info-content">
                                <div className="info-card">
                                    <div className="info-icon">
                                        <FaMapMarkerAlt className="icon" />
                                    </div>
                                    <div className="info-text">
                                        <h3>Our Studio</h3>
                                        <p>123 Design Avenue, Creative District</p>
                                        <p>New York, NY 10001</p>
                                        <p>+1 (555) 123-4567</p>
                                        <p>hello@creative.studio</p>
                                    </div>
                                </div>



                                <div className="info-card">
                                    <div className="info-icon">
                                        <FaClock className="icon" />
                                    </div>
                                    <div className="info-text">
                                        <h3>Working Hours</h3>
                                        <p>Monday - Friday: 9am - 6pm</p>
                                        <p>Saturday: 10am - 4pm</p>
                                    </div>
                                </div>

                                <div className="map-placeholder">
                                    <div className="map-overlay"></div>
                                    <div className="map-marker">
                                        <FaMapMarkerAlt />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-container"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {isSubmitted ? (
                                <div className="success-message">
                                    <FaPaperPlane className="success-icon" />
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                            className="form-input"
                                        />
                                        <span className="input-highlight"></span>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                required
                                                className="form-input"
                                            />
                                            <span className="input-highlight"></span>
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                className="form-input"
                                            />
                                            <span className="input-highlight"></span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            required
                                            className="form-input"
                                        />
                                        <span className="input-highlight"></span>
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            rows="4"
                                            required
                                            className="form-textarea"
                                        ></textarea>
                                        <span className="input-highlight"></span>
                                    </div>

                                    <motion.button
                                        className="submit-btn"
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <span>Sending...</span>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <FaPaperPlane className="send-icon" />
                                            </>
                                        )}
                                        <div className="btn-hover-effect"></div>
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactSection;