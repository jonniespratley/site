import { extendTheme } from '@mui/joy/styles';

export const joyThemes = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    50: '#C0CCD9',
                    100: '#A5B8CF',
                    200: '#6A96CA',
                    300: '#f00',
                    400: '#0f0',
                    500: '#00f',
                    600: '#1B62B5',
                    700: '#265995',
                    800: '#2F4968',
                    900: '#ddd',
                },
            },
        },
        light: {
            palette: {
                primary: {
                    50: '#232323',
                    100: '#C2D0E3',
                    200: '#8AA4C8',
                    300: '#f0f',
                    400: '#ff0',
                    500: '#0ff',
                    600: '#005FA5',
                    700: '#00508D',
                    800: '#00426F',
                    900: '#333',
                },
            },
        },
    },
    components: {
        JoyInput: {
            styleOverrides: {
                root: ({ theme, ownerState }) => {
                    console.log('JoyInput theme applied', { theme, ownerState });
                    return {
                        ...(ownerState.variant === 'solid' && {
                            backgroundColor: theme.vars.palette.primary[300],
                        })
                    }
                }
            }
        },
    },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.
