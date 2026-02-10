import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        fontFamily: theme.typography.fontFamily,
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
    heroSection: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'sticky', // sticky
        top: 0,
        zIndex: 0,
    },
    heroBackground: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.9,
    },
    heroOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent, white)',
    },
    heroContent: {
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
        maxWidth: '64rem', // max-w-5xl
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(10), // mt-20
    },
    badge: {
        display: 'inline-block',
        padding: '4px 16px', // px-4 py-1
        borderRadius: '9999px',
        border: '1px solid currentColor', // border-current
        marginBottom: theme.spacing(3), // mb-6
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    heroTitle: {
        fontSize: '3.75rem', // text-6xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.05em', // tracking-tighter
        color: theme.palette.common.black,
        lineHeight: 0.9,
        marginBottom: theme.spacing(4), // mb-8
        [theme.breakpoints.up('md')]: {
            fontSize: '6rem', // text-8xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '8rem', // text-9xl
        }
    },
    ctaButton: {
        color: theme.palette.common.black,
        padding: '16px 40px', // px-10 py-4
        borderRadius: '9999px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // tracking-widest
        border: 'none',
        cursor: 'pointer',
        boxShadow: theme.shadows[10], // shadow-xl
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
        }
        // Note: 'bgColor' will be applied inline as it comes from data
    },
    spacer: {
        height: '100vh',
    },
    scrollTextSection: {
        position: 'relative',
        zIndex: 10,
        backgroundColor: theme.palette.common.white,
        paddingTop: theme.spacing(16), // py-32
        paddingBottom: theme.spacing(16),
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(24), // py-48
            paddingBottom: theme.spacing(24),
        }
    },
    scrollTextContainer: {
        maxWidth: '56rem', // max-w-4xl
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    scrollText: {
        fontSize: '2.25rem', // text-4xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.05em', // tracking-tighter
        marginBottom: theme.spacing(6), // mb-12
        lineHeight: 1.25,
        color: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem', // text-7xl
        }
    },
    bentoSection: {
        position: 'relative',
        zIndex: 10,
        backgroundColor: theme.palette.grey[50],
        paddingTop: theme.spacing(16), // py-32
        paddingBottom: theme.spacing(16),
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
        borderTopLeftRadius: '3rem', // rounded-t-[3rem]
        borderTopRightRadius: '3rem',
        borderTop: `1px solid ${theme.palette.grey[200]}`,
        [theme.breakpoints.up('md')]: {
            borderTopLeftRadius: '5rem', // rounded-t-[5rem]
            borderTopRightRadius: '5rem',
        }
    },
    bentoContainer: {
        maxWidth: '80rem', // max-w-7xl
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    sectionHeader: {
        textAlign: 'center',
        marginBottom: theme.spacing(10), // mb-20
    },
    sectionTitle: {
        fontSize: '2.25rem', // text-4xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.05em', // tracking-tighter
        marginBottom: theme.spacing(3), // mb-6
        color: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem', // text-6xl
        }
    },
    bentoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        autoRows: '300px',
        gap: theme.spacing(2), // gap-4
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: theme.spacing(3), // gap-6
        }
    },
    bentoItem: {
        position: 'relative',
        borderRadius: '1.5rem', // rounded-3xl
        overflow: 'hidden',
        padding: theme.spacing(4), // p-8
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    // Bento Size Classes
    largeInfo: {
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2',
            gridRow: 'span 2',
        }
    },
    tallInfo: {
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 1',
            gridRow: 'span 2',
        }
    },
    wideInfo: {
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2',
            gridRow: 'span 1',
        }
    },
    smallInfo: {
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 1',
            gridRow: 'span 1',
        }
    },
    storiesSection: {
        position: 'relative',
        zIndex: 10,
        backgroundColor: theme.palette.common.white,
        paddingTop: theme.spacing(16), // py-32
        paddingBottom: theme.spacing(16),
        overflow: 'hidden',
    },
    storiesHeader: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginBottom: theme.spacing(6), // mb-12
    },
    storiesTitle: {
        fontSize: '1.875rem', // text-3xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.05em', // tracking-tighter
        color: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem', // text-5xl
        }
    },
    carouselContainer: {
        display: 'flex',
        overflowX: 'auto',
        paddingBottom: theme.spacing(6), // pb-12
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
        gap: theme.spacing(3), // gap-6
        scrollSnapType: 'x mandatory',
        '::-webkit-scrollbar': {
            display: 'none',
        },
        scrollbarWidth: 'none', // Firefox
    },
    carouselItem: {
        flex: 'none',
        width: '85vw',
        scrollSnapAlign: 'center',
        [theme.breakpoints.up('md')]: {
            width: '400px',
        }
    },
    storyCard: {
        position: 'relative',
        height: '500px',
        borderRadius: '1.5rem', // rounded-3xl
        overflow: 'hidden',
        backgroundColor: theme.palette.grey[100],
    },
    storyImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.7s',
        '.group:hover &': {
            transform: 'scale(1.1)',
        }
    },
    tiersSection: {
        position: 'relative',
        zIndex: 10,
        backgroundColor: theme.palette.grey[50],
        paddingTop: theme.spacing(16), // py-32
        paddingBottom: theme.spacing(16),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    tiersContainer: {
        maxWidth: '64rem', // max-w-5xl
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    tiersGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(4), // gap-8
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        }
    },
    tierCard: {
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.grey[200]}`,
        borderRadius: '1.5rem', // rounded-3xl
        padding: theme.spacing(5), // p-10
        transition: 'border-color 0.2s',
        boxShadow: theme.shadows[1],
        '&:hover': {
            borderColor: 'rgba(0,0,0,0.1)',
        },
    },
    tierName: {
        fontSize: '1.5rem', // text-2xl
        fontWeight: 700,
        marginBottom: theme.spacing(1), // mb-2
        color: theme.palette.common.black,
    },
    tierPrice: {
        fontSize: '1.875rem', // text-3xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(4), // mb-8
        // color handled by data.textColor class
    },
    featureList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5), // gap-3
        color: theme.palette.grey[600],
    },
    footerSection: {
        position: 'relative',
        zIndex: 10,
        backgroundColor: theme.palette.common.white,
        paddingTop: theme.spacing(20), // py-40
        paddingBottom: theme.spacing(20),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        textAlign: 'center',
    },
    footerTitle: {
        fontSize: '3rem', // text-5xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        letterSpacing: '-0.05em', // tracking-tighter
        marginBottom: theme.spacing(6), // mb-12
        color: theme.palette.common.black,
        [theme.breakpoints.up('md')]: {
            fontSize: '6rem', // text-8xl
        }
    },
    applyButton: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding: '20px 48px', // px-12 py-5
        borderRadius: '9999px',
        fontSize: '1.125rem', // text-lg
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // tracking-widest
        border: 'none',
        cursor: 'pointer',
        boxShadow: theme.shadows[10], // shadow-2xl
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: theme.palette.grey[800],
        }
    },
    otherCategoriesSection: {
        position: 'relative',
        zIndex: 10,
        paddingTop: theme.spacing(10), // py-20
        paddingBottom: theme.spacing(10),
        borderTop: `1px solid ${theme.palette.grey[200]}`,
        backgroundColor: theme.palette.common.white,
    },
    otherCategoriesTitle: {
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // tracking-widest
        marginBottom: theme.spacing(5), // mb-10
        textAlign: 'center',
        color: theme.palette.grey[400],
    },
    otherCategoriesGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(3), // gap-6
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        }
    },
    otherCategoryCard: {
        position: 'relative',
        height: '16rem', // h-64
        borderRadius: '1rem', // rounded-2xl
        overflow: 'hidden',
        display: 'block',
        border: `1px solid ${theme.palette.grey[200]}`,
        transition: 'all 0.2s',
        '&:hover': {
            borderColor: theme.palette.grey[300],
        }
    },
    otherCategoryImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.7s, opacity 0.2s',
        opacity: 0.9,
        '.group:hover &': {
            transform: 'scale(1.1)',
            opacity: 1,
        }
    },
    otherCategoryContent: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(3), // p-6
        textAlign: 'center',
        pointerEvents: 'none',
    },
    otherCategoryName: {
        fontSize: '1.875rem', // text-3xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        color: theme.palette.common.white,
        marginBottom: theme.spacing(1), // mb-2
        textShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    viewRole: {
        fontSize: '0.75rem', // text-xs
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // tracking-widest
        color: theme.palette.common.white,
        opacity: 0,
        transform: 'translateY(8px)',
        transition: 'opacity 0.2s, transform 0.2s',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '.group:hover &': {
            opacity: 1,
            transform: 'translateY(0)',
        }
    }
}));
