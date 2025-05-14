import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  Settings, 
  ChevronDown,
  BarChart3,
  Tags,
  Truck,
  FileText,
  MessageSquare,
  Bell
} from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { 
      icon: <LayoutDashboard size={20} />, 
      label: 'Dashboard', 
      path: '/admin' 
    },
    { 
      icon: <Package size={20} />, 
      label: 'Ürünler',
      path: '/admin/products'
    },
    { 
      icon: <Users size={20} />, 
      label: 'Müşteriler',
      path: '/admin/customers'
    },
    { 
      icon: <ShoppingCart size={20} />, 
      label: 'Siparişler',
      path: '/admin/orders'
    },
    { 
      icon: <Tags size={20} />, 
      label: 'Kategoriler',
      path: '/admin/categories'
    },
    { 
      icon: <Truck size={20} />, 
      label: 'Kargo Yönetimi',
      path: '/admin/shipping'
    },
    { 
      icon: <FileText size={20} />, 
      label: 'Faturalar',
      path: '/admin/invoices'
    },
    { 
      icon: <BarChart3 size={20} />, 
      label: 'Raporlar',
      path: '/admin/reports'
    },
    { 
      icon: <MessageSquare size={20} />, 
      label: 'Yorumlar',
      path: '/admin/reviews'
    },
    { 
      icon: <Settings size={20} />, 
      label: 'Ayarlar',
      path: '/admin/settings'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white border-r border-gray-200 w-64`}>
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/admin" className="text-xl font-bold text-blue-600">
            KTR Admin
          </Link>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-300`}>
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-600 hover:text-gray-900">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Admin"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;