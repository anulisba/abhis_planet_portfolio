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
import ContactLandingSection from './ContactLanding';
import logo from '../assets/logo.png'
const SplashScreen = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const companyName = "Abhi's Planet";
    const letters = companyName.split('');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (step < letters.length) {
                setStep(step + 1);
            } else if (step === letters.length) {
                // After all letters appear, show logo
                setStep(letters.length + 1);
            } else {
                // After logo animation, transition to landing page
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, step < letters.length ? 150 : 500);

        return () => clearTimeout(timer);
    }, [step, letters.length, onComplete]);

    return (
        <div className="splash-container">
            <div className="splash-content">
                <AnimatePresence>
                    {step > letters.length && (
                        <motion.div
                            className="logo-container"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.175, 0.885, 0.32, 1.275]
                                }
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                transition: { duration: 0.4 }
                            }}
                        >
                            <div className="logo-symbol"><img src={logo} /></div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* Text animation with left-to-right reveal */}
                <div className="name-container">
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            className="name-letter"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: step > index ? 1 : 0,
                                x: step > index ? 0 : -20
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Logo animation after text */}

            </div>
        </div>
    );
};

const LandingPage = () => {
    const [showSplash, setShowSplash] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [bg1, bg2, bg3];

    useEffect(() => {
        const hasSeenSplash = localStorage.getItem('hasSeenSplash');
        if (!hasSeenSplash) {
            setShowSplash(true);
        } else {
            setShowSplash(false);
            setShowContent(true);
        }
    }, []);
    useEffect(() => {
        if (!showSplash) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [showSplash]);

    const handleSplashComplete = () => {
        setShowSplash(false);
        localStorage.setItem('hasSeenSplash', 'true');
        setTimeout(() => setShowContent(true));
    };

    return (
        <div className="app-container">
            <AnimatePresence mode="wait">
                {showSplash ? (
                    <SplashScreen onComplete={handleSplashComplete} />
                ) : (
                    <motion.div
                        className="landing-page-container"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100vh" }}
                        transition={{ duration: 3, ease: [0.10, 1, 0.36, 1] }}
                    >
                        {showContent && (
                            <>
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
                                <section id='projects'>
                                    <ProjectSection />
                                </section>
                                <section id='workflow'>
                                    <OurWorkFlow />
                                </section>
                                <section id='reviews'>
                                    <CustomerReviews />
                                </section>
                                <section id='contact'>
                                    <ContactLandingSection />
                                </section>
                                <section id='footer'>
                                    <Footer />
                                </section>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;