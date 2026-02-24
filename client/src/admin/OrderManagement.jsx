import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, ArrowLeft } from 'lucide-react';

export default function OrderManagement() {
  const [activeTab, setActiveTab] = useState('all');

  // Mock orders data
  const orders = [
    {
      id: 'ORD-2025-PUDZ68CBO',
      customer: 'yashmakwana2275',
      date: '2026-02-15',
      items: 1,
      total: 1061,
      status: 'Pending'
    },
    {
      id: 'ORD-2025-EZ6XZAXH2',
      customer: 'yashmakwana2275',
      date: '2026-02-13',
      items: 1,
      total: 1475,
      status: 'Pending'
    },
    {
      id: 'ORD-001',
      customer: 'Rajesh Kumar',
      date: '2025-02-12',
      items: 2,
      total: 3597,
      status: 'Delivered'
    },
    {
      id: 'ORD-002',
      customer: 'Priya Sharma',
      date: '2025-02-11',
      items: 2,
      total: 2250,
      status: 'Shipped'
    },
    {
      id: 'ORD-003',
      customer: 'Amit Patel',
      date: '2025-02-10',
      items: 1,
      total: 899,
      status: 'Processing'
    },
    {
      id: 'ORD-004',
      customer: 'Suresh Kumar',
      date: '2025-02-09',
      items: 3,
      total: 4580,
      status: 'Pending'
    },
    {
      id: 'ORD-005',
      customer: 'Neha Gupta',
      date: '2025-02-08',
      items: 1,
      total: 1798,
      status: 'Delivered'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-700 bg-green-50';
      case 'Shipped':
        return 'text-blue-700 bg-blue-50';
      case 'Processing':
        return 'text-yellow-700 bg-yellow-50';
      case 'Pending':
        return 'text-gray-700 bg-gray-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  const getOrderCount = (status) => {
    if (status === 'all') return orders.length;
    return orders.filter(order => order.status.toLowerCase() === status).length;
  };

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
            <p className="text-sm text-gray-500 mt-1">Manage customer orders and track fulfillment status.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            Export Orders
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            All ({getOrderCount('all')})
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'pending'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Pending ({getOrderCount('pending')})
          </button>
          <button
            onClick={() => setActiveTab('processing')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'processing'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Processing ({getOrderCount('processing')})
          </button>
          <button
            onClick={() => setActiveTab('shipped')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'shipped'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Shipped ({getOrderCount('shipped')})
          </button>
          <button
            onClick={() => setActiveTab('delivered')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'delivered'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Delivered ({getOrderCount('delivered')})
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Order #
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">{order.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{order.customer}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{order.items}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">₹{order.total.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Back to Dashboard */}
        <div className="mt-6">
          <Link 
            to="/admin" 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
