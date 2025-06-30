import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    color: "Black",
    price: 35,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
  },
  {
    id: 2,
    name: "Graphic Tee",
    color: "White",
    price: 30,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg"
  },
  {
    id: 3,
    name: "Pocket Tee",
    color: "Gray",
    price: 28,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg"
  },
  {
    id: 4,
    name: "Vintage Tee",
    color: "Blue",
    price: 32,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
  },
  {
    id: 5,
    name: "Oversized Hoodie",
    color: "Olive",
    price: 48,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg"
  },
  {
    id: 6,
    name: "Classic Shirt",
    color: "Sky Blue",
    price: 40,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg"
  },
  {
    id: 7,
    name: "Denim Jacket",
    color: "Indigo",
    price: 65,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg"
  },
  {
    id: 8,
    name: "Sport Shorts",
    color: "Charcoal",
    price: 25,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg"
  },
  {
    id: 9,
    name: "Linen Pants",
    color: "Beige",
    price: 38,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-01.jpg"
  },
  {
    id: 10,
    name: "Polo Shirt",
    color: "Navy",
    price: 34,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-02.jpg"
  },
  {
    id: 11,
    name: "Relaxed Fit Tee",
    color: "Brown",
    price: 33,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-03.jpg"
  },
  {
    id: 12,
    name: "Athletic Jacket",
    color: "Dark Green",
    price: 58,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-04.jpg"
  },
  {
    id: 13,
    name: "Cotton Joggers",
    color: "Ash",
    price: 42,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg"
  },
  {
    id: 14,
    name: "Zip Hoodie",
    color: "Gray Melange",
    price: 50,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg"
  },
  {
    id: 15,
    name: "Crew Neck Sweatshirt",
    color: "Peach",
    price: 46,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-03.jpg"
  },
  {
    id: 16,
    name: "Workout Tee",
    color: "Steel",
    price: 29,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-04.jpg"
  },
  {
    id: 17,
    name: "Plaid Shirt",
    color: "Red-Blue",
    price: 45,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-related-product-01.jpg"
  },
  {
    id: 18,
    name: "Chino Pants",
    color: "Khaki",
    price: 36,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-related-product-02.jpg"
  },
  {
    id: 19,
    name: "Waffle Knit Sweater",
    color: "Cream",
    price: 52,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-related-product-03.jpg"
  },
  {
    id: 20,
    name: "Long Sleeve Henley",
    color: "Dusty Green",
    price: 37,
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-related-product-04.jpg"
  }
];

function Clothes() {
  const [cartCount, setCartCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handlePayment = (method) => {
    console.log(`Ordering ${selectedProduct.name} with ${method}`);
    setCartCount((c) => c + 1);
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600180758890-6b94519a8ba4?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10 text-center">
            Clothes <span className="text-indigo-600">({cartCount})</span>
          </h2>

          {/* product grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.id} className="group bg-white p-4 rounded-lg shadow">
                <img
                  src={p.image}
                  alt={p.name}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500">{p.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${p.price}</p>
                </div>
            {/*  buy button*/}
                <button
                  onClick={() => handleBuyClick(p)}
                  className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==== Payment‑method modal ==== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Choose payment method
            </h3>
            <p className="mb-6 text-sm text-gray-600">
              {selectedProduct?.name} — ${selectedProduct?.price}
            </p>

            <div className="space-y-3">
              <button
                onClick={() => handlePayment("UPI")}
                className="w-full rounded-md border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Pay with UPI
              </button>
              <button
                onClick={() => handlePayment("Cash on Delivery")}
                className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cash on Delivery
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default Clothes;
