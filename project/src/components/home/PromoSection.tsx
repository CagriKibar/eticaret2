import { Truck, RefreshCw, CreditCard, HeadphonesIcon } from 'lucide-react';

const PromoSection = () => {
  const features = [
    {
      icon: <Truck size={40} className="text-blue-500" />,
      title: 'Ücretsiz Kargo',
      description: '300₺ ve üzeri alışverişlerde Türkiye\'nin her yerine ücretsiz kargo',
    },
    {
      icon: <RefreshCw size={40} className="text-blue-500" />,
      title: 'Kolay İade',
      description: '15 gün içinde ücretsiz iade garantisi',
    },
    {
      icon: <CreditCard size={40} className="text-blue-500" />,
      title: 'Güvenli Ödeme',
      description: 'Kredi kartı, havale ve kapıda ödeme seçenekleri',
    },
    {
      icon: <HeadphonesIcon size={40} className="text-blue-500" />,
      title: '7/24 Destek',
      description: 'Müşteri hizmetlerimiz her zaman yanınızda',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-white card-shadow transition-transform hover:translate-y-[-5px]">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;