import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';

import './App.css';

import UserTile from './components/UserTile';
import Migrate from './components/Migrate';
const AboutComponent = React.lazy(() => import('sharedMFE/AboutComponent'));
const Dashboard = React.lazy(() => import('dashboard/Dashboard'));
const UserManagement = React.lazy(() => import('userManagement/UserManagement'));
const Header = React.lazy(() => import('header/Header'));
import Footer from "./components/Footer";
import('sharedMFE/commonStyles');

const App = () => (
  <div className='common-container' style={{ backgroundColor: 'aqua' }}>
    <div className='common-style'>Host MFE App</div>
     <Suspense fallback={<div>Loading Header...</div>} >
     <div>
      <Header/>
      </div>
    </Suspense>
    <div className="container">
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
              <li>
                <NavLink to="/migrate" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  Migrating to MFE Arch
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div style={{ display: 'flex', flexDirection: 'column', padding: '2px', gap: '20px' }}>
                  <UserTile />
                  <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', justifyContent: 'space-around' }}>
                    <div style={{ width: '50%' }}>
                      <Dashboard />
                    </div>
                    <div style={{ width: '50%' }}>
                      <UserManagement />
                    </div>
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
            <Route
              path="/migrate"
              element={<Migrate />}
            />
          </Routes>

        </Suspense>
      </Router>
    </div>
    <div style={{margin: '10px'}}>
    <Footer />
    </div>
  </div>
);

export default App;