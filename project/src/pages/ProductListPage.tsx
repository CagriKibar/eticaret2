import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid';
import { Product } from '../types/product';
import { fetchProducts } from '../services/productService';

const categoryNames: Record<string, string> = {
  'erkek': 'Erkek Giyim',
  'kadin': 'Kadın Giyim',
  'elektronik': 'Elektronik',
  'ayakkabi': 'Ayakkabı',
};

const ProductListPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  
  const categoryName = category ? categoryNames[category] || 'Ürünler' : 'Tüm Ürünler';
  
  useEffect(() => {
    document.title = `${categoryName} | KTR Store`;
    
    const loadProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await fetchProducts(category);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, [category, categoryName]);
  
  // Extract unique brands for filter
  const brands = [...new Set(products.map(product => product.brand))];
  
  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Filter by brand if any brands are selected
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    
    // Filter by price range
    const price = product.discountPrice || product.price;
    if (price < priceRange[0] || price > priceRange[1]) {
      return false;
    }
    
    return true;
  });
  
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };
  
  const handlePriceChange = (index: number, value: number) => {
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };
  
  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 2000]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{categoryName}</h1>
        
        <button
          className="flex items-center space-x-2 md:hidden bg-white py-2 px-4 rounded-lg border border-gray-200 shadow-sm"
          onClick={() => setFiltersVisible(!filtersVisible)}
        >
          <Filter size={18} />
          <span>Filtreler</span>
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 bg-white rounded-lg p-6 shadow-sm h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-gray-800">Filtreler</h3>
            {(selectedBrands.length > 0 || priceRange[0] > 0 || priceRange[1] < 2000) && (
              <button 
                onClick={clearFilters}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Temizle
              </button>
            )}
          </div>
          
          {/* Brand filter */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-3">Marka</h4>
            <div className="space-y-2">
              {brands.map(brand => (
                <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="rounded text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Price filter */}
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Fiyat Aralığı</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">{priceRange[0]} ₺</span>
                <span className="text-gray-600">{priceRange[1]} ₺</span>
              </div>
              <input
                type="range"
                min={0}
                max={2000}
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                className="w-full"
              />
              <input
                type="range"
                min={0}
                max={2000}
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Filters */}
        {filtersVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-800">Filtreler</h3>
                <button onClick={() => setFiltersVisible(false)}>
                  <X size={20} />
                </button>
              </div>
              
              {/* Filter content - same as desktop */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-700">Marka</h4>
                  {selectedBrands.length > 0 && (
                    <button 
                      onClick={() => setSelectedBrands([])}
                      className="text-sm text-blue-500"
                    >
                      Temizle
                    </button>
                  )}
                </div>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded text-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-700">Fiyat Aralığı</h4>
                  {(priceRange[0] > 0 || priceRange[1] < 2000) && (
                    <button 
                      onClick={() => setPriceRange([0, 2000])}
                      className="text-sm text-blue-500"
                    >
                      Sıfırla
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{priceRange[0]} ₺</span>
                    <span className="text-gray-600">{priceRange[1]} ₺</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={2000}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min={0}
                    max={2000}
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => setFiltersVisible(false)}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Filtreleri Uygula ({filteredProducts.length} Ürün)
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Products */}
        <div className="flex-1">
          {/* Sort options & active filters */}
          <div className="bg-white rounded-lg p-4 mb-6 flex flex-wrap gap-4 items-center shadow-sm">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal size={18} className="text-gray-500" />
              <span className="text-gray-700">Sırala:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm">
                Önerilen
              </button>
              <button className="px-3 py-1 rounded-full bg-white text-gray-700 text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                En Düşük Fiyat
              </button>
              <button className="px-3 py-1 rounded-full bg-white text-gray-700 text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                En Yüksek Fiyat
              </button>
              <button className="px-3 py-1 rounded-full bg-white text-gray-700 text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                En Yeni
              </button>
            </div>
            
            {/* Selected filters */}
            {selectedBrands.length > 0 && (
              <div className="ml-auto flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-500">Filtreler:</span>
                {selectedBrands.map(brand => (
                  <div key={brand} className="flex items-center bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm">
                    {brand}
                    <button 
                      onClick={() => toggleBrand(brand)}
                      className="ml-2"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product count */}
          <p className="text-gray-600 mb-4">
            {loading 
              ? 'Ürünler yükleniyor...' 
              : `${filteredProducts.length} ürün bulundu.`
            }
          </p>
          
          {/* Product grid */}
          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;