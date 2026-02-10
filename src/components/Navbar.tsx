'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from "next/link";
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './Navbar.styles';

const Navbar = () => {
    const { classes, cx } = useStyles();
    const { openJoinModal } = useModal();
    const { scrollY } = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setExpandedItem(null); // Reset expansion on close
    };

    const toggleAccordion = (title: string) => {
        if (expandedItem === title) {
            setExpandedItem(null);
        } else {
            setExpandedItem(title);
        }
    };

    const menuLinks = [
        { title: "Home", href: "/" },
        {
            title: "About",
            href: "#",
            subItems: [
                { title: "Manifesto", href: "/#manifesto" },
                { title: "Blog", href: "/blog" },
                { title: "News", href: "#" },
            ]
        },
        {
            title: "Community",
            href: "#",
            subItems: [
                { title: "Creator", href: "/category/creator" },
                { title: "Builder", href: "/category/builder" },
                { title: "Investor", href: "/category/investor" },
                { title: "Connector", href: "/category/connector" },
            ]
        },
        { title: "How it Works", href: "/#how-it-works" },
        { title: "TOKENS", href: "/#token" },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={classes.nav}
            >
                <div className={classes.container}>
                    {/* Logo */}
                    <Link href="/" className={classes.logoLink}>
                        <img src={getImagePath("assets/logo-v4.png")} alt="TheXCollective" className={classes.logoImage} />
                    </Link>

                    <div className={classes.controls}>
                        {/* Join Now Button */}
                        <button
                            onClick={openJoinModal}
                            className={classes.joinButton}
                        >
                            Join Now
                        </button>

                        {/* Dummy Language Selector */}
                        <div className={classes.langSelector}>
                            <span className={classes.langActive}>EN</span>
                            <span className="text-gray-300">|</span>
                            <span className={classes.langInactive}>ES</span>
                        </div>

                        {/* Menu Button */}
                        <div className={classes.menuButtonWrapper}>
                            <button
                                onClick={toggleMenu}
                                className={classes.menuButton}
                            >
                                <span className={classes.menuLabel}>Menu</span>
                                <svg className={classes.menuIconMobile} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile/Desktop Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className={classes.backdrop}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.4, ease: "circOut" }}
                            className={classes.drawer}
                        >
                            {/* Close Button */}
                            <div className={classes.closeButtonWrapper}>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className={classes.closeButton}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#1f1f1f">
                                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Menu Logo */}
                            <div className={classes.menuLogo}>
                                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                    <img src={getImagePath('assets/logo-v4.png')} alt="TheXCollective" className="w-full" style={{ maxWidth: '160px' }} />
                                </Link>
                            </div>

                            {/* Links */}
                            <div className={classes.linksContainer}>
                                {menuLinks.map((link, index) => (
                                    <div key={link.title} className="w-full">
                                        {link.subItems ? (
                                            // Accordion Item
                                            <div className="flex flex-col items-start w-full">
                                                <motion.button
                                                    onClick={() => toggleAccordion(link.title)}
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                                    className={classes.mainLinkButton}
                                                >
                                                    <span className={classes.mainLinkTextWrapper}>
                                                        {link.title}
                                                        <span className={`${classes.linkUnderline} underline`}></span>
                                                    </span>
                                                    <span className={`transition-transform duration-300 ${expandedItem === link.title ? 'rotate-180' : ''}`}>
                                                        ▼
                                                    </span>
                                                </motion.button>

                                                {/* Sub Items */}
                                                <AnimatePresence>
                                                    {expandedItem === link.title && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className={classes.subItemsContainer}
                                                        >
                                                            {link.subItems.map((subItem) => (
                                                                <span
                                                                    key={subItem.title}
                                                                    className={classes.subItem}
                                                                >
                                                                    {subItem.title}
                                                                </span>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            // Regular Link
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block w-fit"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                                    className={classes.mainLinkButton}
                                                >
                                                    <span className={classes.mainLinkTextWrapper}>
                                                        {link.title}
                                                        <span className={`${classes.linkUnderline} underline`}></span>
                                                    </span>
                                                </motion.div>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Footer Links & Socials */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className={classes.menuFooter}
                            >
                                <div className={classes.footerContent}>
                                    <div className="flex gap-8">
                                        <a href="#" className={classes.contactLink}>Contact</a>
                                    </div>

                                    {/* Social Icons */}
                                    <div className={classes.socialIcons}>
                                        <a href="#" className={classes.socialIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                        <a href="#" className={classes.socialIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="#" className={classes.socialIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17.82-1.42 1.5-.26.6-.07 1.32.34 1.83.98 1.24 2.86 1.32 3.93.16 1.08-1.13.97-2.91.95-4.53.01-4.03-.01-8.05.02-12.07z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )
                }
            </AnimatePresence>
        </>
    );
};

export default Navbar;
