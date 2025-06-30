
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Premium Nuts",
      description: "Almonds, Cashews, Walnuts, Pistachios",
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=300&fit=crop",
      link: "/products",
      category: "Premium Nuts",
      count: "8+ varieties"
    },
    {
      name: "Dried Fruits",
      description: "Dates, Apricots, Figs, Mangoes",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      link: "/products",
      category: "Dried Fruits",
      count: "12+ varieties"
    },
    {
      name: "Seeds & Kernels",
      description: "Pumpkin, Sunflower, Pine, Chia",
      image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop",
      link: "/products",
      category: "Seeds & Kernels",
      count: "6+ varieties"
    },
    {
      name: "Exotic Collection",
      description: "Goji, Dragon Fruit, Mulberries, Acai",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      link: "/products",
      category: "Exotic Collection",
      count: "5+ varieties"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600">
            Explore our extensive range of premium dry fruits, nuts, and exotic superfoods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              state={{ selectedCategory: category.category }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-gray-200 text-sm mb-2">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-300 text-xs font-medium">{category.count}</span>
                    <span className="text-white text-xs bg-white/20 px-2 py-1 rounded-full">
                      View All →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
