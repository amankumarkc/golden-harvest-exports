
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-gray-100">
          <div className="text-gray-600">
            Premium Quality • Global Export • Est. 2008
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-600">Support: +1-234-567-8900</span>
            <span className="text-gray-600">|</span>
            <Link to="/auth" className="text-amber-600 hover:text-amber-700">
              Sign In
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GH</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Golden Harvest</h1>
              <p className="text-xs text-amber-600 -mt-1">EXPORTS</p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                placeholder="Search premium dry fruits..."
                className="pl-10 pr-4 py-2 w-full border-amber-200 focus:border-amber-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="hover:bg-amber-50">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-amber-50">
                <User className="w-5 h-5" />
              </Button>
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 py-4 border-t border-gray-100">
          <Link to="/products" className="text-gray-700 hover:text-amber-600 font-medium">
            All Products
          </Link>
          <Link to="/products?category=nuts" className="text-gray-700 hover:text-amber-600 font-medium">
            Premium Nuts
          </Link>
          <Link to="/products?category=dried-fruits" className="text-gray-700 hover:text-amber-600 font-medium">
            Dried Fruits
          </Link>
          <Link to="/products?category=seeds" className="text-gray-700 hover:text-amber-600 font-medium">
            Seeds & Kernels
          </Link>
          <Link to="/wholesale" className="text-gray-700 hover:text-amber-600 font-medium">
            Wholesale
          </Link>
          <Link to="/export" className="text-gray-700 hover:text-amber-600 font-medium">
            Export Services
          </Link>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Input placeholder="Search..." className="mb-4" />
              <Link to="/products" className="text-gray-700 hover:text-amber-600 font-medium">
                All Products
              </Link>
              <Link to="/products?category=nuts" className="text-gray-700 hover:text-amber-600 font-medium">
                Premium Nuts
              </Link>
              <Link to="/products?category=dried-fruits" className="text-gray-700 hover:text-amber-600 font-medium">
                Dried Fruits
              </Link>
              <Link to="/auth" className="text-amber-600 font-medium">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
