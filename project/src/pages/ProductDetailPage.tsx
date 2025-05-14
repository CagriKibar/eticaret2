import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-square w-full bg-gray-100 rounded-lg"></div>
          </div>

          {/* Product Info Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Title</h1>
            <div className="text-2xl font-semibold text-gray-900 mb-6">$99.99</div>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Product description will be loaded here based on the product ID: {productId}
              </p>
              
              <div className="mt-6">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Description
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Specifications
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Reviews
              </button>
            </nav>
          </div>
          <div className="mt-6">
            <p className="text-gray-600">
              Detailed product description and features will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;