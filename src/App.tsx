import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Notebook from './pages/Notebook';
import Problem from './pages/Problem';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/problem" element={<Problem />} />
      <Route path="/notebook" element={<Notebook />} />
    </Routes>
  );
}

export default App;
