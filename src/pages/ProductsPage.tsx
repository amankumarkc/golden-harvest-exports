
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Search, Filter, Grid, List, Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "Premium California Almonds",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      category: "Nuts",
      badge: "Best Seller",
      description: "Premium grade California almonds, rich in nutrients and perfect for snacking."
    },
    {
      id: 2,
      name: "Organic Medjool Dates",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      category: "Dried Fruits",
      badge: "Organic",
      description: "Soft, sweet, and naturally organic Medjool dates from premium orchards."
    },
    {
      id: 3,
      name: "Cashew Nuts W240",
      price: 32.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      category: "Nuts",
      badge: "Premium",
      description: "Grade W240 cashews, perfectly roasted and salted for optimal taste."
    },
    // Add more products...
  ];

  const categories = ["All", "Nuts", "Dried Fruits", "Seeds", "Exotic"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Premium Dry Fruits</h1>
          <p className="text-gray-600">Discover our extensive collection of premium quality dry fruits and nuts</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-600 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Min" type="number" />
                    <span>-</span>
                    <Input placeholder="Max" type="number" />
                  </div>
                  <Button variant="outline" className="w-full">Apply</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <div className="flex items-center">
                        <div className="flex text-amber-400 mr-2">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Showing {products.length} products</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>

                <div className="flex border border-gray-300 rounded-md">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-amber-100 text-amber-600" : "text-gray-600"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-amber-100 text-amber-600" : "text-gray-600"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === "grid" 
              ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-6"
            }>
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className={viewMode === "grid" ? "p-0" : "p-6"}>
                    <div className={viewMode === "grid" ? "space-y-4" : "flex space-x-6"}>
                      <div className={`relative overflow-hidden ${viewMode === "grid" ? "rounded-t-lg" : "w-48 h-48 rounded-lg flex-shrink-0"}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                            viewMode === "grid" ? "h-64" : "h-full"
                          }`}
                        />
                        <Badge className="absolute top-3 left-3 bg-amber-500">
                          {product.badge}
                        </Badge>
                      </div>

                      <div className={viewMode === "grid" ? "p-6" : "flex-1 space-y-4"}>
                        <div className="flex items-center mb-2">
                          <div className="flex text-amber-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-600 text-sm">({product.reviews})</span>
                        </div>

                        <Link to={`/products/${product.id}`}>
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                            {product.name}
                          </h3>
                        </Link>

                        {viewMode === "list" && (
                          <p className="text-gray-600 text-sm">{product.description}</p>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                            <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                          </div>
                          
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline">Previous</Button>
                <Button variant="outline" className="bg-amber-500 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
