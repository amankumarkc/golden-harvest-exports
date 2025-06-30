
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Golden Harvest</h1>
                <p className="text-xs text-amber-400 -mt-1">EXPORTS</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium quality dry fruits and nuts sourced globally. Your trusted partner for wholesale and export since 2008.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/products" className="block text-gray-300 hover:text-white transition-colors">
                All Products
              </Link>
              <Link to="/wholesale" className="block text-gray-300 hover:text-white transition-colors">
                Wholesale
              </Link>
              <Link to="/export" className="block text-gray-300 hover:text-white transition-colors">
                Export Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6">Categories</h3>
            <div className="space-y-3">
              <Link to="/products?category=almonds" className="block text-gray-300 hover:text-white transition-colors">
                Almonds
              </Link>
              <Link to="/products?category=cashews" className="block text-gray-300 hover:text-white transition-colors">
                Cashews
              </Link>
              <Link to="/products?category=dates" className="block text-gray-300 hover:text-white transition-colors">
                Dates
              </Link>
              <Link to="/products?category=walnuts" className="block text-gray-300 hover:text-white transition-colors">
                Walnuts
              </Link>
              <Link to="/products?category=dried-fruits" className="block text-gray-300 hover:text-white transition-colors">
                Dried Fruits
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">123 Export Street, Trade City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">+1-234-567-8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">info@goldenharvestexports.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Golden Harvest Exports. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-gray-400 hover:text-white text-sm transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
