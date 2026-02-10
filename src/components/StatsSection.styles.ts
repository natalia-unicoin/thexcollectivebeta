import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10), // py-20
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.grey[50],
        borderTop: `1px solid ${theme.palette.grey[100]}`,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: theme.spacing(6), // gap-12 -> 48px
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: theme.spacing(4), // gap-8
        }
    },
    textColumn: {
        width: '100%',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            width: '33.333333%', // w-1/3
            textAlign: 'left',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700, // bold
        fontSize: '2.25rem', // text-4xl
        marginBottom: theme.spacing(3), // mb-6
        lineHeight: 1.25, // leading-tight
        color: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem', // text-5xl
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat
        fontSize: '3rem', // text-5xl
        color: '#E2622B', // Builder Orange prop
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        }
    },
    description: {
        fontSize: '1.25rem', // text-xl
        color: theme.palette.text.secondary, // gray-500
        lineHeight: 1.625, // leading-relaxed
        fontWeight: 300, // font-light
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // text-2xl
        }
    },
    grid: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', // grid-cols-2
        gap: theme.spacing(4), // gap-8
        [theme.breakpoints.up('md')]: {
            width: '66.666667%', // w-2/3
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', // md:grid-cols-4
            gap: theme.spacing(6), // md:gap-12
        }
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    statValue: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700, // font-bold
        fontSize: '3rem', // text-5xl
        marginBottom: theme.spacing(1), // mb-2
        letterSpacing: '-0.05em', // tracking-tighter
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem', // text-7xl
            marginBottom: theme.spacing(2), // mb-4
        }
    },
    statLabel: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat
        fontWeight: 700,
        fontSize: '1.5rem', // text-2xl
        color: theme.palette.grey[600],
        whiteSpace: 'pre-line',
        lineHeight: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.875rem', // text-3xl
        }
    }
}));
