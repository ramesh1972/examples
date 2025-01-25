import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Package2, Home } from 'lucide-react';

const Dashboard = React.lazy(() => import('dashboard/Dashboard'));
const Products = React.lazy(() => import('products/Products'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  <LayoutDashboard className="w-5 h-5 mr-2" />
                  Dashboard
                </Link>
                <Link
                  to="/products"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  <Package2 className="w-5 h-5 mr-2" />
                  Products
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={
                <div className="text-center mt-20">
                  <h1 className="text-4xl font-bold text-gray-900">Welcome to Micro Frontend Demo</h1>
                  <p className="mt-4 text-gray-600">Navigate using the menu above to explore different micro frontends.</p>
                </div>
              } />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;