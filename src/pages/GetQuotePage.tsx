
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calculator, Truck, Shield, Globe } from "lucide-react";

const GetQuotePage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    products: "",
    quantity: "",
    deliveryLocation: "",
    additionalRequirements: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 py-20 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get a Quote</h1>
            <p className="text-xl leading-relaxed">
              Request a custom quote for bulk orders and wholesale purchases. Professional pricing for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quote Request Form */}
            <Card className="shadow-xl">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-2xl text-center">Request Custom Quote</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="companyName" className="text-gray-700 font-medium">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactPerson" className="text-gray-700 font-medium">
                      Contact Person *
                    </Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country" className="text-gray-700 font-medium">
                      Country *
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="products" className="text-gray-700 font-medium">
                      Products Required *
                    </Label>
                    <Textarea
                      id="products"
                      name="products"
                      value={formData.products}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      rows={3}
                      placeholder="List the dry fruits and quantities you need..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="quantity" className="text-gray-700 font-medium">
                      Total Quantity *
                    </Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="e.g., 5 tons, 10,000 kg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="deliveryLocation" className="text-gray-700 font-medium">
                      Delivery Location *
                    </Label>
                    <Input
                      id="deliveryLocation"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Port/City, Country"
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalRequirements" className="text-gray-700 font-medium">
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      className="mt-2"
                      rows={3}
                      placeholder="Packaging requirements, certifications needed, delivery timeline..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    Get Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quote Benefits */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="text-xl">Why Choose Our Quotes?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calculator className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                        <p className="text-gray-600">Best wholesale prices with volume discounts</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Truck className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Global Shipping</h4>
                        <p className="text-gray-600">Worldwide delivery with full documentation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Quality Guaranteed</h4>
                        <p className="text-gray-600">Premium grade with quality certifications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Export Expertise</h4>
                        <p className="text-gray-600">15+ years of international trade experience</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quote Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span className="text-gray-700">Submit your requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span className="text-gray-700">Receive detailed quote within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span className="text-gray-700">Negotiate terms and finalize order</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span className="text-gray-700">Production and quality control</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      <span className="text-gray-700">Shipment and delivery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuotePage;
