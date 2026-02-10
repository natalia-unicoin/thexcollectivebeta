'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './Hero.styles';

const Hero = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();
    return (
        <section className={classes.section}>
            {/* Background Image - No Overlay */}
            <div className={classes.bgWrapper}>
                <img
                    src={getImagePath("assets/hero-bg-v4.png")}
                    alt="Hero Background"
                    className={classes.bgImage}
                />
                {/* Gradient Overlay for Text Readability */}
                <div className={classes.overlay} />
            </div>

            {/* Content */}
            <div className={classes.content}>
                <motion.h1
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    A Decentralized <span className={classes.highlight}>Community</span> <br />
                    for Creators, Builders, and Visionaries.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={classes.ctaContainer}
                >
                    <button
                        onClick={openJoinModal}
                        className={classes.ctaButton}
                    >
                        Join the X Collective
                    </button>
                </motion.div>
            </div>

            {/* Beta Watermark */}
            <div className={classes.watermark}>
                <div className={classes.watermarkBadge}>
                    <span className={classes.watermarkText}>
                        Beta v1.0
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
