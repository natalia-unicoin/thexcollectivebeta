'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useStyles } from './StatsSection.styles';

const StatItem = ({ value, label, suffix = "", color }: any) => {
    const { classes } = useStyles();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepTime = duration / steps;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className={classes.statItem}>
            <div
                className={classes.statValue}
                style={{ color: color }}
            >
                {count.toLocaleString()}{suffix}
            </div>
            <div className={classes.statLabel}>
                {label}
            </div>
        </div>
    );
};

const StatsSection = () => {
    const { classes } = useStyles();
    const stats = [
        { label: "Active\nMembers", value: 500, suffix: "+", color: "#EBE563" }, // Creator Yellow
        { label: "Treasury\nValue", value: 10, suffix: "M", color: "#2992A3" }, // Investor Teal
        { label: "Projects\nLaunched", value: 50, suffix: "+", color: "#E2622B" }, // Builder Orange
        { label: "Global\nEvents", value: 12, suffix: "", color: "#BEE3EE" }, // Connector Light Blue
    ];

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    {/* Title */}
                    <div className={classes.textColumn}>
                        <h2 className={classes.title}>
                            Unstoppable <br />
                            <span className={classes.highlight}>Momentum.</span>
                        </h2>
                        <p className={classes.description}>
                            Our community is growing fast. Join the movement redefining wealth and ownership.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className={classes.grid}>
                        {stats.map((stat, index) => (
                            <StatItem key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
