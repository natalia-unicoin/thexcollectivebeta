'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { categoriesData } from '@/data/categoriesData';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './CategoryPage.styles';
import type { CategoryType } from '@/types';

interface CategoryPageProps {
    type: CategoryType;
}

const CategoryPage = ({ type }: CategoryPageProps) => {
    const { classes, cx } = useStyles();
    const { openJoinModal } = useModal();
    const data = categoriesData[type];
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    if (!data) {
        return <div className="min-h-screen flex items-center justify-center text-black bg-white">Category not found</div>;
    }

    const otherCategories = Object.values(categoriesData).filter(cat => cat.id !== type);

    // Scroll Animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    return (
        <div ref={containerRef} className={classes.pageContainer}>

            {/* 1. Immersive Hero Section */}
            <section className={classes.heroSection}>
                {/* Background (Video Placeholder / Image) */}
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className={classes.heroBackground}
                >
                    <img
                        src={getImagePath(data.image)}
                        alt={data.title}
                        className={classes.heroImage}
                    />
                    <div className={classes.heroOverlay} />
                </motion.div>

                {/* Hero Content */}
                <div className={classes.heroContent}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`${classes.badge} ${data.textColor}`}
                    >
                        {data.title}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className={classes.heroTitle}
                    >
                        {data.headline}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <button
                            onClick={openJoinModal}
                            className={`${classes.ctaButton} ${data.bgColor}`}
                        >
                            Join the Collective
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Spacer for sticky hero */}
            <div className={classes.spacer} />

            {/* 2. Scroll Reveal Text Section */}
            <section className={classes.scrollTextSection}>
                <div className={classes.scrollTextContainer}>
                    {data.scrollText.map((text, index) => (
                        <ScrollRevealText key={index} text={text} index={index} color={data.textColor} classes={classes} />
                    ))}
                </div>
            </section>

            {/* 3. Bento Grid Section */}
            <section className={classes.bentoSection}>
                <div className={classes.bentoContainer}>
                    <div className={classes.sectionHeader}>
                        <h2 className={classes.sectionTitle}>
                            Everything you need. <br />
                            <span className="text-gray-400">Nothing you don't.</span>
                        </h2>
                    </div>

                    <div className={classes.bentoGrid}>
                        {data.bentoGrid.map((item, index) => (
                            <BentoItem key={index} item={item} mainColor={data.color} classes={classes} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Carousel / Stories Section */}
            <section className={classes.storiesSection}>
                <div className={classes.storiesHeader}>
                    <h2 className={classes.storiesTitle}>
                        Success Stories
                    </h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div className={classes.carouselContainer}>
                    {data.carousel.map((story, index) => (
                        <div key={index} className={classes.carouselItem}>
                            <div className={`${classes.storyCard} group`}>
                                {story.image && !story.image.includes('placeholder') ? (
                                    <>
                                        <img
                                            src={getImagePath(story.image)}
                                            alt={story.title}
                                            className={classes.storyImage}
                                            onError={(e: any) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'none'; // Hide gradient
                                                e.target.parentElement.style.backgroundColor = data.color;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    </>
                                ) : (
                                    <div className="w-full h-full" style={{ backgroundColor: data.color }}></div>
                                )}

                                <div className="absolute bottom-0 left-0 p-8 text-black">
                                    <p className="text-2xl font-bold leading-tight mb-4 mix-blend-multiply">"{story.quote}"</p>
                                    <p className="text-sm font-bold uppercase tracking-widest text-black/60">{story.author}</p>
                                    <p className="text-xs text-black/40">{story.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Tiers / Comparison */}
            <section className={classes.tiersSection}>
                <div className={classes.tiersContainer}>
                    <div className={classes.sectionHeader}>
                        <h2 className={classes.sectionTitle}>
                            Choose your path.
                        </h2>
                        <p className="text-gray-500">Unlock more power as you grow.</p>
                    </div>

                    <div className={classes.tiersGrid}>
                        {data.tiers.map((tier, index) => (
                            <div key={index} className={classes.tierCard}>
                                <h3 className={classes.tierName}>{tier.name}</h3>
                                <p className={`${classes.tierPrice} ${data.textColor}`}>{tier.price}</p>
                                <ul className={classes.featureList}>
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className={classes.featureItem}>
                                            <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Footer CTA */}
            <section className={classes.footerSection}>
                <h2 className={classes.footerTitle}>
                    Ready to <span className={data.textColor}>Start?</span>
                </h2>
                <button
                    onClick={openJoinModal}
                    className={classes.applyButton}
                >
                    Apply Now
                </button>
            </section>

            {/* Other Categories Navigation */}
            <section className={classes.otherCategoriesSection}>
                <div className={classes.container}>
                    <h3 className={classes.otherCategoriesTitle}>
                        Explore other roles
                    </h3>
                    <div className={classes.otherCategoriesGrid}>
                        {otherCategories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/category/${cat.id}`}
                                className={`${classes.otherCategoryCard} group`}
                            >
                                <img
                                    src={getImagePath(cat.image)}
                                    alt={cat.title}
                                    className={classes.otherCategoryImage}
                                />
                                <div className={classes.otherCategoryContent}>
                                    <h4 className={classes.otherCategoryName}>{cat.title}</h4>
                                    <span className={classes.viewRole}>
                                        View Role
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Sub-components

const ScrollRevealText = ({ text, index, color, classes }: { text: string; index: number; color: string; classes: any }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={classes.scrollText}
        >
            <span className={color}>{text.split(" ")[0]}</span> {text.split(" ").slice(1).join(" ")}
        </motion.p>
    );
};

const BentoItem = ({ item, mainColor, classes }: { item: any; mainColor: string; classes: any }) => {
    // Size classes mapped to styles
    const getSizeClass = (size: string) => {
        switch (size) {
            case 'large': return classes.largeInfo;
            case 'tall': return classes.tallInfo;
            case 'wide': return classes.wideInfo;
            case 'small': return classes.smallInfo;
            default: return classes.smallInfo;
        }
    };

    const hasImage = item.image && !item.image.includes('placeholder');
    const bgColor = item.color || mainColor;
    const isDarkBg = item.theme === 'dark';
    const textColor = isDarkBg ? 'text-white' : 'text-black';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${classes.bentoItem} group ${getSizeClass(item.size)} ${textColor}`}
            style={{ backgroundColor: hasImage ? '#f3f4f6' : bgColor }}
        >
            {hasImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={getImagePath(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                        onError={(e: any) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.style.backgroundColor = mainColor || "#f3f4f6";
                        }}
                    />
                    <div className={`absolute inset-0 ${item.theme === 'light' ? 'bg-white/10' : 'bg-black/20'}`} />
                </div>
            )}

            {!hasImage && (
                <div className="absolute inset-0 z-0" style={{ backgroundColor: bgColor }} />
            )}

            <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2 mix-blend-multiply">{item.subtitle}</p>
                <h3 className="text-3xl font-display font-bold leading-none mix-blend-multiply">{item.title}</h3>
            </div>

            {item.description && (
                <div className="relative z-10 mt-4">
                    <p className="text-lg font-medium leading-tight opacity-90 mix-blend-multiply">{item.description}</p>
                </div>
            )}
        </motion.div>
    );
};

export default CategoryPage;
