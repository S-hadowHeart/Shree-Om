import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('user') : null
  const user = stored ? JSON.parse(stored) : { name: 'yashmakwana2275', email: 'yashmakwana2275@gmail.com' }

  const initial = (user.name && user.name[0]) ? user.name[0].toUpperCase() : 'U'

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">My Dashboard</h2>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-72 bg-white rounded-lg border p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">{initial}</div>
            <div>
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          </div>

          <nav className="mt-4 space-y-2">
            <Link to="#" className="block px-3 py-2 rounded-md bg-orange-500 text-white">Dashboard</Link>
            <Link to="/my-orders" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">My Orders</Link>
            <Link to="/wishlist" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Wishlist</Link>
            <Link to="/profile" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Profile</Link>
            <Link to="/reset-password" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Reset Password</Link>
            <button className="block px-3 py-2 rounded-md text-red-600 hover:bg-gray-50">Logout</button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold">Hello, {user.name}!</h3>
              <p className="text-gray-500">Welcome back to your dashboard</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4 text-center">
              <div className="text-3xl font-bold text-orange-500">0</div>
              <div className="text-sm text-gray-500">Total Orders</div>
            </div>
            <div className="bg-white rounded-lg border p-4 text-center">
              <div className="text-3xl font-bold text-orange-500">0</div>
              <div className="text-sm text-gray-500">Pending Orders</div>
            </div>
            <div className="bg-white rounded-lg border p-4 text-center">
              <div className="text-3xl font-bold text-orange-500">0</div>
              <div className="text-sm text-gray-500">Wishlist Items</div>
            </div>
            <div className="bg-white rounded-lg border p-4 text-center">
              <div className="text-3xl font-bold text-orange-500">0</div>
              <div className="text-sm text-gray-500">Reward Points</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h4 className="font-semibold mb-4">Recent Orders</h4>
            <div className="flex flex-col items-center justify-center py-12">
              <div className="h-16 w-16 rounded-full border flex items-center justify-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                </svg>
              </div>
              <div className="text-gray-500 mb-4">No orders yet</div>
              <Link to="/products" className="bg-orange-500 text-white px-5 py-2 rounded-md shadow">Start Shopping</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
