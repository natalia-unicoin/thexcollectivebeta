import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        paddingTop: theme.spacing(16), // pt-32
        paddingBottom: theme.spacing(10), // pb-20
        '::selection': {
            backgroundColor: '#EBE563',
            color: theme.palette.common.black,
        }
    },
    container: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
    },
    header: {
        maxWidth: '56rem', // max-w-4xl
        marginBottom: theme.spacing(10), // mb-20
    },
    title: {
        fontSize: '4.5rem', // text-7xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.05em', // tracking-tighter
        marginBottom: theme.spacing(4), // mb-8
        lineHeight: 0.85,
        [theme.breakpoints.up('md')]: {
            fontSize: '8rem', // text-9xl
        }
    },
    titleHighlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Hand
        color: '#2992A3',
    },
    subtitle: {
        fontSize: '1.25rem', // text-xl
        color: theme.palette.grey[600],
        lineHeight: 1.625,
        fontWeight: 300, // font-light
        borderLeft: `2px solid ${theme.palette.grey[200]}`,
        paddingLeft: theme.spacing(4), // pl-8
        maxWidth: '42rem', // max-w-2xl
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // text-2xl
        }
    },
    featuredPost: {
        marginBottom: theme.spacing(12), // mb-24
    },
    featuredLink: {
        display: 'block',
        position: 'relative',
        height: '70vh',
        borderRadius: '1.5rem', // rounded-3xl
        overflow: 'hidden',
    },
    featuredImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.7s',
        '.group:hover &': {
            transform: 'scale(1.05)',
        }
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)',
    },
    featuredContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: theme.spacing(4), // p-8
        maxWidth: '56rem', // max-w-4xl
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8), // p-16
        }
    },
    categoryBadge: {
        display: 'inline-block',
        padding: '4px 16px', // px-4 py-1
        borderRadius: '9999px',
        border: '1px solid rgba(255,255,255,0.3)',
        color: theme.palette.common.white,
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        marginBottom: theme.spacing(3), // mb-6
        backdropFilter: 'blur(12px)',
    },
    featuredTitle: {
        fontSize: '2.25rem', // text-4xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        color: theme.palette.common.white,
        marginBottom: theme.spacing(3), // mb-6
        lineHeight: 1.25,
        textDecoration: 'none',
        '.group:hover &': {
            textDecoration: 'underline',
            textDecorationColor: '#EBE563',
            textDecorationThickness: '2px',
            textUnderlineOffset: '8px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        }
    },
    featuredExcerpt: {
        fontSize: '1.125rem', // text-lg
        color: 'rgba(255,255,255,0.8)',
        marginBottom: theme.spacing(4), // mb-8
        fontWeight: 300,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // text-xl
        }
    },
    meta: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        columnGap: theme.spacing(4), // gap-x-8
        rowGap: theme.spacing(8), // gap-y-16
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        }
    },
    postCard: {
        cursor: 'pointer',
    },
    postImageWrapper: {
        aspectRatio: '4 / 3',
        borderRadius: '1rem', // rounded-2xl
        overflow: 'hidden',
        marginBottom: theme.spacing(4), // mb-8
        backgroundColor: theme.palette.grey[100],
    },
    postImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s',
        '.group:hover &': {
            transform: 'scale(1.1)',
        }
    },
    postContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2), // space-y-4 -> roughly gap 2
    },
    postHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.grey[100]}`,
        paddingBottom: theme.spacing(2), // pb-4
    },
    postCategory: {
        fontSize: '0.75rem', // text-xs
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        color: '#2992A3',
    },
    postDate: {
        fontSize: '0.75rem', // text-xs
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: theme.palette.grey[400],
    },
    postTitle: {
        fontSize: '1.875rem', // text-3xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        lineHeight: 1.25,
        marginBottom: theme.spacing(2), // mb-4
        transition: 'color 0.2s',
        '.group:hover &': {
            color: '#2992A3',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem', // text-5xl
        }
    },
    postExcerpt: {
        color: theme.palette.grey[500],
        lineHeight: 1.625,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    readMore: {
        paddingTop: theme.spacing(2), // pt-4
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1), // gap-2
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'all 0.2s',
        '.group:hover &': {
            gap: theme.spacing(2), // gap-4
        }
    },
    arrow: {
        color: '#EBE563',
    },
    newsletter: {
        marginTop: theme.spacing(16), // mt-32
        backgroundColor: theme.palette.grey[50],
        borderRadius: '1.5rem', // rounded-3xl
        padding: theme.spacing(6), // p-12
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(12), // p-24
        }
    },
    newsletterTitle: {
        fontSize: '2.25rem', // text-4xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(4), // mb-8
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        }
    },
    newsletterDesc: {
        fontSize: '1.25rem', // text-xl
        color: theme.palette.grey[600],
        marginBottom: theme.spacing(6), // mb-12
        maxWidth: '42rem', // max-w-2xl
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 300,
    },
    form: {
        maxWidth: '28rem', // max-w-md
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2), // gap-4
    },
    input: {
        width: '100%',
        padding: '16px 24px', // px-6 py-4
        borderRadius: '9999px',
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.grey[200]}`,
        outline: 'none',
        transition: 'all 0.2s',
        textAlign: 'center',
        '&:focus': {
            borderColor: '#EBE563',
            boxShadow: '0 0 0 2px rgba(235, 229, 99, 0.2)',
        },
        '&::placeholder': {
            color: theme.palette.grey[300],
        }
    },
    subscribeBtn: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding: '16px 32px', // px-8 py-4
        borderRadius: '9999px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: '#EBE563',
            color: theme.palette.common.black,
        }
    }
}));
