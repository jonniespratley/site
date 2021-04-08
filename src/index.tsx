import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { render } from 'react-dom';

import App from './App';
import { darkTheme } from './theme';
import './styles.css';

const rootElement = document.getElementById('root');
render(
    <ThemeProvider theme={darkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>,
    rootElement
);
