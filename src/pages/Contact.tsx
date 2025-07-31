import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      urgency: 'normal'
    });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-secondary-900 mb-6">
              Contact & Support
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help with your questions, concerns, or urgent blood donation needs. 
              Reach out to our dedicated support team anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-accent-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <Heart className="h-6 w-6" />
            <p className="text-lg font-medium">
              For life-threatening emergencies requiring immediate blood, call 911 or contact your nearest hospital directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-secondary-900 mb-8">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full py-3 px-4 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full py-3 px-4 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => updateFormData('subject', e.target.value)}
                    className="w-full py-3 px-4 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-secondary-700 mb-2">
                    Priority Level
                  </label>
                  <select
                    id="urgency"
                    value={formData.urgency}
                    onChange={(e) => updateFormData('urgency', e.target.value)}
                    className="w-full py-3 px-4 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="normal">Normal - General inquiry</option>
                    <option value="urgent">Urgent - Need quick response</option>
                    <option value="critical">Critical - Emergency support needed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    className="w-full py-3 px-4 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Please provide details about your inquiry or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-secondary-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary-900 mb-2">24/7 Support Hotline</h3>
                      <p className="text-secondary-600 mb-1">Emergency and urgent requests</p>
                      <a href="tel:+1-800-BLOOD-NOW" className="text-primary-500 hover:text-primary-600 font-medium">
                        +1 (800) BLOOD-NOW
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-success-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-success-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary-900 mb-2">Email Support</h3>
                      <p className="text-secondary-600 mb-1">General inquiries and feedback</p>
                      <a href="mailto:support@bloodbank.com" className="text-primary-500 hover:text-primary-600 font-medium">
                        support@bloodbank.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary-900 mb-2">Office Location</h3>
                      <p className="text-secondary-600">
                        123 Health Avenue<br />
                        Medical District<br />
                        Your City, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-warning-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-warning-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary-900 mb-2">Support Hours</h3>
                      <div className="text-secondary-600">
                        <p>Emergency Support: 24/7</p>
                        <p>General Support: Mon-Fri 8AM-8PM</p>
                        <p>Weekend Support: Sat-Sun 9AM-5PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Times */}
                <div className="bg-secondary-50 p-6 rounded-xl">
                  <h3 className="text-lg font-medium text-secondary-900 mb-4">Response Times</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Critical/Emergency</span>
                      <span className="bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-sm font-medium">
                        Immediate
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Urgent Inquiries</span>
                      <span className="bg-warning-100 text-warning-800 px-2 py-1 rounded-full text-sm font-medium">
                        Within 2 hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">General Questions</span>
                      <span className="bg-success-100 text-success-800 px-2 py-1 rounded-full text-sm font-medium">
                        Within 24 hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-primary-50 border border-primary-200 p-6 rounded-xl">
                  <h3 className="text-lg font-medium text-primary-800 mb-2">Common Questions?</h3>
                  <p className="text-primary-700 mb-4">
                    Check our comprehensive FAQ section for quick answers to frequently asked questions.
                  </p>
                  <a
                    href="/education"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Visit Education & Resources
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Support Centers */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-secondary-900 mb-4">Regional Support Centers</h2>
            <p className="text-xl text-secondary-600">
              Find local support in major metropolitan areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-medium text-secondary-900 mb-2">East Coast</h3>
              <p className="text-secondary-600 mb-3">New York, Boston, Philadelphia</p>
              <p className="text-primary-500 font-medium">+1 (800) 123-EAST</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-medium text-secondary-900 mb-2">Central Region</h3>
              <p className="text-secondary-600 mb-3">Chicago, Dallas, Atlanta</p>
              <p className="text-primary-500 font-medium">+1 (800) 123-CENT</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-medium text-secondary-900 mb-2">West Coast</h3>
              <p className="text-secondary-600 mb-3">Los Angeles, San Francisco, Seattle</p>
              <p className="text-primary-500 font-medium">+1 (800) 123-WEST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;