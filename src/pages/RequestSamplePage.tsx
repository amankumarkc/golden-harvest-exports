
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const RequestSamplePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    businessAddress: "",
    productApplication: "",
    volume: "",
    productDescription: ""
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
    console.log("Sample request submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 py-20 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Request Sample</h1>
            <p className="text-xl leading-relaxed">
              Get premium quality samples of our finest dry fruits. Experience the difference before you buy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sample Request Form */}
            <Card className="shadow-xl">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="text-2xl text-center">Let's Talk!</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
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
                      placeholder="+1234567890"
                    />
                  </div>

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
                    <Label htmlFor="businessAddress" className="text-gray-700 font-medium">
                      Business Address *
                    </Label>
                    <Input
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="productApplication" className="text-gray-700 font-medium">
                      Product Application *
                    </Label>
                    <Input
                      id="productApplication"
                      name="productApplication"
                      value={formData.productApplication}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="e.g., Retail, Manufacturing, Export"
                    />
                  </div>

                  <div>
                    <Label htmlFor="volume" className="text-gray-700 font-medium">
                      Volume *
                    </Label>
                    <Input
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="e.g., 100kg, 1 ton, 10 tons"
                    />
                  </div>

                  <div>
                    <Label htmlFor="productDescription" className="text-gray-700 font-medium">
                      Product Description *
                    </Label>
                    <Textarea
                      id="productDescription"
                      name="productDescription"
                      value={formData.productDescription}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      rows={4}
                      placeholder="Please describe the specific dry fruits you're interested in..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  >
                    Send Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Info */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle className="text-xl">Your Secret Ingredient</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to providing you with the best product development 
                    experience possible. Our team of experts will work with you to develop a product 
                    that meets your specific needs and requirements.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Takes 7+ minutes</div>
                    <div className="text-sm text-gray-600">Quick Process</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Global Shipping</div>
                    <div className="text-sm text-gray-600">Worldwide Delivery</div>
                  </div>
                </div>
              </div>

              {/* Product Icons */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: "🥜", name: "Premium Nuts" },
                  { icon: "🍇", name: "Dried Fruits" },
                  { icon: "🌰", name: "Seeds & Kernels" },
                  { icon: "🥥", name: "Exotic Varieties" },
                  { icon: "🍯", name: "Natural Sweeteners" },
                  { icon: "🌾", name: "Organic Options" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium text-gray-700">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestSamplePage;
