import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Plus, Clock, MapPin, Droplet, User, Bell, Settings } from 'lucide-react';

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const myRequests = [
    {
      id: '1',
      bloodType: 'O+',
      urgency: 'urgent',
      location: 'Downtown',
      hospital: 'City General Hospital',
      unitsNeeded: 2,
      postedAt: '3 hours ago',
      status: 'active',
      responses: 3
    }
  ];

  const TabButton = ({ id, label, icon: Icon }: { id: string; label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-primary-500 text-white'
          : 'text-secondary-600 hover:bg-secondary-100'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-secondary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-secondary-900 mb-2">
            Welcome back, {user?.name}
          </h1>
          <p className="text-lg text-secondary-600">Manage your blood requests and profile</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-wrap gap-2">
            <TabButton id="overview" label="Overview" icon={Heart} />
            <TabButton id="requests" label="My Requests" icon={Clock} />
            <TabButton id="new-request" label="New Request" icon={Plus} />
            <TabButton id="profile" label="Profile" icon={User} />
            <TabButton id="notifications" label="Notifications" icon={Bell} />
            <TabButton id="settings" label="Settings" icon={Settings} />
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Active Requests</p>
                      <p className="text-2xl font-bold text-primary-500">1</p>
                    </div>
                    <Clock className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Total Responses</p>
                      <p className="text-2xl font-bold text-success-500">3</p>
                    </div>
                    <Heart className="h-8 w-8 text-success-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Blood Type</p>
                      <p className="text-2xl font-bold text-accent-500">{user?.bloodType || 'O+'}</p>
                    </div>
                    <Droplet className="h-8 w-8 text-accent-500" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg">
                    <Heart className="h-5 w-5 text-primary-500" />
                    <div>
                      <p className="font-medium text-secondary-900">New donor response</p>
                      <p className="text-sm text-secondary-600">John D. responded to your O+ request</p>
                    </div>
                    <span className="text-sm text-secondary-500">2h ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-success-50 rounded-lg">
                    <Plus className="h-5 w-5 text-success-500" />
                    <div>
                      <p className="font-medium text-secondary-900">Request posted</p>
                      <p className="text-sm text-secondary-600">Your urgent O+ request is now live</p>
                    </div>
                    <span className="text-sm text-secondary-500">3h ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab('new-request')}
                    className="w-full bg-primary-500 text-white p-3 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Create New Request</span>
                  </button>
                  <button className="w-full border border-secondary-300 text-secondary-700 p-3 rounded-lg hover:bg-secondary-50 transition-colors">
                    View All Requests
                  </button>
                  <button className="w-full border border-secondary-300 text-secondary-700 p-3 rounded-lg hover:bg-secondary-50 transition-colors">
                    Update Profile
                  </button>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-accent-50 border border-accent-200 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-accent-800 mb-2">Emergency Support</h3>
                <p className="text-sm text-accent-700 mb-4">
                  Need immediate assistance? Our 24/7 support team is here to help.
                </p>
                <button className="w-full bg-accent-500 text-white p-3 rounded-lg hover:bg-accent-600 transition-colors">
                  Call Support
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'new-request' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-light text-secondary-900 mb-6">Create Blood Request</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Blood Type Needed
                    </label>
                    <select className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Units Needed
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Number of units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <label className="flex items-center p-3 border border-secondary-300 rounded-lg cursor-pointer hover:bg-secondary-50">
                      <input type="radio" name="urgency" value="routine" className="mr-2" />
                      <span>Routine</span>
                    </label>
                    <label className="flex items-center p-3 border border-secondary-300 rounded-lg cursor-pointer hover:bg-secondary-50">
                      <input type="radio" name="urgency" value="urgent" className="mr-2" />
                      <span>Urgent</span>
                    </label>
                    <label className="flex items-center p-3 border border-secondary-300 rounded-lg cursor-pointer hover:bg-secondary-50">
                      <input type="radio" name="urgency" value="critical" className="mr-2" />
                      <span>Critical</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Hospital/Medical Facility
                  </label>
                  <input
                    type="text"
                    className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter hospital name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="City or area"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Any additional information that might help donors..."
                  ></textarea>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Post Request
                  </button>
                  <button
                    type="button"
                    className="flex-1 border border-secondary-300 text-secondary-700 py-3 px-4 rounded-lg hover:bg-secondary-50 transition-colors"
                  >
                    Save as Draft
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-medium text-secondary-900 mb-4">My Blood Requests</h2>
              
              <div className="space-y-4">
                {myRequests.map((request) => (
                  <div key={request.id} className="border border-secondary-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-sm font-medium">
                            {request.bloodType}
                          </span>
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-medium">
                            {request.urgency}
                          </span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                            {request.status}
                          </span>
                        </div>
                        <p className="text-secondary-600 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {request.hospital}, {request.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-secondary-500">{request.postedAt}</p>
                        <p className="text-lg font-bold text-primary-500">{request.responses} responses</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">{request.unitsNeeded} units needed</span>
                      <div className="space-x-2">
                        <button className="text-primary-500 hover:text-primary-600 transition-colors">
                          View Responses
                        </button>
                        <button className="text-secondary-500 hover:text-secondary-600 transition-colors">
                          Edit
                        </button>
                        <button className="text-accent-500 hover:text-accent-600 transition-colors">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;