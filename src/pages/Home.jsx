import axios from '../utils/axios'
import { useEffect, useState } from 'react';
import { StarIcon } from 'lucide-react';

const Home = () => {
  const [productdata, setProductdata] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProductdata(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className="w-full min-h-screen py-10 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">Featured Products</h1>

      {productdata.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {productdata.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer border border-gray-700 hover:border-blue-500/50"
              >
                {/* Image Container */}
                <div className="h-64 w-full bg-white p-6 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 left-4 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-sm">
                    {product.category}
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-tight">
                    {product.title}
                  </h2>

                  <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Price & Rating Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700 text-white">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 uppercase font-semibold">Price</span>
                      <span className="text-2xl font-black text-green-400">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-400 uppercase font-semibold">Rating</span>
                      <div className="flex items-center gap-1 bg-gray-700/50 px-2 py-1 rounded-lg">
                        <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-sm">{product.rating.rate}</span>
                        <span className="text-xs text-gray-400 ml-1">({product.rating.count})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Home
