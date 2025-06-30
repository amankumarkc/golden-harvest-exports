
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Truck, Shield, Globe, Calculator, Users, Award } from "lucide-react";

const WholesalePage = () => {
  const wholesaleProducts = [
    {
      name: "Premium Almonds",
      varieties: ["Raw", "Roasted", "Blanched", "Sliced"],
      minOrder: "500kg",
      priceRange: "$8-12/kg",
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=200&fit=crop"
    },
    {
      name: "Cashew Nuts",
      varieties: ["W180", "W240", "W320", "W450"],
      minOrder: "250kg",
      priceRange: "$12-18/kg",
      image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=300&h=200&fit=crop"
    },
    {
      name: "Dates",
      varieties: ["Medjool", "Deglet Noor", "Zahidi", "Halawi"],
      minOrder: "1000kg",
      priceRange: "$4-8/kg",
      image: "https://images.unsplash.com/photo-1577408017678-634d28d2d4e7?w=300&h=200&fit=crop"
    },
    {
      name: "Walnuts",
      varieties: ["Halves", "Quarters", "Pieces", "Light Halves"],
      minOrder: "500kg",
      priceRange: "$10-15/kg",
      image: "https://images.unsplash.com/photo-1553430998-2b7b3e3bb5f5?w=300&h=200&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Volume Discounts",
      description: "Significant savings on bulk orders with tiered pricing structure"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Consistent quality with batch testing and certification"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Flexible Shipping",
      description: "Multiple shipping options including FOB, CIF, and DDP terms"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Reach",
      description: "Serving wholesalers in 25+ countries worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Wholesale Solutions</h1>
            <p className="text-xl leading-relaxed mb-8">
              Premium dry fruits in bulk quantities. Competitive pricing, reliable supply, and global shipping for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Get Wholesale Quote
                </Button>
              </Link>
              <Link to="/request-sample">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Request Samples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Wholesale Program?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied wholesale partners who trust us for their dry fruit supply needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wholesale Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium quality dry fruits available in bulk quantities with competitive wholesale pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wholesaleProducts.map((product, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.varieties.map((variety, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {variety}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Min Order:</span> {product.minOrder}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Price Range:</span> {product.priceRange}
                    </p>
                  </div>
                  <Link to="/get-quote">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Get Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Wholesale Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Tons Exported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and transparent process to become our wholesale partner.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Inquiry", description: "Send us your requirements" },
              { step: "2", title: "Quote", description: "Receive detailed pricing" },
              { step: "3", title: "Sample", description: "Test our quality" },
              { step: "4", title: "Order", description: "Place your bulk order" },
              { step: "5", title: "Delivery", description: "Receive your shipment" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Wholesale Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our network of successful wholesale partners and grow your business with premium quality dry fruits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-quote">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WholesalePage;
