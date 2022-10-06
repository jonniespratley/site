import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppHeader, AppFooter } from './components';

import HomePage from './pages/home';
import AboutPage from './pages/about';

import './styles.css';
import resumeData from './resumeData.json';

export default function App() {
    const { resume, main, portfolio } = resumeData;
    return (
        <div className="App">
            <BrowserRouter>
                <AppHeader title="site" />
                <Container fixed>
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                    </Routes>
                </Container>
            </BrowserRouter>
            <AppFooter social={main.social} />
        </div>
    );
}
