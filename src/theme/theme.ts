import { createTheme } from '@mui/material/styles';
import { Inter, Caveat } from 'next/font/google';

const inter = Inter({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

const caveat = Caveat({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000', // Black as primary usually
        },
        secondary: {
            main: '#EBE563', // Neon Yellow
        },
        success: {
            main: '#2992A3', // Teal
        },
        info: {
            main: '#BEE3EE', // Light Blue
        },
        warning: {
            main: '#E2622B', // Orange
        },
        background: {
            default: '#ffffff',
            paper: '#f3f4f6',
        },
        text: {
            primary: '#000000',
            secondary: '#4b5563', // gray-600
        }
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700, // bold
            lineHeight: 0.9,
        },
        h2: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700, // bold
        },
        h3: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
        },
        h4: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
        },
        h5: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
        },
        h6: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
        },
        body1: {
            fontFamily: inter.style.fontFamily,
        },
        // Custom font variation for 'hand'
        subtitle1: {
            fontFamily: caveat.style.fontFamily,
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                h1, h2, h3, h4, h5, h6 {
                    font-weight: 700 !important;
                }
            `,
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 9999, // rounded-full
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    padding: '12px 24px',
                },
            },
        },
    },
});

export default theme;
