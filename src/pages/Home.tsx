import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-secondary-900 mb-6 leading-tight">
              Connecting Lives,<br />
              <span className="font-medium text-accent-500">One Donation</span><br />
              at a Time
            </h1>
            
            <p className="text-xl sm:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Join our community of life-savers. Find blood donors, request donations, 
              and help save lives with our secure, efficient platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/blood-requests"
                className="group bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Find Blood</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/register"
                className="group border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-1"
              >
                <Heart className="h-5 w-5" />
                <span>Become a Donor</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-pulse-slow">
          <Heart className="h-8 w-8 text-accent-500 opacity-20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <Heart className="h-12 w-12 text-primary-500 opacity-20" />
        </div>
        <div className="absolute top-1/2 left-20 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <Heart className="h-6 w-6 text-accent-500 opacity-20" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-secondary-900 mb-4">
              Why Choose BloodBank?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our platform makes blood donation simple, secure, and efficient for everyone involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-colors">
                <Shield className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Secure & Private</h3>
              <p className="text-secondary-600 leading-relaxed">
                Your medical information is protected with bank-level security. We prioritize your privacy above all.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-accent-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-100 transition-colors">
                <Users className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Community Driven</h3>
              <p className="text-secondary-600 leading-relaxed">
                Connect with verified donors and healthcare providers in your area. Build a network that saves lives.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-success-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-success-100 transition-colors">
                <Globe className="h-8 w-8 text-success-500" />
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Always Available</h3>
              <p className="text-secondary-600 leading-relaxed">
                24/7 access to blood requests and donor information. Emergency support when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-secondary-900 mb-4">
              Making a Real Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">10,000+</div>
              <div className="text-secondary-600">Lives Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">5,000+</div>
              <div className="text-secondary-600">Active Donors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success-500 mb-2">500+</div>
              <div className="text-secondary-600">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-warning-500 mb-2">50+</div>
              <div className="text-secondary-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-secondary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Simple steps to save lives or find the help you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Sign Up</h3>
              <p className="text-secondary-600">
                Create your account as a donor, patient, or healthcare provider. Verification is quick and secure.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Connect</h3>
              <p className="text-secondary-600">
                Post requests or browse available donors. Our matching system connects you with compatible matches.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Save Lives</h3>
              <p className="text-secondary-600">
                Coordinate donations safely with our verified network. Every donation makes a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join thousands of donors and patients who trust BloodBank to connect lives.
          </p>
          <Link
            to="/register"
            className="bg-white text-primary-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary-50 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;