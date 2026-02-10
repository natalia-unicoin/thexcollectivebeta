'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './JoinFlow.styles';

const JoinFlow = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();
    return (
        <section className={classes.section}>
            {/* Background Image */}
            <div className={classes.bgWrapper}>
                <img
                    src={getImagePath("assets/join-bg-final-v5.jpg")}
                    alt="Join Background"
                    className={classes.bgImage}
                />
                {/* Gradient Overlay for Text Readability - Lighter */}
                <div className={classes.gradientOverlay} />
            </div>

            <div className={classes.container}>
                <div className={classes.contentWrapper}>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to Shape<br />
                        <span className={classes.highlight}>the Future?</span>
                    </motion.h2>

                    <motion.p
                        className={classes.description}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Join a curated community of visionaries. Access exclusive opportunities, governance rights, and a network that actually builds.
                    </motion.p>

                    <motion.div
                        className={classes.buttonGroup}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <button
                            onClick={openJoinModal}
                            className={classes.primaryButton}
                        >
                            Join the X Collective
                        </button>
                        <button className={classes.secondaryButton}>
                            View Membership Tiers
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JoinFlow;
