import logo from './logo.svg';
import './App.css';
import { Routes } from './Route';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
  <Routes />
  </Layout>
  </BrowserRouter>
  );
}

export default App;
