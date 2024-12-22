import { Route, Routes } from 'react-router-dom';
// Importing the Route and Routes components from react-router-dom
import HomePage from '../../Pages/HomePage';
import AboutPage from '../../Pages/AboutPage';
import ContactPage from '../../Pages/ContactPage';
import ServicesPage from '../../Pages/ServicePage';
import NotFoundPage from '../../Pages/NotFoundPage'; // Optional: Create this page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* 404 page */}
    </Routes>
  );
};

export default AppRoutes;
