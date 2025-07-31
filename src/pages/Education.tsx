import React from 'react';
import { Book, Heart, Info, Users, Shield, AlertTriangle } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-secondary-900 mb-6">
              Education & Resources
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Learn about blood donation, safety guidelines, and discover how your contribution 
              can make a life-changing difference.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-accent-500 mb-2">1</div>
              <div className="text-secondary-600">donation can save up to 3 lives</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary-500 mb-2">56</div>
              <div className="text-secondary-600">days between donations</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-success-500 mb-2">10-12</div>
              <div className="text-secondary-600">minutes for the donation</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-warning-500 mb-2">4</div>
              <div className="text-secondary-600">main blood types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Blood Types Guide */}
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-accent-500 mr-3" />
                <h2 className="text-3xl font-light text-secondary-900">Blood Types & Compatibility</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg text-secondary-600 leading-relaxed">
                  Understanding blood types is crucial for safe transfusions. Each person has one of 
                  eight blood types, determined by the presence or absence of certain antigens.
                </p>
              </div>

              <div className="bg-secondary-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium text-secondary-900 mb-4">Blood Type Compatibility</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent-600">O-</span>
                        <span className="text-sm text-secondary-600">Universal Donor</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent-600">O+</span>
                        <span className="text-sm text-secondary-600">Most Common</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent-600">A+</span>
                        <span className="text-sm text-secondary-600">Can donate to A+, AB+</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent-600">A-</span>
                        <span className="text-sm text-secondary-600">Can donate to A+, A-, AB+, AB-</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent-600">B+</span>
                        <span className="text-sm text-secondary-600">Can donate to B+, AB+</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent-600">B-</span>
                        <span className="text-sm text-secondary-600">Can donate to B+, B-, AB+, AB-</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent-600">AB+</span>
                        <span className="text-sm text-secondary-600">Universal Receiver</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-accent-600">AB-</span>
                        <span className="text-sm text-secondary-600">Can donate to AB+, AB-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Process */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary-500 mr-3" />
                <h2 className="text-3xl font-light text-secondary-900">Donation Process</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-2">Registration & Health Check</h3>
                    <p className="text-secondary-600">
                      Complete a brief health questionnaire and undergo a mini-physical to ensure you're ready to donate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-2">Donation</h3>
                    <p className="text-secondary-600">
                      The actual blood collection takes about 10-12 minutes. You'll be comfortable and monitored throughout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-2">Recovery & Refreshments</h3>
                    <p className="text-secondary-600">
                      Rest for 10-15 minutes and enjoy refreshments while your body begins to replenish the donated blood.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-2">Follow-up Care</h3>
                    <p className="text-secondary-600">
                      Continue drinking fluids and avoid heavy lifting for 24 hours. Your body fully replenishes in 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Guidelines */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-success-500 mr-3" />
              <h2 className="text-3xl font-light text-secondary-900">Eligibility Guidelines</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-success-600 mb-4">You CAN donate if you:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Are 17 years old or older (16 with parental consent in some states)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Weigh at least 110 pounds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Are in good general health</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Haven't donated blood in the last 56 days</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Have a valid ID</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium text-accent-600 mb-4">You CANNOT donate if you:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Have cold or flu symptoms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Have taken antibiotics in the last 24 hours</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Are pregnant or have been pregnant in the last 6 weeks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Have had a tattoo or piercing in the last 3 months</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                  <span className="text-secondary-700">Have traveled to certain countries recently</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Info className="h-8 w-8 text-primary-500 mr-3" />
              <h2 className="text-3xl font-light text-secondary-900">Safety & Aftercare</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-primary-800 mb-4">Before Donation</h3>
              <ul className="space-y-2 text-primary-700">
                <li>• Eat a healthy meal</li>
                <li>• Drink plenty of fluids</li>
                <li>• Get a good night's sleep</li>
                <li>• Bring a valid ID</li>
                <li>• Wear comfortable clothing</li>
              </ul>
            </div>

            <div className="bg-success-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-success-800 mb-4">During Donation</h3>
              <ul className="space-y-2 text-success-700">
                <li>• Relax and breathe normally</li>
                <li>• Alert staff if you feel unwell</li>
                <li>• Stay hydrated</li>
                <li>• The process is quick and safe</li>
                <li>• Trained professionals monitor you</li>
              </ul>
            </div>

            <div className="bg-warning-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-warning-800 mb-4">After Donation</h3>
              <ul className="space-y-2 text-warning-700">
                <li>• Rest for 10-15 minutes</li>
                <li>• Drink extra fluids for 24 hours</li>
                <li>• Avoid heavy lifting</li>
                <li>• Keep bandage on for 4 hours</li>
                <li>• Eat iron-rich foods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-secondary-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium text-secondary-900 mb-3">How often can I donate blood?</h3>
              <p className="text-secondary-600">
                You can donate whole blood every 56 days (8 weeks). Your body needs this time to fully 
                replenish the donated blood cells.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium text-secondary-900 mb-3">Does donating blood hurt?</h3>
              <p className="text-secondary-600">
                You may feel a brief pinch when the needle is inserted, similar to getting a vaccination. 
                Most donors find the process comfortable and painless.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium text-secondary-900 mb-3">How long does the entire process take?</h3>
              <p className="text-secondary-600">
                The entire process typically takes about 45-60 minutes, including registration, health screening, 
                donation (10-12 minutes), and recovery time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium text-secondary-900 mb-3">Is blood donation safe?</h3>
              <p className="text-secondary-600">
                Yes, blood donation is very safe. All equipment is sterile and used only once. 
                Trained medical professionals oversee the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-white mr-3" />
            <h2 className="text-2xl font-medium text-white">Emergency Blood Needs</h2>
          </div>
          <p className="text-xl text-accent-100 mb-6">
            Every 2 seconds, someone in the US needs blood. Your donation can help save lives in emergency situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-accent-500 px-8 py-3 rounded-full font-medium hover:bg-accent-50 transition-colors"
            >
              Become a Donor
            </a>
            <a
              href="/blood-requests"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-accent-500 transition-colors"
            >
              Find Blood Requests
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;