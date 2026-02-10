import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        [theme.breakpoints.up('md')]: {
            objectPosition: '80% 30%',
        },
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.6))',
    },
    content: {
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        paddingLeft: theme.spacing(2), // px-4
        paddingRight: theme.spacing(2),
        maxWidth: '64rem', // max-w-5xl
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5rem', // mt-20
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700, // bold
        letterSpacing: '-0.05em', // tracking-tighter
        marginBottom: theme.spacing(8), // mb-16
        filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))', // drop-shadow-lg
        lineHeight: 0.9,
        fontSize: '2.25rem', // text-4xl
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem', // text-5xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem', // text-7xl
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat (Hand)
        color: theme.palette.secondary.main, // Neon Yellow
        paddingRight: theme.spacing(1.5), // pr-3
        fontSize: '3rem', // text-5xl
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6rem', // text-8xl
        }
    },
    ctaContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    ctaButton: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.black,
        padding: '16px 32px', // px-8 py-4
        borderRadius: '9999px',
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        boxShadow: theme.shadows[10], // shadow-xl approximately
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: '#d4cd55',
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[20], // shadow-2xl
        },
        [theme.breakpoints.up('md')]: {
            padding: '20px 40px', // px-10 py-5
            fontSize: '1rem', // text-base
        }
    },
    watermark: {
        position: 'absolute',
        bottom: theme.spacing(4), // bottom-8
        right: theme.spacing(4), // right-8
        zIndex: 20,
    },
    watermarkBadge: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '6px 16px', // px-4 py-1.5
        borderRadius: '9999px',
        boxShadow: theme.shadows[4],
    },
    watermarkText: {
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.2em',
        color: 'rgba(255, 255, 255, 0.8)',
        textTransform: 'uppercase',
    }
}));
