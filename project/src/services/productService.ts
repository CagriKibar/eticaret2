import { Product } from '../types/product';

// Mock data for demonstration purposes
const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Klasik Kesim Mavi Erkek Takım Elbise',
    description: 'Modern ve şık tasarıma sahip, özel günleriniz için ideal klasik kesim takım elbise.',
    price: 1299.99,
    discountPrice: 999.99,
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'erkek',
    brand: 'KTR Collection',
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    stockCount: 15,
    sizes: ['48', '50', '52', '54', '56'],
    colors: [
      { name: 'Lacivert', code: '#172B4D' },
      { name: 'Siyah', code: '#000000' },
    ],
    features: [
      '100% Yün',
      'İtalyan Kesim',
      'Slim Fit',
    ],
    createdAt: '2023-05-15T14:30:00Z',
  },
  {
    id: 'prod-2',
    name: 'Kadın Yazlık Çiçekli Elbise',
    description: 'Yaz aylarının vazgeçilmezi, hafif ve şık çiçek desenli elbise.',
    price: 449.99,
    images: [
      'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'kadin',
    brand: 'Modavina',
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    stockCount: 23,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Mavi', code: '#2684FF' },
      { name: 'Pembe', code: '#FF5630' },
    ],
    features: [
      '%100 Pamuk',
      'A Kesim',
      'Çiçek Desenli',
    ],
    createdAt: '2023-06-10T11:45:00Z',
  },
  {
    id: 'prod-3',
    name: 'Kablosuz Kulaklık - Gürültü Engelleyici',
    description: 'Aktif gürültü engelleme teknolojisi ile üstün ses kalitesi sunan kablosuz kulaklık.',
    price: 1599.99,
    discountPrice: 1299.99,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'elektronik',
    brand: 'SoundMax',
    rating: 4.9,
    reviewCount: 256,
    inStock: true,
    stockCount: 8,
    colors: [
      { name: 'Siyah', code: '#000000' },
      { name: 'Beyaz', code: '#FFFFFF' },
    ],
    features: [
      'Aktif Gürültü Engelleme',
      '30 Saat Pil Ömrü',
      'Bluetooth 5.2',
      'Su Geçirmez (IPX4)',
    ],
    createdAt: '2023-03-22T09:15:00Z',
  },
  {
    id: 'prod-4',
    name: 'Erkek Spor Ayakkabı',
    description: 'Günlük kullanım için ideal, konforlu ve şık spor ayakkabı.',
    price: 899.99,
    discountPrice: 749.99,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'ayakkabi',
    brand: 'SportStep',
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    stockCount: 12,
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Siyah', code: '#000000' },
      { name: 'Beyaz', code: '#FFFFFF' },
      { name: 'Kırmızı', code: '#FF0000' },
    ],
    features: [
      'Hafif Taban',
      'Nefes Alabilir Kumaş',
      'Şok Emici',
    ],
    createdAt: '2023-04-05T16:20:00Z',
  },
  {
    id: 'prod-5',
    name: 'Akıllı Saat - Fitness Takipli',
    description: 'Sağlık verilerinizi takip eden, şık tasarımlı akıllı saat.',
    price: 1299.99,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'elektronik',
    brand: 'TechLife',
    rating: 4.7,
    reviewCount: 142,
    inStock: true,
    stockCount: 20,
    colors: [
      { name: 'Siyah', code: '#000000' },
      { name: 'Gümüş', code: '#C0C0C0' },
    ],
    features: [
      'Nabız Ölçer',
      'Uyku Takibi',
      'Su Geçirmez (5 ATM)',
      '7 Gün Pil Ömrü',
    ],
    createdAt: '2023-02-18T10:40:00Z',
  },
  {
    id: 'prod-6',
    name: 'Kadın Deri Ceket',
    description: 'Yüksek kaliteli deri ile üretilmiş, modern tasarımlı kadın ceket.',
    price: 1899.99,
    discountPrice: 1599.99,
    images: [
      'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'kadin',
    brand: 'LeatherChic',
    rating: 4.8,
    reviewCount: 76,
    inStock: true,
    stockCount: 5,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Siyah', code: '#000000' },
      { name: 'Kahverengi', code: '#8B4513' },
    ],
    features: [
      'Gerçek Deri',
      'Astarlı',
      'Fermuarlı Cep',
    ],
    createdAt: '2023-01-30T13:55:00Z',
  },
  {
    id: 'prod-7',
    name: 'Erkek Casual Gömlek',
    description: 'Hem ofis hem günlük kullanım için uygun, şık ve rahat gömlek.',
    price: 379.99,
    images: [
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'erkek',
    brand: 'CasualMen',
    rating: 4.5,
    reviewCount: 112,
    inStock: true,
    stockCount: 25,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Mavi', code: '#0000FF' },
      { name: 'Beyaz', code: '#FFFFFF' },
      { name: 'Siyah', code: '#000000' },
    ],
    features: [
      '%100 Pamuk',
      'Slim Fit',
      'Uzun Kollu',
    ],
    createdAt: '2023-05-25T14:10:00Z',
  },
  {
    id: 'prod-8',
    name: 'Kadın Spor Ayakkabı',
    description: 'Koşu ve fitness için uygun, hafif ve ergonomik tasarımlı spor ayakkabı.',
    price: 799.99,
    discountPrice: 599.99,
    images: [
      'https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    category: 'ayakkabi',
    brand: 'RunFlex',
    rating: 4.6,
    reviewCount: 94,
    inStock: true,
    stockCount: 18,
    sizes: ['36', '37', '38', '39', '40'],
    colors: [
      { name: 'Pembe', code: '#FFC0CB' },
      { name: 'Gri', code: '#808080' },
      { name: 'Turkuaz', code: '#40E0D0' },
    ],
    features: [
      'Hafif Yapı',
      'Yastıklı Taban',
      'Nefes Alabilir Mesh',
    ],
    createdAt: '2023-04-12T09:30:00Z',
  },
];

// Function to get all products or filtered by category
export const fetchProducts = async (category?: string): Promise<Product[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (category) {
    return mockProducts.filter(product => product.category === category);
  }
  
  return mockProducts;
};

// Function to get a single product by ID
export const fetchProductById = async (productId: string): Promise<Product | null> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const product = mockProducts.find(p => p.id === productId);
  
  return product || null;
};

// Function to get related products
export const fetchRelatedProducts = async (productId: string, limit = 4): Promise<Product[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const product = mockProducts.find(p => p.id === productId);
  
  if (!product) {
    return [];
  }
  
  // Get products from the same category, excluding the current product
  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
  
  return relatedProducts;
};

// Search products by query
export const searchProducts = async (query: string): Promise<Product[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) {
    return [];
  }
  
  return mockProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery)
    );
  });
};