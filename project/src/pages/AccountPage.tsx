import React from 'react';
import { Routes, Route } from 'react-router-dom';

function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="bg-white rounded-lg shadow p-6">
          <nav className="space-y-2">
            <a href="/hesabim" className="block py-2 px-4 rounded hover:bg-gray-100">Dashboard</a>
            <a href="/hesabim/siparisler" className="block py-2 px-4 rounded hover:bg-gray-100">Orders</a>
            <a href="/hesabim/adresler" className="block py-2 px-4 rounded hover:bg-gray-100">Addresses</a>
            <a href="/hesabim/ayarlar" className="block py-2 px-4 rounded hover:bg-gray-100">Settings</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 bg-white rounded-lg shadow p-6">
          <Routes>
            <Route index element={
              <div>
                <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
                <p className="text-gray-600">Welcome to your account dashboard.</p>
              </div>
            } />
            <Route path="siparisler" element={
              <div>
                <h2 className="text-2xl font-semibold mb-4">Orders</h2>
                <p className="text-gray-600">Your order history will appear here.</p>
              </div>
            } />
            <Route path="adresler" element={
              <div>
                <h2 className="text-2xl font-semibold mb-4">Addresses</h2>
                <p className="text-gray-600">Manage your shipping and billing addresses.</p>
              </div>
            } />
            <Route path="ayarlar" element={
              <div>
                <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                <p className="text-gray-600">Update your account settings and preferences.</p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;