import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EcommercePage from './pages/EcommercePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
