import { createMuiTheme, colors, ThemeProvider, CssBaseline } from '@material-ui/core';
import { render } from 'react-dom';

import App from './App';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#666'
        },
        secondary: {
            main: '#333'
        },
        error: {
            main: colors.red.A400
        },
        background: {
            default: '#e9ecef'
        }
    }
});

const rootElement = document.getElementById('root');
render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>,
    rootElement
);
