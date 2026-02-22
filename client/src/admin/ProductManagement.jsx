import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Edit, Trash2, Plus } from 'lucide-react';

export default function ProductManagement() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock product data
  const products = [
    {
      id: 1,
      name: 'Premium SS304 Door Handle - Chrome',
      category: 'Door Handles',
      price: 1200,
      stock: 234,
      image: '/placeholder.jpg'
    },
    {
      id: 2,
      name: 'Heavy Duty Lock Set Premium',
      category: 'Locks',
      price: 1250,
      stock: 156,
      image: '/placeholder.jpg'
    },
    {
      id: 3,
      name: 'Door Handle Matt Black Finish',
      category: 'Door Handles',
      price: 950,
      stock: 189,
      image: '/placeholder.jpg'
    },
    {
      id: 4,
      name: 'Heavy Duty Hinge Set (Pack of 2)',
      category: 'Hinges',
      price: 590,
      stock: 298,
      image: '/placeholder.jpg'
    },
    {
      id: 5,
      name: 'Gold Finish Decorative Door Handle',
      category: 'Door Handles',
      price: 1599,
      stock: 87,
      image: '/placeholder.jpg'
    },
    {
      id: 6,
      name: 'Tower Bolt Stainless Steel',
      category: 'Tower Bolts',
      price: 399,
      stock: 456,
      image: '/placeholder.jpg'
    },
    {
      id: 7,
      name: 'Digital Smart Lock with Keypad',
      category: 'Locks',
      price: 3499,
      stock: 67,
      image: '/placeholder.jpg'
    },
    {
      id: 8,
      name: 'Antique Brass Door Handle Set',
      category: 'Door Handles',
      price: 1399,
      stock: 124,
      image: '/placeholder.jpg'
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your product inventory</p>
        </div>

        {/* Search and Add Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <button className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors">
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-medium">IMG</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">₹{product.price.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{product.stock}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                        <Trash2 className="h-4 w-4" />
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
            className="inline-block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
