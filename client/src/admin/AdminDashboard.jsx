import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Package, Users, ShoppingCart, TrendingUp, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  
  // Mock user data - replace with actual auth context
  const user = { fullName: 'Admin User', role: 'admin' };

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      alert('Admin access required');
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    alert('Logged out successfully');
    navigate('/');
  };

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back, Admin User</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Link to="/admin">
            <div className="bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">
              <TrendingUp className="h-6 w-6 mb-2" />
              <h3 className="font-semibold text-sm">Dashboard</h3>
            </div>
          </Link>
          <Link to="/admin/products">
            <div className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-200">
              <Package className="h-6 w-6 mb-2 text-gray-700" />
              <h3 className="font-semibold text-sm text-gray-900">Products</h3>
            </div>
          </Link>
          <Link to="/admin/orders">
            <div className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-200">
              <ShoppingCart className="h-6 w-6 mb-2 text-gray-700" />
              <h3 className="font-semibold text-sm text-gray-900">Orders</h3>
            </div>
          </Link>
          <Link to="/admin/users">
            <div className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-200">
              <Users className="h-6 w-6 mb-2 text-gray-700" />
              <h3 className="font-semibold text-sm text-gray-900">Users</h3>
            </div>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">₹12,45,000</p>
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-xl font-bold">₹</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">567</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">342</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b last:border-0">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Order #ORD-2025-00{i}</p>
                    <p className="text-xs text-gray-500">2 items • ₹2,500</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                    Delivered
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Low Stock Alerts</h3>
            <div className="space-y-4">
              {[
                { name: 'Door Handle Chrome', stock: 5 },
                { name: 'Lock Premium', stock: 3 },
                { name: 'Hinge Heavy Duty', stock: 8 },
                { name: 'Tower Bolt Steel', stock: 6 },
                { name: 'Handle Matt Black', stock: 4 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b last:border-0">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">Only {item.stock} units left</p>
                  </div>
                  <button className="text-xs px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 font-medium">
                    Reorder
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
