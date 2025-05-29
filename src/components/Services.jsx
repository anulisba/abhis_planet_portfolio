import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { FaPenNib } from 'react-icons/fa'; // Replace with your actual icon

const services = [
    { title: 'Luxury Interior Design', description: 'Timeless, sophisticated interiors tailored to your lifestyle, blending aesthetics with functionality.' },
    { title: 'Luxury Interior Design', description: 'Timeless, sophisticated interiors tailored to your lifestyle, blending aesthetics with functionality.' },
    { title: 'Luxury Interior Design', description: 'Timeless, sophisticated interiors tailored to your lifestyle, blending aesthetics with functionality.' },
    { title: 'Luxury Interior Design', description: 'Timeless, sophisticated interiors tailored to your lifestyle, blending aesthetics with functionality.' },
    { title: 'Luxury Interior Design', description: 'Timeless, sophisticated interiors tailored to your lifestyle, blending aesthetics with functionality.' },
    { title: 'Luxury Interior Design', description: 'Timeless, sophisticated interiors tailored to your lifestyle, blending aesthetics with functionality.' }
];

const OurServices = () => {
    return (
        <section className="our-services-section">
            <div className="our-services-header">
                <div className='our-service-title'>
                    <h2>Interior Solutions Tailored<br />To You</h2><div className="our-service-line-heading" />
                </div>
                <div className="about-us-line-container">
                    <div className="about-us-line" />
                    <span className="about-us-subtitle">OUR SERVICES</span>
                </div>
            </div>

            <div className="our-services-grid-wrapper">

                <div className="our-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeInOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="service-header">
                                <div className="service-icon">
                                    <FaPenNib />
                                </div>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.description}</p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
