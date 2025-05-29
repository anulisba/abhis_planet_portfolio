import React from 'react';
import './OurServices.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandshake, FaComments, FaDraftingCompass, FaHome } from 'react-icons/fa';

const services = [
    {
        icon: <FaHandshake />,
        title: 'Meet Customers',
        description: 'Osed quia consequuntur magni dolores eos qui rati one volu ptatem sequi nesciunt.',
    },
    {
        icon: <FaComments />,
        title: 'Design Discussion',
        description: 'Osed quia consequuntur magni dolores eos qui rati one volu ptatem sequi nesciunt.',
    },
    {
        icon: <FaDraftingCompass />,
        title: 'Drafting Design',
        description: 'Osed quia consequuntur magni dolores eos qui rati one volu ptatem sequi nesciunt.',
    },
    {
        icon: <FaHome />,
        title: 'Implementation',
        description: 'Osed quia consequuntur magni dolores eos qui rati one volu ptatem sequi nesciunt.',
    },
];

const OurWorkFlow = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls]);

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: index * 0.2,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <section className="workflow-section" ref={ref}>
            <motion.div
                className="our-workflow-header"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
            >
                {/* <h4>— OUR TIMELINE</h4>
                <h2>Our Process, Your Dream Realized</h2> */}


                <div className='our-workflow-title'>
                    <h2>Our Process, Your Dream <br />Realized</h2><div className="our-service-line-heading" />
                </div>
                <div className="our-workflow-line-container">
                    <div className="our-workflow-line" />
                    <span className="our-workflow-subtitle">OUR SERVICES</span>
                </div>

            </motion.div>

            <div className="workflow-cards">
                {services.map((service, index) => (
                    <motion.div
                        className="workflow-card"
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate={controls}
                        variants={cardVariants}
                    >
                        <div className="workflow-icon-circle">
                            {service.icon}
                            <span className="workflow-step-number">{index + 1}</span>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurWorkFlow;
