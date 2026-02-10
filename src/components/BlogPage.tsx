'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { blogData } from '@/data/blogData';
import { getImagePath } from '@/utils/image';
import { useStyles } from './BlogPage.styles';

const BlogPage = () => {
    const { classes } = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featuredPosts = blogData.filter(post => post.isFeatured);
    const featuredPost = featuredPosts[0];
    const recentPosts = blogData.filter(post => !post.isFeatured);

    return (
        <div className={classes.pageContainer}>
            <div className={classes.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={classes.header}
                >
                    <h1 className={classes.title}>
                        Insights & <br />
                        <span className={classes.titleHighlight}>Stories.</span>
                    </h1>
                    <p className={classes.subtitle}>
                        Deep dives into the future of work, ownership, and community.
                    </p>
                </motion.div>

                {/* Featured Post */}
                {featuredPost && (
                    <div className={classes.featuredPost}>
                        <Link href={`/blog/${featuredPost.id}`} className={`${classes.featuredLink} group`}>
                            <img
                                src={getImagePath(featuredPost.image)}
                                alt={featuredPost.title}
                                className={classes.featuredImage}
                            />
                            <div className={classes.overlay} />
                            <div className={classes.featuredContent}>
                                <span className={classes.categoryBadge}>
                                    {featuredPost.category}
                                </span>
                                <h2 className={classes.featuredTitle}>
                                    {featuredPost.title}
                                </h2>
                                <p className={classes.featuredExcerpt}>
                                    {featuredPost.excerpt}
                                </p>
                                <div className={classes.meta}>
                                    <span>{featuredPost.date}</span>
                                    <span>•</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Recent Posts Grid */}
                <div className={classes.grid}>
                    {recentPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`${classes.postCard} group`}
                        >
                            <Link href={`/blog/${post.id}`}>
                                <div className={classes.postImageWrapper}>
                                    <img
                                        src={getImagePath(post.image)}
                                        alt={post.title}
                                        className={classes.postImage}
                                    />
                                </div>
                                <div className={classes.postContent}>
                                    <div className={classes.postHeader}>
                                        <span className={classes.postCategory}>
                                            {post.category}
                                        </span>
                                        <span className={classes.postDate}>
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3 className={classes.postTitle}>
                                        {post.title}
                                    </h3>
                                    <p className={classes.postExcerpt}>
                                        {post.excerpt}
                                    </p>
                                    <div className={classes.readMore}>
                                        Read Article <span className={classes.arrow}>→</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className={classes.newsletter}>
                    <h3 className={classes.newsletterTitle}>
                        Stay in the Loop.
                    </h3>
                    <p className={classes.newsletterDesc}>
                        Get the latest updates on the X Collective, new drops, and community events directly to your inbox.
                    </p>
                    <form className={classes.form}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={classes.input}
                        />
                        <button className={classes.subscribeBtn}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
