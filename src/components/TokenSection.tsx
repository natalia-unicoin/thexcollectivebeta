'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './TokenSection.styles';

const TokenSection = () => {
    const { classes } = useStyles();
    const governanceItems = [
        "DAO Voting Rights",
        "Strategic Decisions",
        "Treasury Management",
        "Protocol Upgrades",
        "Long-term Value"
    ];

    const utilityItems = [
        "Exclusive Access",
        "Event Tickets",
        "Merch & Drops",
        "Community Rewards",
        "Member Experiences"
    ];

    return (
        <section id="token" className={classes.section}>
            <div className={classes.container}>
                {/* Header */}
                <div className={classes.header}>
                    <h2 className={classes.title}>
                        Dual Token Economy
                    </h2>
                    <p className={classes.description}>
                        A balanced ecosystem designed for both stability and active participation. Governance for the future, Utility for the now.
                    </p>
                </div>

                {/* Split Layout */}
                <div className={classes.grid}>
                    {/* Governance Card */}
                    <div className={`${classes.card} group`}>
                        <div
                            className={`${classes.blurCircle} group-hover:bg-[#2992A3]/10`}
                            style={{ backgroundColor: 'rgba(41, 146, 163, 0.05)' }}
                        />

                        <div className={classes.cardHeader}>
                            <span
                                className={classes.badge}
                                style={{ backgroundColor: 'rgba(41, 146, 163, 0.1)', color: '#2992A3' }}
                            >
                                Governance
                            </span>
                            <h3 className={classes.cardTitle}>
                                ú
                            </h3>
                            <p className={classes.cardSubtitle}>The Voice of the DAO</p>
                        </div>

                        <ul className={classes.list}>
                            {governanceItems.map((item, i) => (
                                <li key={i} className={classes.listItem}>
                                    <div className={classes.dot} style={{ backgroundColor: '#2992A3' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://unicoin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.button}
                            style={{ backgroundColor: '#2992A3' }}
                        >
                            Buy on Unicoin.com
                        </a>
                    </div>

                    {/* Utility Card */}
                    <div className={`${classes.card} group`}>
                        <div
                            className={`${classes.blurCircle} group-hover:bg-[#E2622B]/10`}
                            style={{ backgroundColor: 'rgba(226, 98, 43, 0.05)' }}
                        />

                        <div className={classes.cardHeader}>
                            <span
                                className={classes.badge}
                                style={{ backgroundColor: 'rgba(226, 98, 43, 0.1)', color: '#E2622B' }}
                            >
                                Utility
                            </span>
                            <h3 className={classes.cardTitle}>
                                u<span style={{ fontSize: '0.6em', verticalAlign: 'top', position: 'relative', top: '-0.1em' }}>x</span>
                            </h3>
                            <p className={classes.cardSubtitle}>Fuel for Experiences</p>
                        </div>

                        <ul className={classes.list}>
                            {utilityItems.map((item, i) => (
                                <li key={i} className={classes.listItem}>
                                    <div className={classes.dot} style={{ backgroundColor: '#E2622B' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://unicoinx.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.button}
                            style={{ backgroundColor: '#E2622B' }}
                        >
                            Buy on UnicoinX.io
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenSection;
