import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10), // py-20
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(16), // py-32
            paddingBottom: theme.spacing(16),
        }
    },
    container: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2), // px-4
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4), // px-8
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '60px',
            paddingRight: '60px',
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(6), // gap-12
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: theme.spacing(10), // gap-20
        }
    },
    imageColumn: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50%', // w-1/2
        }
    },
    contentColumn: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50%', // w-1/2
        }
    },
    imageWrapper: {
        position: 'relative',
        aspectRatio: '4 / 5',
        borderRadius: '1.5rem', // rounded-3xl
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'scale(1.1)',
    },
    title: {
        fontSize: '2.25rem', // text-4xl
        fontFamily: theme.typography.h1.fontFamily, // Display
        fontWeight: 700, // font-bold
        letterSpacing: '-0.05em', // tracking-tighter
        marginBottom: theme.spacing(4), // mb-8
        lineHeight: 0.9,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem', // text-7xl
        }
    },
    description: {
        fontSize: '1.125rem', // text-lg
        color: theme.palette.grey[600],
        marginBottom: theme.spacing(4), // mb-8
        lineHeight: 1.625, // leading-relaxed
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // text-xl
        }
    },
    bold: {
        whiteSpace: 'nowrap',
        fontWeight: 700,
    },
    tagList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(2), // gap-4
        marginBottom: theme.spacing(5), // mb-10
    },
    tag: {
        padding: '8px 16px', // px-4 py-2
        backgroundColor: theme.palette.grey[100],
        borderRadius: '9999px',
        fontSize: '0.875rem', // text-sm
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.025em', // tracking-wide
    },
    button: {
        backgroundColor: '#EBE563', // Neon Yellow
        color: theme.palette.common.black,
        padding: '16px 32px', // px-8 py-4
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: '#d4cd55',
        }
    }
}));
