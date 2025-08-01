import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MainLayout from './pages/MainLayout';
import Flow from "./pages/Flow";


export default function FocusFuel() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flow" element={<Flow />} />
        </Route>
      </Routes>
    </Router>
  )
}

