import { LandingPage } from '@/pages/LandingPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};
