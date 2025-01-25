import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';

import './App.css';

import UserTile from './UserTile';
const AboutComponent = React.lazy(() => import('sharedMFE/AboutComponent'));
const Dashboard = React.lazy(() => import('dashboard/Dashboard'));
const UserManagement = React.lazy(() => import('userManagement/UserManagement'));
import('sharedMFE/commonStyles');

const App = () => (
  <div className="container">
    <span className="common-style">Host MFE App</span>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dash" end className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/image" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div style={{ display: 'flex', flexDirection: 'column', padding: '2px', rowGap: '4px' }}>
                <div className='common-style' style={{ width: 'fit-content', backgroundColor: 'blue', color: 'white' }}>Host MFE Application's User Count Component</div>
                <UserTile />
                <div style={{ display: 'flex', flexDirection: 'row', padding: '2px', columnGap: '30px', justifyContent: 'space-around' }}>
                  <Dashboard />
                  <UserManagement />
                </div>
              </div>
            }
          />
          <Route
            path="/dash"
            element={<Dashboard />}
          />
          <Route
            path="/image"
            element={<AboutComponent />}
          />
        </Routes>

      </Suspense>
    </Router>
  </div>
);

export default App;