import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(6), // py-12
        paddingBottom: theme.spacing(6),
        backgroundColor: '#f9f9f9',
        color: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(10), // py-20
            paddingBottom: theme.spacing(10),
        }
    },
    container: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '60px',
            paddingRight: '60px',
        }
    },
    contentWrapper: {
        maxWidth: '64rem', // max-w-5xl
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily, // Inter
        fontWeight: 700, // bold
        letterSpacing: '-0.05em', // tracking-tighter
        marginBottom: theme.spacing(4), // mb-8
        lineHeight: 0.9,
        fontSize: '2.25rem', // text-4xl
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem', // text-7xl
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat (Hand)
        color: theme.palette.success.main, // Teal #2992A3
        fontSize: '3rem', // text-5xl
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem', // text-7xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6rem', // text-9xl
        }
    },
    description: {
        fontSize: '1.25rem', // text-xl
        fontWeight: 300, // font-light
        lineHeight: 1.625, // leading-relaxed
        color: '#464243',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // text-2xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.875rem', // text-3xl
        }
    },
    boldBrand: {
        whiteSpace: 'nowrap',
        fontWeight: 700,
    },
    buttonWrapper: {
        marginTop: theme.spacing(6), // mt-12
    },
    readButton: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding: '12px 32px', // px-8 py-3
        borderRadius: '9999px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // tracking-widest
        border: 'none',
        cursor: 'pointer',
        boxShadow: theme.shadows[6], // shadow-lg
        transition: 'background-color 0.2s, color 0.2s',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main, // Neon Yellow
            color: theme.palette.common.black,
        }
    }
}));
