import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveNavBar from './components/ResponsiveNavBar';
import { HomePage, ContactPage } from './pages/index';

function App() {
  return (
    <>
      <Router>
        <ResponsiveNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
