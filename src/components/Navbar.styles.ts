import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: theme.palette.common.white,
        borderBottom: `1px solid ${theme.palette.grey[100]}`,
    },
    container: {
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(1), // py-2 (was 1.5/3)
        paddingBottom: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1280px', // standard container
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
            paddingTop: theme.spacing(2), // py-4
            paddingBottom: theme.spacing(2),
        }
    },
    logoLink: {
        display: 'block',
        width: '128px', // w-32
        [theme.breakpoints.up('md')]: {
            width: '192px', // w-48
        },
    },
    logoImage: {
        width: '100%',
        height: 'auto',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(4),
        },
    },
    joinButton: {
        backgroundColor: theme.palette.secondary.main, // Neon Yellow
        color: theme.palette.common.black,
        padding: '8px 20px', // px-5 py-2
        borderRadius: '9999px',
        fontSize: '0.75rem', // text-xs
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        marginTop: '10px', // my-[10px] matches original
        marginBottom: '10px',
        '&:hover': {
            backgroundColor: '#d4cd55', // custom hover
        },
        [theme.breakpoints.up('md')]: {
            padding: '8px 24px', // px-6 py-2
            fontSize: '0.875rem', // text-sm
        },
    },
    langSelector: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(1),
            fontSize: '0.875rem',
            fontWeight: 500,
        },
    },
    langActive: {
        color: theme.palette.common.black,
        fontWeight: 700,
        cursor: 'pointer',
    },
    langInactive: {
        color: theme.palette.text.secondary, // gray-400 equivalent
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.common.black,
        }
    },
    menuButtonWrapper: {
        position: 'relative',
        zIndex: 60,
    },
    menuButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: theme.palette.common.black,
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        '&:hover': {
            color: theme.palette.grey[600],
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.875rem',
        },
    },
    menuLabel: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    menuIconMobile: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        fill: '#1f1f1f',
    },
    // DRAWER STYLES
    backdrop: {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 55,
        backdropFilter: 'blur(4px)',
    },
    drawer: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.common.white,
        zIndex: 60,
        padding: theme.spacing(4), // p-8
        display: 'flex',
        flexDirection: 'column',
        boxShadow: theme.shadows[24],
        overflowY: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '500px',
            padding: theme.spacing(6), // p-12
        }
    },
    closeButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: theme.spacing(4),
    },
    closeButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: theme.spacing(1),
        borderRadius: '9999px',
        transition: 'background-color 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',
        }
    },
    menuLogo: {
        width: '120px', // w-32 (was 160px)
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(5),
        }
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3), // gap-6
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(4), // gap-8
        }
    },
    mainLinkButton: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: theme.typography.h1.fontFamily, // Inter
        fontWeight: 700, // bold
        textTransform: 'uppercase',
        letterSpacing: '-0.05em', // tracking-tighter
        color: theme.palette.common.black,
        lineHeight: 0.9,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        width: '100%',
        fontSize: '1.25rem', // text-xl
        [theme.breakpoints.up('md')]: {
            fontSize: '1.875rem', // text-3xl
        },
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.success.main, // Teal
        }
    },
    linkUnderline: {
        display: 'none',
    },
    mainLinkTextWrapper: {
        position: 'relative',
    },
    subItemsContainer: {
        overflow: 'hidden',
        paddingLeft: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginTop: theme.spacing(2),
        borderLeft: `2px solid ${theme.palette.grey[100]}`,
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
        }
    },
    subItem: {
        fontSize: '1.125rem', // text-lg
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // tracking-widest
        color: theme.palette.grey[300],
        cursor: 'not-allowed',
        display: 'block',
        paddingTop: '4px',
        marginBottom: '4px',
        width: 'fit-content',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // text-xl
        }
    },

    menuFooter: {
        position: 'absolute',
        bottom: '32px', // bottom-8 (was 48px/12)
        left: '24px', // left-6 (was 32px/8)
        right: '24px',
        borderTop: `1px solid ${theme.palette.grey[100]}`,
        paddingTop: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            bottom: '80px', // bottom-20
            left: '80px', // left-20
            right: '80px',
            paddingTop: theme.spacing(4),
        }
    },
    footerContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    },
    contactLink: {
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: theme.palette.grey[500],
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.common.black,
        }
    },
    socialIcons: {
        display: 'flex',
        gap: theme.spacing(2),
    },
    socialIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: theme.palette.grey[50], // gray-50
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.black,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        }
    }
}));
