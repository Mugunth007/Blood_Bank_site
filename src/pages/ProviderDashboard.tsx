import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Users, Plus, Activity, Calendar, User, Bell, Settings, Building } from 'lucide-react';

const ProviderDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

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
            Healthcare Provider Portal
          </h1>
          <p className="text-lg text-secondary-600">
            Welcome, {user?.name} - Manage blood requests and donor connections
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-wrap gap-2">
            <TabButton id="overview" label="Overview" icon={Activity} />
            <TabButton id="requests" label="Manage Requests" icon={Plus} />
            <TabButton id="donors" label="Donor Database" icon={Users} />
            <TabButton id="inventory" label="Blood Inventory" icon={Building} />
            <TabButton id="schedule" label="Schedule" icon={Calendar} />
            <TabButton id="profile" label="Profile" icon={User} />
            <TabButton id="notifications" label="Notifications" icon={Bell} />
            <TabButton id="settings" label="Settings" icon={Settings} />
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Stats */}
            <div className="lg:col-span-2 space-y-6">
              {/* Key Metrics */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Active Requests</p>
                      <p className="text-2xl font-bold text-primary-500">8</p>
                    </div>
                    <Plus className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Available Donors</p>
                      <p className="text-2xl font-bold text-success-500">156</p>
                    </div>
                    <Users className="h-8 w-8 text-success-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">This Month</p>
                      <p className="text-2xl font-bold text-accent-500">23</p>
                    </div>
                    <Activity className="h-8 w-8 text-accent-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Success Rate</p>
                      <p className="text-2xl font-bold text-warning-500">94%</p>
                    </div>
                    <Building className="h-8 w-8 text-warning-500" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-success-50 rounded-lg">
                    <Users className="h-5 w-5 text-success-500" />
                    <div>
                      <p className="font-medium text-secondary-900">Match found</p>
                      <p className="text-sm text-secondary-600">O+ donor matched with emergency request</p>
                    </div>
                    <span className="text-sm text-secondary-500">30 min ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg">
                    <Plus className="h-5 w-5 text-primary-500" />
                    <div>
                      <p className="font-medium text-secondary-900">New request created</p>
                      <p className="text-sm text-secondary-600">Critical A- blood needed for surgery</p>
                    </div>
                    <span className="text-sm text-secondary-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-warning-50 rounded-lg">
                    <Activity className="h-5 w-5 text-warning-500" />
                    <div>
                      <p className="font-medium text-secondary-900">Donation completed</p>
                      <p className="text-sm text-secondary-600">B+ donation received from verified donor</p>
                    </div>
                    <span className="text-sm text-secondary-500">4 hours ago</span>
                  </div>
                </div>
              </div>

              {/* Blood Type Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Current Inventory Status</h3>
                <div className="grid grid-cols-4 gap-4">
                  {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((type) => (
                    <div key={type} className="text-center">
                      <div className="bg-accent-50 border border-accent-200 rounded-lg p-3 mb-2">
                        <div className="text-lg font-bold text-accent-600">{type}</div>
                      </div>
                      <div className="text-sm text-secondary-600">
                        {Math.floor(Math.random() * 20) + 5} units
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab('requests')}
                    className="w-full bg-primary-500 text-white p-3 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Create Request</span>
                  </button>
                  <button className="w-full border border-secondary-300 text-secondary-700 p-3 rounded-lg hover:bg-secondary-50 transition-colors">
                    Search Donors
                  </button>
                  <button className="w-full border border-secondary-300 text-secondary-700 p-3 rounded-lg hover:bg-secondary-50 transition-colors">
                    View Inventory
                  </button>
                  <button className="w-full border border-secondary-300 text-secondary-700 p-3 rounded-lg hover:bg-secondary-50 transition-colors">
                    Generate Report
                  </button>
                </div>
              </div>

              {/* Urgent Alerts */}
              <div className="bg-accent-50 border border-accent-200 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-accent-800 mb-2">Urgent Alerts</h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm font-medium text-accent-800">Low O- Inventory</p>
                    <p className="text-xs text-accent-600">Only 3 units remaining</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm font-medium text-accent-800">Critical Request</p>
                    <p className="text-xs text-accent-600">AB+ needed urgently</p>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-secondary-100 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-secondary-800 mb-2">Need Help?</h3>
                <p className="text-sm text-secondary-600 mb-4">
                  Our support team is available 24/7 to assist with urgent requests.
                </p>
                <button className="w-full bg-secondary-700 text-white p-3 rounded-lg hover:bg-secondary-800 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium text-secondary-900">Manage Blood Requests</h2>
                <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>New Request</span>
                </button>
              </div>

              {/* Request Creation Form */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-secondary-900">Create New Request</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Patient ID/Name
                    </label>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter patient identifier"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Blood Type
                      </label>
                      <select className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="">Select type</option>
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
                        className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Urgency Level
                    </label>
                    <select className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="routine">Routine</option>
                      <option value="urgent">Urgent</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Medical Reason
                    </label>
                    <textarea
                      rows={3}
                      className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Brief description of medical need"
                    />
                  </div>

                  <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                    Create Request
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-secondary-900 mb-4">Active Requests</h3>
                  <div className="space-y-3">
                    <div className="border border-secondary-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-secondary-900">Patient: John D.</p>
                          <p className="text-sm text-secondary-600">Blood Type: O+, 2 units</p>
                        </div>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                          Urgent
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-secondary-500">3 responses received</span>
                        <div className="space-x-2">
                          <button className="text-primary-500 hover:text-primary-600 text-sm">View</button>
                          <button className="text-secondary-500 hover:text-secondary-600 text-sm">Edit</button>
                          <button className="text-accent-500 hover:text-accent-600 text-sm">Close</button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-secondary-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-secondary-900">Patient: Sarah M.</p>
                          <p className="text-sm text-secondary-600">Blood Type: A-, 1 unit</p>
                        </div>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          Critical
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-secondary-500">1 response received</span>
                        <div className="space-x-2">
                          <button className="text-primary-500 hover:text-primary-600 text-sm">View</button>
                          <button className="text-secondary-500 hover:text-secondary-600 text-sm">Edit</button>
                          <button className="text-accent-500 hover:text-accent-600 text-sm">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderDashboard;