import { 
  Users, 
  ShoppingBag, 
  CreditCard, 
  TrendingUp,
  Package,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Toplam Satış',
      value: '₺124,592',
      change: '+12.5%',
      increasing: true,
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: 'Aktif Müşteriler',
      value: '2,845',
      change: '+8.2%',
      increasing: true,
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Yeni Siparişler',
      value: '156',
      change: '-3.1%',
      increasing: false,
      icon: <ShoppingBag className="w-6 h-6" />
    },
    {
      title: 'Stok Değeri',
      value: '₺89,745',
      change: '+5.4%',
      increasing: true,
      icon: <Package className="w-6 h-6" />
    }
  ];

  const recentOrders = [
    { id: '1234', customer: 'Ahmet Yılmaz', total: '₺1,250', status: 'Tamamlandı' },
    { id: '1235', customer: 'Ayşe Demir', total: '₺890', status: 'İşlemde' },
    { id: '1236', customer: 'Mehmet Kaya', total: '₺2,100', status: 'Beklemede' },
    { id: '1237', customer: 'Fatma Şahin', total: '₺750', status: 'Tamamlandı' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                {stat.icon}
              </div>
              {stat.increasing ? (
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              ) : (
                <ArrowDownRight className="w-5 h-5 text-red-500" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600 mt-1">{stat.title}</p>
            <span className={`text-sm ${
              stat.increasing ? 'text-green-500' : 'text-red-500'
            }`}>
              {stat.change} bu ay
            </span>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Satış Grafiği</h2>
          <div className="h-64 flex items-center justify-center border rounded">
            Satış grafiği buraya gelecek
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Popüler Ürünler</h2>
          <div className="h-64 flex items-center justify-center border rounded">
            Ürün grafiği buraya gelecek
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Son Siparişler</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sipariş ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Müşteri
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Toplam
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Tamamlandı' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'İşlemde'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;