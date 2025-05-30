// src/components/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingPage.css';
import Header from './Header';
import bg1 from '../assets/bg.jpg'
import bg2 from '../assets/bg1.jpg'
import bg3 from '../assets/bg2.png'
import AboutUs from './AboutUs';
import OurServices from './Services';
import ReportCounter from './ReportCounter';
import ProjectSection from './ProjectSection';
import OurWorkFlow from './OurServices';
import CustomerReviews from './CustomerReviews';
import Footer from './Footer';
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import ProjectDetailPage from './ProjectDetail';
import ProjectsPage from './AllProject';
import ContactSection from './ContactUs';
import ContactLandingSection from './ContactLanding';


const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [bg1, bg2, bg3];
    // Change image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-page-container">


            <section id="home">
                <div className="landing-page">
                    <Header />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="landing-background-image"
                            style={{ backgroundImage: `url(${images[currentIndex]})` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>

                    <div className="landing-loverlay" />

                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="landing-hero"
                    >
                        <div className="landing-hero-content">
                            <h1>Elevating Spaces with Timeless <br />Interior Elegance</h1>
                            <p>
                                Abhi’s Planet transforms everyday spaces into extraordinary experiences.
                                From modern minimalism to luxurious comfort,<br /> we design interiors that reflect your personality, purpose, and lifestyle.
                            </p>
                            <button className="landing-contact-btn">Contact Us</button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="landing-social"
                    >
                        <div className="landing-social-icons">
                            <FaInstagram className="landing-icon" />
                            <FaWhatsapp className="landing-icon" />
                            <FaFacebookF className="landing-icon" />
                        </div>
                    </motion.div>
                </div>
            </section>
            <section id='about-us'>
                <AboutUs />
            </section>
            <OurServices />

            <ReportCounter />

            <section id='about-us'>
                <ProjectSection />
            </section>

            <section id='about-us'>
                <OurWorkFlow />
            </section>

            <section id='us'>
                <CustomerReviews />
            </section>
            <section id='us'>
                <ContactLandingSection />
            </section>
            <section id='us'>
                <Footer />
            </section>
        </div>
    );
};

export default LandingPage;
