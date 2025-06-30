
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Globe, FileText, Truck, Shield, CheckCircle, Award } from "lucide-react";

const ExportPage = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Export Documentation",
      description: "Complete handling of all export paperwork including certificates of origin, phytosanitary certificates, and customs documentation."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality Certification",
      description: "HACCP, ISO, and organic certifications ensuring your products meet international quality standards."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Logistics Management",
      description: "End-to-end logistics including packaging, containerization, and shipping coordination."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Market Access",
      description: "Expertise in navigating different country regulations and import requirements globally."
    }
  ];

  const certifications = [
    "HACCP Certified",
    "ISO 22000",
    "Organic Certification",
    "FDA Approved",
    "EU Compliant",
    "Halal Certified",
    "Kosher Certified",
    "BRC Grade A"
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", "Italy",
    "Australia", "Japan", "South Korea", "Singapore", "UAE", "Saudi Arabia",
    "Netherlands", "Belgium", "Spain", "Sweden", "Norway", "New Zealand",
    "South Africa", "Brazil", "Mexico", "India", "Thailand", "Malaysia"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 py-20 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Export Services</h1>
            <p className="text-xl leading-relaxed mb-8">
              Your trusted partner for premium dry fruit exports. We handle everything from sourcing to delivery, ensuring smooth international trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Get Export Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                  Speak to Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Export Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end export solutions, handling every aspect of international trade so you can focus on your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products meet the highest international standards with comprehensive certifications.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-900">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Export Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined export process ensures efficient and compliant international shipments.
            </p>
          </div>
          <div className="grid md:grid-cols-6 gap-8">
            {[
              { step: "1", title: "Order Confirmation", description: "Finalize product specifications and quantities" },
              { step: "2", title: "Quality Control", description: "Rigorous testing and quality assurance" },
              { step: "3", title: "Documentation", description: "Prepare all export certificates and paperwork" },
              { step: "4", title: "Packaging", description: "Professional export-grade packaging" },
              { step: "5", title: "Shipping", description: "Coordinate with logistics partners" },
              { step: "6", title: "Delivery", description: "Track and ensure safe delivery" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Export To */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Global Reach</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              We export to over 25 countries worldwide, with expertise in diverse market requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <div key={index} className="bg-green-700 rounded-lg p-3 text-center">
                <span className="text-sm font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Years of Export Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-gray-300">Tons Exported Annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-gray-300">On-Time Delivery Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Export Services?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">15+ years of successful exports with zero quality complaints on international shipments.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Complete Compliance</h3>
                <p className="text-gray-600">Full compliance with international food safety and export regulations in all destination countries.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Network</h3>
                <p className="text-gray-600">Established relationships with logistics partners and customs brokers worldwide.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Export with Confidence?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let our export specialists handle your international trade requirements. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-quote">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Export Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExportPage;
