import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Fitness Gloves",
    price: "$25",
    image: "/products/gloves.avif",
    badge: "Premium",
  },
  {
    id: 2,
    name: "Yoga Mat",
    price: "$40",
    image: "/products/yoga-mat.jpg",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Protein Shaker",
    price: "$15",
    image: "/products/shaker.jpg",
    badge: "Essential",
  },
  {
    id: 4,
    name: "Resistance Bands",
    price: "$20",
    image: "/products/bands.jpg",
    badge: "Trending",
  },
];

export default function Shop() {
  return (
    <section
      id="shop"
      className="px-6 py-24 xl:px-28 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Coming Soon
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-dynapuff text-primary mb-4 tracking-tight">
            Shop Products
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore premium fitness gear crafted for performance and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 
              hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 
              hover:-translate-y-2 transition-all duration-500 ease-out"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <div
                className="absolute -top-2 -right-2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              >
                {product.badge}
              </div>

              {/* Image Container */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gray-900/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2" />
                    Soon
                  </div>
                </div>

                {/* Button */}
                <button
                  className="w-full mt-4 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 text-gray-300 py-3 rounded-2xl font-medium hover:border-primary/50 hover:text-white transition-all duration-300 cursor-not-allowed relative overflow-hidden group/btn"
                  disabled
                >
                  <span className="relative z-10">Notify Me</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"
                  />
                </button>
              </div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 text-gray-400">
            <span>Get notified when products launch</span>
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
