import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div>
      <section id="product" className="min-h-screen py-20 px-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center animate-bounce text-gray-800 mb-28">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         
          

          {/* Card 2 */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg text-center h-[500px] transition-transform duration-300 hover:scale-105">
            {/* Image that pops out */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <Image
                src="https://th.bing.com/th/id/OIP.QVON4gfL9cuF_mAQ8xXAAwHaHa?rs=1&pid=ImgDetMain"
                alt="Coffee 2"
                width={160} // Width of the image
                height={160} // Height of the image
                className="rounded-full border-4 border-white shadow-lg object-cover" // Added object-cover to maintain aspect ratio
              />
            </div>
            {/* Content below the image */}
            <h2 className="text-3xl font-semibold mt-24 mb-2">Product 2</h2>
            <p className="text-gray-600 mt-4 font-normal text-lg px-4">
              A creamy, smooth, and delightful coffee with subtle hints of chocolate and caramel. Perfect for an afternoon pick-me-up.
            </p>
          </div>
           {/* Card 2 */}
           <div className="relative bg-white p-8 rounded-lg shadow-lg text-center h-[500px] transition-transform duration-300 hover:scale-105">
            {/* Image that pops out */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <Image
                src="https://th.bing.com/th/id/OIP.bX52vTMUaO4fSjm9EBhFlgHaHa?rs=1&pid=ImgDetMain"
                alt="Coffee 2"
                width={160} // Width of the image
                height={160} // Height of the image
                className="rounded-full border-4 border-white shadow-lg object-cover" // Added object-cover to maintain aspect ratio
              />
            </div>
            {/* Content below the image */}
            <h2 className="text-3xl font-semibold mt-24 mb-2">Product 2</h2>
            <p className="text-gray-600 mt-4 font-normal text-lg px-4">
              A creamy, smooth, and delightful coffee with subtle hints of chocolate and caramel. Perfect for an afternoon pick-me-up.
            </p>
          </div>
           {/* Card 2 */}
           <div className="relative bg-white p-8 rounded-lg shadow-lg text-center h-[500px] transition-transform duration-300 hover:scale-105">
            {/* Image that pops out */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <Image
                src="https://th.bing.com/th/id/OIP.GQBOOkIGxG0X63ryifIHkAHaJi?rs=1&pid=ImgDetMain"
                alt="Coffee 2"
                width={160} // Width of the image
                height={160} // Height of the image
                className="rounded-full border-4 border-white shadow-lg object-cover" // Added object-cover to maintain aspect ratio
              />
            </div>
            {/* Content below the image */}
            <h2 className="text-3xl font-semibold mt-24 mb-2">Product 2</h2>
            <p className="text-gray-600 mt-4 font-normal text-lg px-4">
              A creamy, smooth, and delightful coffee with subtle hints of chocolate and caramel. Perfect for an afternoon pick-me-up.
            </p>
          </div>

          
        </div>

        {/* Button for more products */}
        <div className="text-center mt-10">
          <Link href="/moreproduct">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Go to More Products Page
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Product;
