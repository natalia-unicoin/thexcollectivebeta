'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './FourWays.styles';

const FourWays = () => {
    const { classes } = useStyles();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const ways = [
        {
            title: "Creator",
            description: "Create content, art, and experiences. Monetize your passion directly.",
            image: getImagePath("assets/creator-main.jpg?v=3"),
            color: "#EBE563", // Yellow
            imagePosition: "object-[center_70%]" // Focus on the girl sitting
        },
        {
            title: "Builder",
            description: "Develop tools, apps, and infrastructure for the ecosystem.",
            image: getImagePath("assets/builder-main.jpg"),
            color: "#2992A3" // Teal
        },
        {
            title: "Investor",
            description: "Support projects you believe in and share in their success.",
            image: getImagePath("assets/investor-main.jpg?v=7"),
            color: "#BEE3EE", // Light Blue
            imagePosition: "object-[75%_center]" // Focus on the girl
        },
        {
            title: "Connector",
            description: "Bring people together. Community managers and event organizers.",
            image: getImagePath("assets/connector-main.jpg"),
            color: "#E2622B" // Orange
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
        <section id="community" className={classes.section}>
            <div className={classes.container}>
                {/* Oddity Style Header */}
                <div className={classes.header}>
                    <div className={classes.titleWrapper}>
                        <h2 className={classes.title}>
                            Our <span className={classes.highlight} style={{ color: '#EBE563' }}>Community</span> <br />
                            Delivers Radical <br />
                            <span className={classes.highlight} style={{ color: '#E2622B' }}>Collaboration.</span>
                        </h2>
                    </div>
                    <div className={classes.descriptionWrapper}>
                        <p className={classes.description}>
                            We design entirely new ways to collaborate, powered by decentralized technology. We build platforms that learn from our users and deploy value directly to those who create it. Choose your path and start shaping the future.
                        </p>
                    </div>
                </div>

                {/* Responsive Layout: Horizontal Scroll on Mobile, Grid on Desktop */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className={classes.scrollContainer}
                >
                    {ways.map((card, index) => (
                        <div
                            key={index}
                            className={classes.cardWrapper}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`${classes.card} group`}
                            >
                                {/* Background Image */}
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className={`${classes.cardImage} group-hover:scale-110 ${card.imagePosition || 'object-center'}`}
                                />

                                {/* Overlay */}
                                <div className={`${classes.overlay} group-hover:bg-black/60`} />

                                {/* Content */}
                                <div className={classes.content}>
                                    <h3
                                        className={classes.cardTitle}
                                    >
                                        {card.title}
                                    </h3>

                                    <div className={`${classes.descriptionContainer} group-hover:h-auto`}>
                                        <p className={`${classes.cardDescription} group-hover:translate-y-0 group-hover:opacity-100`}>
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Arrow/Indicator - Top Right */}
                                    <div
                                        className={`${classes.arrowButton} group-hover:rotate-0 group-hover:bg-white`}
                                        style={{ color: card.color }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className={classes.mobileIndicators}>
                    {ways.map((_, index) => (
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

export default FourWays;
