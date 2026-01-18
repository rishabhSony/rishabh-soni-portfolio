import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';

const App = () => {
    return (
        <Router basename="/rishabh-soni-portfolio">
            <div className="min-h-screen font-sans text-gray-900 bg-gray-50">
                <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Portfolio />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
