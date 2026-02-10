import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(6), // py-12
        paddingBottom: theme.spacing(6),
        backgroundColor: '#f9f9f9',
        color: theme.palette.common.black,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(12), // py-24
            paddingBottom: theme.spacing(12),
        }
    },
    container: {
        maxWidth: '100%', // Allow full width (minus padding)
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
    header: {
        marginBottom: theme.spacing(8), // mb-16
        maxWidth: '56rem', // max-w-4xl
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(10), // mb-20
        }
    },
    title: {
        fontSize: '2rem', // text-3xl (was 4xl)
        fontFamily: theme.typography.h1.fontFamily, // Display
        fontWeight: 700, // font-bold
        letterSpacing: '-0.05em', // tracking-tighter
        marginBottom: theme.spacing(3), // mb-6
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
            marginBottom: theme.spacing(4), // mb-8
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem', // text-7xl
        }
    },
    description: {
        fontSize: '1rem', // text-base (was lg)
        fontWeight: 300, // font-light
        lineHeight: 1.5, // leading-relaxed
        color: '#464243',
        maxWidth: '42rem', // max-w-2xl
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // text-xl
            lineHeight: 1.625,
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)', // prevent overflow
        gap: theme.spacing(3), // gap-6 (was 8)
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(6), // gap-12
        }
    },
    card: {
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(3), // p-6 (was 8)
        borderRadius: '1.5rem', // rounded-3xl (was 2.5rem)
        border: `1px solid ${theme.palette.grey[100]}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s',
        '&:hover': {
            boxShadow: theme.shadows[10], // shadow-2xl
            transform: 'translateY(-0.5rem)', // -translate-y-2
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6), // p-12
            borderRadius: '2.5rem',
        }
    },
    // ...
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        marginBottom: theme.spacing(4), // mb-8 (was 12)
        flexGrow: 1,
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1.5), // space-y-3 (was 4)
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(6), // mb-12
            gap: theme.spacing(2),
        }
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5), // gap-3 (was 4)
        fontSize: '1rem', // text-base (was lg)
        color: '#464243',
        borderBottom: `1px solid ${theme.palette.grey[50]}`,
        paddingBottom: theme.spacing(1), // pb-2 (was 3)
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(2),
            fontSize: '1.125rem',
            paddingBottom: theme.spacing(1.5),
        },
        '&:last-child': {
            borderBottom: 'none',
        }
    },
    dot: {
        width: '0.5rem', // w-2
        height: '0.5rem',
        borderRadius: '50%',
    },
    button: {
        width: '100%',
        display: 'block',
        textAlign: 'center',
        color: theme.palette.common.white,
        paddingTop: theme.spacing(2), // py-4
        paddingBottom: theme.spacing(2),
        borderRadius: '0.75rem', // rounded-xl
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // tracking-widest
        transition: 'background-color 0.3s',
        position: 'relative',
        zIndex: 10,
        textDecoration: 'none',
    }
}));
