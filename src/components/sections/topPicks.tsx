import Image from "next/image";

// components/TopPicks.js
export default function TopPicks() {
    const items = [
      {
        id: 1,
        name: 'Trenton modular sofa_3',
        price: 'Rs. 25,000.00',
        image: '/images/ss002_1.png', // Add relevant images
      },
      {
        id: 2,
        name: 'Granite dining table with dining chair',
        price: 'Rs. 28,500.00',
        image: '/images/ss003_1.png',
      },
      {
        id: 3,
        name: 'Outdoor bar table and stool',
        price: 'Rs. 32,000.00',
        image: '/images/ss004_1.png',
      },
      {
        id: 4,
        name: 'Plain console with teak mirror',
        price: 'Rs. 22,800.00',
        image: '/images/ss005_1.png',
      },
    ];
  
    return (
      <div className="py-12 px-4">
        <h2 className="text-4xl font-samibold text-center mb-4">Top Picks For You</h2>
        <p className="text-center text-gray-600 mb-8">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[100px]">
          {items.map((item) => (
            <div key={item.id} className="text-center">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-4 rounded-lg shadow-md"
                height={200}
                width={200}
              />
              <h3 className="text-xl font-samibold mt-8">{item.name}</h3>
              <p className="text-sm font-bold text-gray-700 mt-4">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-black text-white font-medium rounded hover:bg-gray-800">
            View More
          </button>
        </div>
      </div>
    );
  }
  