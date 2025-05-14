import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'erkek',
    name: 'Erkek Giyim',
    image: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/kategori/erkek'
  },
  {
    id: 'kadin',
    name: 'Kadın Giyim',
    image: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/kategori/kadin'
  },
  {
    id: 'elektronik',
    name: 'Elektronik',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/kategori/elektronik'
  },
  {
    id: 'ayakkabi',
    name: 'Ayakkabı',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/kategori/ayakkabi'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Kategoriler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative h-80 overflow-hidden rounded-lg card-shadow"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-xl font-semibold text-white group-hover:underline">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;