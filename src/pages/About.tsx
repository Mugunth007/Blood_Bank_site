import React from 'react';
import { Heart, Users, Shield, Globe, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-secondary-900 mb-6">
              About BloodBank
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize blood donation by connecting donors, 
              patients, and healthcare providers through technology and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-secondary-900 mb-6">Our Mission</h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Every day, thousands of people need blood transfusions to survive. Yet finding 
                compatible donors quickly and efficiently remains a challenge. BloodBank bridges 
                this gap by creating a secure, Users-friendly platform that connects those who 
                need blood with those who can give it.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We believe that saving lives should be simple, accessible, and safe for everyone involved.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
                  <div className="text-secondary-600">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-500 mb-2">100%</div>
                  <div className="text-secondary-600">Verified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-500 mb-2">50+</div>
                  <div className="text-secondary-600">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning-500 mb-2">5K+</div>
                  <div className="text-secondary-600">Donors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-secondary-900 mb-4">Our Values</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Privacy First</h3>
              <p className="text-secondary-600 leading-relaxed">
                Your medical information is sacred. We use military-grade encryption and 
                strict privacy controls to protect your data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-accent-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Compassionate Care</h3>
              <p className="text-secondary-600 leading-relaxed">
                Every interaction is driven by empathy and understanding. We're here to 
                help during your most critical moments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-success-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-success-500" />
              </div>
              <h3 className="text-xl font-medium text-secondary-900 mb-4">Community Driven</h3>
              <p className="text-secondary-600 leading-relaxed">
                Our platform thrives on the generosity and support of our community members 
                who make life-saving connections possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-medium mb-4">Our Story</h3>
              <p className="text-primary-100 mb-4 leading-relaxed">
                BloodBank was founded in 2023 by a team of healthcare professionals and 
                technologists who witnessed firsthand the challenges of blood donation coordination.
              </p>
              <p className="text-primary-100 leading-relaxed">
                After seeing too many preventable delays in emergency situations, we decided 
                to create a platform that would make finding blood donors as simple as 
                ordering a ride or finding a restaurant.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-secondary-900 mb-6">Why It Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-secondary-900">Emergency Response</h4>
                    <p className="text-secondary-600">Reduce critical response time from hours to minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-accent-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-secondary-900">Global Impact</h4>
                    <p className="text-secondary-600">Connect donors across cities and regions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-success-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-secondary-900">Quality Assurance</h4>
                    <p className="text-secondary-600">Verified donors and healthcare providers only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-secondary-900 mb-4">Our Team</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to saving lives through technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className="text-lg font-medium text-secondary-900 mb-2">Dr. Sarah Chen</h3>
              <p className="text-primary-500 mb-2">Chief Medical Officer</p>
              <p className="text-sm text-secondary-600">
                15+ years in emergency medicine and blood bank management
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-accent-500" />
              </div>
              <h3 className="text-lg font-medium text-secondary-900 mb-2">Michael Rodriguez</h3>
              <p className="text-accent-500 mb-2">Chief Technology Officer</p>
              <p className="text-sm text-secondary-600">
                Former healthcare IT director with expertise in secure systems
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-success-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-success-500" />
              </div>
              <h3 className="text-lg font-medium text-secondary-900 mb-2">Emily Johnson</h3>
              <p className="text-success-500 mb-2">Head of Operations</p>
              <p className="text-sm text-secondary-600">
                Healthcare operations specialist focused on patient experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Join Our Life-Saving Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Whether you're a donor, patient, or healthcare provider, you can make a difference in someone's life today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-primary-500 px-8 py-3 rounded-full font-medium hover:bg-secondary-50 transition-colors"
            >
              Become a Donor
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-primary-500 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;