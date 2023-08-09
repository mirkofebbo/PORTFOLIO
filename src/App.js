import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import Projects from './page/Projects';
import Contact from './page/Contact';
import ProjectPage from './page/ProjectPage';

function App() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Project/:projectId" element={<ProjectPage />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </Box>
  );
}

export default App;
