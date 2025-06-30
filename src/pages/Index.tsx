
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search, Star, Truck, Shield, Globe, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoryGrid from "@/components/home/CategoryGrid";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <Hero />
      
      {/* Sample Request Highlight Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Try Before You Buy</h2>
            <p className="text-xl mb-8 text-green-100">
              Experience the premium quality of our dry fruits with our sample program. 
              Perfect for businesses looking to test our products before placing bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-sample">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Request Free Samples
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/get-quote">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                  Get Bulk Quote
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-green-200 text-sm">
                ✓ Free samples for qualified businesses • ✓ 7+ minutes to complete • ✓ Global shipping available
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <CategoryGrid />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Shipping</h3>
              <p className="text-gray-600">Premium dry fruits delivered worldwide with export documentation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Certified organic and premium grade dry fruits from trusted sources</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Export Specialists</h3>
              <p className="text-gray-600">15+ years of experience in international dry fruit trade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're looking for samples, bulk orders, or export services, we have solutions for your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Request Samples</h3>
              <p className="text-gray-600 mb-6">
                Get free samples to test our premium quality before placing your order.
              </p>
              <Link to="/request-sample">
                <Button className="bg-green-600 hover:bg-green-700 w-full">
                  Get Samples
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Get Quote</h3>
              <p className="text-gray-600 mb-6">
                Request competitive pricing for bulk orders and wholesale purchases.
              </p>
              <Link to="/get-quote">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Get Quote
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Export Services</h3>
              <p className="text-gray-600 mb-6">
                Complete export solutions with documentation and global shipping.
              </p>
              <Link to="/export">
                <Button className="bg-amber-600 hover:bg-amber-700 w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
