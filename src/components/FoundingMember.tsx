'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './FoundingMember.styles';

const FoundingMember = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    {/* Image Side */}
                    <div className={classes.imageColumn}>
                        <div className={classes.imageWrapper}>
                            <img
                                src={getImagePath("assets/founding-member-v4.jpg")}
                                alt="Founding Member"
                                className={classes.image}
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={classes.contentColumn}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className={classes.title}>
                                Become a Founding Member
                            </h2>
                            <p className={classes.description}>
                                Join the initial cohort of visionaries shaping the future of <span className={classes.bold}>TheXCollective</span>. Limited spots available for early contributors.
                            </p>

                            <div className={classes.tagList}>
                                {["Early Access", "Governance Rights", "Network"].map((tag, i) => (
                                    <span key={i} className={classes.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <motion.button
                                onClick={openJoinModal}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={classes.button}
                            >
                                Join the X Collective
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundingMember;
