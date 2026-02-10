'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './HowItWorks.styles';

const HowItWorks = () => {
    const { classes } = useStyles();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const steps = [
        {
            id: "01",
            title: "Apply",
            description: "Submit your profile. We curate a diverse group of creators and builders who share our vision.",
            image: getImagePath("assets/hiw-step1-yoga.jpg"),
            color: "#E2622B" // Orange
        },
        {
            id: "02",
            title: "Connect",
            description: "Access the private community, attend exclusive events, and meet your co-conspirators.",
            image: getImagePath("assets/hiw-community.jpg"),
            color: "#2992A3" // Teal
        },
        {
            id: "03",
            title: "Build & Earn",
            description: "Launch projects, contribute to the ecosystem, and earn tokens for your impact.",
            image: getImagePath("assets/hiw-new-3.jpg?v=3"),
            color: "#BEE3EE" // Light Blue
        },
        {
            id: "04",
            title: "Govern",
            description: "Participate in the DAO. Shape the future of the collective through strategic decisions and governance.",
            image: getImagePath("assets/hiw-new-2.jpg"),
            color: "#EBE563" // Yellow
        }
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

    return (
        <section id="how-it-works" className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={classes.title}
                >
                    How It <span className={classes.highlight}>Works.</span>
                </motion.h2>

                {/* Responsive Layout: Horizontal Scroll on Mobile, Grid on Desktop */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className={classes.scrollContainer}
                >
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={classes.cardWrapper}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => {
                                // For mobile tap to flip
                                setHoveredIndex(hoveredIndex === index ? null : index);
                            }}
                        >
                            <div className={`${classes.cardInner} group`}>
                                <motion.div
                                    className={classes.cardFlipper}
                                    style={{
                                        transform: hoveredIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
                                    }}
                                >
                                    {/* Front Side */}
                                    <div className={classes.cardFront}>
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className={`${classes.cardImage} group-hover:scale-110`}
                                        />
                                        <div className={`${classes.overlay} group-hover:bg-black/40`} />

                                        {/* Large Number Overlay */}
                                        <span
                                            className={classes.stepIdLarge}
                                        >
                                            {step.id}
                                        </span>

                                        <div className={classes.frontTitleWrapper}>
                                            <h3 className={classes.frontTitle}>
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div
                                        className={classes.cardBack}
                                        style={{ borderColor: step.color }}
                                    >
                                        <span
                                            className={classes.backStepId}
                                            style={{ color: step.color }}
                                        >
                                            {step.id}
                                        </span>

                                        <h3
                                            className={classes.backTitle}
                                            style={{ color: step.color }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className={classes.backDescription}>
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className={classes.mobileIndicators}>
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={classes.indicatorDot}
                            style={{
                                width: activeIndex === index ? '32px' : '8px',
                                backgroundColor: activeIndex === index ? 'black' : '#e0e0e0'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
