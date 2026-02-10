'use client';

import React from 'react';
import { getImagePath } from '@/utils/image';
import { useStyles } from './Footer.styles';

const Footer = () => {
    const { classes } = useStyles();
    const platformItems = ["Manifesto", "How it Works", "Governance"];
    const communityItems = ["Events", "Members", "Apply"];
    const legalItems = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.mainGrid}>
                    {/* Brand Column */}
                    <div className={classes.brandColumn}>
                        <div className={classes.logoWrapper}>
                            <img src={getImagePath("assets/logo-v4.png")} alt="TheXCollective" className={classes.logo} />
                        </div>
                        <p className={classes.description}>
                            Redefining wealth through community, creativity, and shared ownership.
                        </p>

                        {/* Social Media Icons */}
                        <div className={classes.socialWrapper}>
                            <a href="#" className={`${classes.socialIcon} group`}>
                                {/* Instagram Filled */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={`${classes.socialSvg} group-hover:scale-110`}>
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className={`${classes.socialIcon} group`}>
                                {/* LinkedIn Filled */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={`${classes.socialSvg} group-hover:scale-110`}>
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className={`${classes.socialIcon} group`}>
                                {/* TikTok Filled */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={`${classes.socialSvg} group-hover:scale-110`}>
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17.82-1.42 1.5-.26.6-.07 1.32.34 1.83.98 1.24 2.86 1.32 3.93.16 1.08-1.13.97-2.91.95-4.53.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className={classes.linksColumnFirst}>
                        <h4 className={classes.columnTitle}>Platform</h4>
                        <ul className={classes.linkList}>
                            {platformItems.map((item, i) => (
                                <li key={i}><a href="#" className={classes.linkItem}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className={classes.linksColumn}>
                        <h4 className={classes.columnTitle}>Community</h4>
                        <ul className={classes.linkList}>
                            {communityItems.map((item, i) => (
                                <li key={i}><a href="#" className={classes.linkItem}>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className={classes.linksColumn}>
                        <h4 className={classes.columnTitle}>Legal</h4>
                        <ul className={classes.linkList}>
                            {legalItems.map((item, i) => (
                                <li key={i}><a href="#" className={classes.linkItem}>{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Brand Strip / Bottom Bar */}
                <div className={classes.bottomBar}>
                    <div className={classes.tagline}>
                        <span>A Movement Built Independently</span>
                        <span className={classes.separator}>|</span>
                        <span>Powered by UnicoinX.</span>
                        <span className={classes.separator}>|</span>
                        <span>Designed for People Redefining Wealth.</span>
                    </div>

                    <div className={classes.copyright}>
                        &copy; 2025 <span className={classes.copyrightBrand}>TheXCollective</span>. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
