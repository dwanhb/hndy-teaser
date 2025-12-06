import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Zap, Users, TrendingUp, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * HNDY Teaser Website - Home Page
 * Design: Bold Gradient Modernism with Asymmetric Layout
 * Color Palette: Blue (#2563EB) to Purple (#7C3AED) with Yellow (#FBBF24) accents
 * Typography: Poppins Bold for headlines, Inter for body text
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("customer");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e: React.FormEvent, userType: "customer" | "provider") => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success(`Welcome! Check your email for early access details.`);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-gray-900">HNDY</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-smooth">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-smooth">
              How It Works
            </a>
            <a href="#signup" className="text-gray-600 hover:text-gray-900 transition-smooth">
              Join Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="display-xl text-gray-900">
                  Your Handy Solution,
                  <span className="text-gradient"> On Demand</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect instantly with verified service providers. Get the job done right, every time.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:opacity-90 transition-smooth"
                  onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Early Access <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-blue-500 transition-smooth"
                >
                  View Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Verified Providers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Instant Matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">AI-Powered</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="/images/hero-customer.jpg"
                alt="Happy customer with service provider"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-lg text-gray-900 mb-4">Why Choose HNDY?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for both customers and service providers. One platform, endless possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift transition-smooth border border-gray-100">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Matching</h3>
              <p className="text-gray-600">
                AI-powered matching connects you with the perfect service provider in seconds, not hours.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift transition-smooth border border-gray-100">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Professionals</h3>
              <p className="text-gray-600">
                Every provider is thoroughly vetted and verified. Work with confidence knowing you're in safe hands.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover-lift transition-smooth border border-gray-100">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maximize Earnings</h3>
              <p className="text-gray-600">
                For providers: Complete business management tools to grow your earnings and manage your time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="display-lg text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and transparent. From request to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1", title: "Describe", description: "Tell us what you need in your own words" },
              { number: "2", title: "AI Understands", description: "Our AI rephrases and confirms your request" },
              { number: "3", title: "Get Matched", description: "Instantly connected with verified providers" },
              { number: "4", title: "Get It Done", description: "Complete the job and leave a review" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Perspective Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-lg text-gray-900 mb-4">Built for Everyone</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you need a service or want to provide one, HNDY has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Customers */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-smooth">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                <img
                  src="/images/hero-customer.jpg"
                  alt="For Customers"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-8">
                <h3 className="display-md text-gray-900 mb-4">For Customers</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Find trusted professionals instantly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">AI-powered problem understanding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Transparent pricing and ratings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Exclusive early access vouchers</span>
                  </li>
                </ul>
                <Button className="w-full gradient-primary text-white hover:opacity-90">
                  Join as Customer
                </Button>
              </div>
            </div>

            {/* For Providers */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition-smooth">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden">
                <img
                  src="/images/hero-provider.jpg"
                  alt="For Providers"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-8">
                <h3 className="display-md text-gray-900 mb-4">For Providers</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Steady stream of qualified leads</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Complete business management tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Maximize your earnings potential</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Create and manage vouchers</span>
                  </li>
                </ul>
                <Button className="w-full gradient-primary text-white hover:opacity-90">
                  Join as Provider
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Signup Section */}
      <section id="signup" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-lg text-gray-900 mb-4">Get Early Access</h2>
              <p className="text-xl text-gray-600">
                Be among the first to experience the future of service connections. Join our waitlist today.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="customer">I Need a Service</TabsTrigger>
                  <TabsTrigger value="provider">I'm a Service Provider</TabsTrigger>
                </TabsList>

                <TabsContent value="customer" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Join as a Customer</h3>
                    <p className="text-gray-600">
                      Get instant access to verified service providers and enjoy exclusive early access discounts.
                    </p>
                  </div>

                  <form onSubmit={(e) => handleSignup(e, "customer")} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary text-white hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing up..." : "Get Early Access"}
                      <Mail className="ml-2 w-4 h-4" />
                    </Button>
                  </form>

                  <p className="text-xs text-gray-500 text-center">
                    We'll send you early access details and exclusive customer vouchers.
                  </p>
                </TabsContent>

                <TabsContent value="provider" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Join as a Service Provider</h3>
                    <p className="text-gray-600">
                      Access a steady stream of qualified leads and manage your business with our complete platform.
                    </p>
                  </div>

                  <form onSubmit={(e) => handleSignup(e, "provider")} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary text-white hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing up..." : "Get Early Access"}
                      <Mail className="ml-2 w-4 h-4" />
                    </Button>
                  </form>

                  <p className="text-xs text-gray-500 text-center">
                    We'll help you set up your provider account and get your first leads.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-white font-bold">HNDY</span>
              </div>
              <p className="text-sm">
                Connecting customers with verified service providers instantly.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-smooth">For Customers</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">For Providers</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-smooth">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 HNDY. All rights reserved. Your handy solution, on demand.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
