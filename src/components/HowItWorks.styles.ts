import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(6), // py-12
        paddingBottom: theme.spacing(6),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(10), // py-20
            paddingBottom: theme.spacing(10),
        }
    },
    container: {
        maxWidth: '1600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '40px',
            paddingRight: '40px',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.05em',
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        fontSize: '2.25rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4rem',
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily,
        color: theme.palette.success.main,
        fontSize: '3rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6rem',
        }
    },
    // Grid/Scroll Container
    scrollContainer: {
        display: 'flex',
        flexWrap: 'nowrap',
        gap: theme.spacing(2),
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        paddingBottom: theme.spacing(4),
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(-2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(3),
            paddingBottom: 0,
            marginLeft: theme.spacing(-4),
            marginRight: theme.spacing(-4),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            gap: theme.spacing(4),
            marginLeft: '-40px',
            marginRight: '-40px',
            paddingLeft: '40px',
            paddingRight: '40px',
        }
    },
    cardWrapper: {
        display: 'block',
        minWidth: '400px',
        flexShrink: 0,
        scrollSnapAlign: 'start',
    },

    cardInner: {
        position: 'relative',
        height: '480px',
        width: '100%',
        cursor: 'pointer',
        perspective: '1000px',
        [theme.breakpoints.up('md')]: {
            height: '650px',
        }
    },
    cardFlipper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.7s',
        transformStyle: 'preserve-3d', // preserve-3d
    },
    cardFront: {
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden', // backface-hidden
        borderRadius: '1.5rem', // rounded-3xl
        overflow: 'hidden',
        boxShadow: theme.shadows[4], // shadow-lg
        backgroundColor: theme.palette.grey[50],
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.7s',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darker by default for readability
        transition: 'background-color 0.3s',
    },
    stepIdLarge: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(3),
        fontSize: '7rem',
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 900,
        opacity: 0.15,
        zIndex: 10,
        color: theme.palette.common.white,
        lineHeight: 1,
        pointerEvents: 'none',
        [theme.breakpoints.up('md')]: {
            fontSize: '9rem',
        }
    },
    frontTitleWrapper: {
        position: 'absolute',
        bottom: theme.spacing(4), // bottom-8
        left: theme.spacing(4), // left-8
    },
    frontTitle: {
        fontSize: '2.5rem',
        fontFamily: theme.typography.subtitle1.fontFamily,
        fontWeight: 700,
        color: theme.palette.common.white,
        letterSpacing: '-0.025em',
        lineHeight: 1.1,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        }
    },
    cardBack: {
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        borderRadius: '1.5rem',
        padding: theme.spacing(6), // p-12
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: theme.palette.common.white,
        borderWidth: '2px', // border-2
        borderStyle: 'solid',
    },
    backStepId: {
        fontSize: '3.75rem', // text-6xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(4), // mb-8
        opacity: 0.2,
    },
    backTitle: {
        fontSize: '3rem', // text-5xl
        fontFamily: theme.typography.subtitle1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(4), // mb-8
    },
    backDescription: {
        fontSize: '1.25rem', // text-xl
        color: '#464243',
        lineHeight: 1.625,
        fontWeight: 300,
    },
    mobileIndicators: {
        display: 'none',
    },
    indicatorDot: {
        display: 'none',
    }
}));
