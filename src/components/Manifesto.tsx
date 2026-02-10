'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './Manifesto.styles';

const Manifesto = () => {
    const { classes } = useStyles();
    const { openManifesto } = useModal();
    return (
        <section id="manifesto" className={classes.section}>
            <div className={classes.container}>
                <div className={classes.contentWrapper}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={classes.title}
                    >
                        We Believe the Future Belongs to Those Who Build It <span className={classes.highlight}>Together.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={classes.description}
                    >
                        <span className={classes.boldBrand}>TheXCollective</span> is not just a community; it's a movement. We are redefining what it means to be wealthy by valuing creativity, connection, and impact over mere accumulation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className={classes.buttonWrapper}
                    >
                        <button
                            onClick={openManifesto}
                            className={classes.readButton}
                        >
                            Read Full Manifesto
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
