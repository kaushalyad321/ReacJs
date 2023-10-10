import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import withAuth from './withAuth'; 
const Home = () => <h1>Welcome to the Home Page</h1>;
const Dashboard = () => <h1>Dashboard - Authenticated Users Only</h1>;
const App = () => {
  const authenticatedDashboard=withAuth(Dashboard) ;
  return (
    <Router>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/dashboard" component={authenticatedDashboard}/>
      </Routes>
    </Router>
  );
};

export default App;