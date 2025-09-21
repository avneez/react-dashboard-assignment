import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import EcommercePage from './pages/EcommercePage';
import OrderLists from './pages/OrderLists';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<EcommercePage />} />
            <Route path="/ecommerce" element={<EcommercePage />} />
            <Route path="/orders" element={<OrderLists />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
