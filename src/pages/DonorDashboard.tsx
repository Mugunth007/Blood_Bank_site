import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Calendar, MapPin, Droplet, User, Bell, Settings, Award } from 'lucide-react';

const DonorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const donationHistory = [
    {
      id: '1',
      date: '2024-01-15',
      location: 'City General Hospital',
      recipient: 'Emergency Surgery Patient',
      units: 1,
      status: 'completed'
    },
    {
      id: '2',
      date: '2023-11-20',
      location: 'Memorial Medical Center',
      recipient: 'Cancer Treatment Patient',
      units: 1,
      status: 'completed'
    }
  ];

  const availableRequests = [
    {
      id: '1',
      patientName: 'Sarah M.',
      bloodType: 'O+',
      urgency: 'urgent',
      location: 'Downtown',
      hospital: 'City General Hospital',
      distance: '2.3 miles',
      postedAt: '2 hours ago'
    },
    {
      id: '2',
      patientName: 'Mike R.',
      bloodType: 'O+',
      urgency: 'routine',
      location: 'Westside',
      hospital: 'Regional Health Center',
      distance: '5.7 miles',
      postedAt: '1 day ago'
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
          <p className="text-lg text-secondary-600">Your donations make a difference every day</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-wrap gap-2">
            <TabButton id="overview" label="Overview" icon={Heart} />
            <TabButton id="requests" label="Available Requests" icon={MapPin} />
            <TabButton id="history" label="Donation History" icon={Calendar} />
            <TabButton id="profile" label="Profile" icon={User} />
            <TabButton id="notifications" label="Notifications" icon={Bell} />
            <TabButton id="settings" label="Settings" icon={Settings} />
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Stats and Recent Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Total Donations</p>
                      <p className="text-2xl font-bold text-primary-500">12</p>
                    </div>
                    <Heart className="h-8 w-8 text-primary-500" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Lives Saved</p>
                      <p className="text-2xl font-bold text-success-500">36</p>
                    </div>
                    <Award className="h-8 w-8 text-success-500" />
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
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-secondary-600">Next Eligible</p>
                      <p className="text-lg font-bold text-warning-500">Available</p>
                    </div>
                    <Calendar className="h-8 w-8 text-warning-500" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-success-50 rounded-lg">
                    <Heart className="h-5 w-5 text-success-500" />
                    <div>
                      <p className="font-medium text-secondary-900">Donation completed</p>
                      <p className="text-sm text-secondary-600">You donated at City General Hospital</p>
                    </div>
                    <span className="text-sm text-secondary-500">2 weeks ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-500" />
                    <div>
                      <p className="font-medium text-secondary-900">New request nearby</p>
                      <p className="text-sm text-secondary-600">O+ blood needed at Memorial Medical</p>
                    </div>
                    <span className="text-sm text-secondary-500">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Eligibility Status */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Donation Status</h3>
                <div className="text-center">
                  <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-success-500" />
                  </div>
                  <p className="text-lg font-medium text-success-600 mb-2">Ready to Donate</p>
                  <p className="text-sm text-secondary-600 mb-4">
                    You're eligible to make your next donation
                  </p>
                  <button className="w-full bg-success-500 text-white p-3 rounded-lg hover:bg-success-600 transition-colors">
                    Find Requests
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab('requests')}
                    className="w-full bg-primary-500 text-white p-3 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    View Requests
                  </button>
                  <button className="w-full border border-secondary-300 text-secondary-700 p-3 rounded-lg hover:bg-secondary-50 transition-colors">
                    Schedule Donation
                  </button>
                  <button className="w-full border border-secondary-300 text-secondary-700 p-3 rounded-lg hover:bg-secondary-50 transition-colors">
                    Update Availability
                  </button>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="bg-gradient-to-br from-warning-50 to-warning-100 p-6 rounded-xl border border-warning-200">
                <div className="text-center">
                  <Award className="h-12 w-12 text-warning-500 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-warning-800 mb-2">Life Saver</h3>
                  <p className="text-sm text-warning-700">
                    You've saved 36 lives through your generous donations!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium text-secondary-900">Available Blood Requests</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-secondary-600">Compatible with your blood type</span>
                  <span className="bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-sm font-medium">
                    {user?.bloodType || 'O+'}
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {availableRequests.map((request) => (
                  <div key={request.id} className="border border-secondary-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-secondary-900 mb-1">
                          Patient: {request.patientName}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-secondary-600">
                          <MapPin className="h-4 w-4" />
                          <span>{request.hospital}</span>
                          <span>•</span>
                          <span>{request.distance}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-sm font-medium">
                          {request.bloodType}
                        </span>
                        <p className="text-xs text-secondary-500 mt-1">{request.postedAt}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                        request.urgency === 'urgent' 
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {request.urgency}
                      </span>
                      <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                        Respond
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-medium text-secondary-900 mb-4">Donation History</h2>
              
              <div className="space-y-4">
                {donationHistory.map((donation) => (
                  <div key={donation.id} className="border-l-4 border-success-500 bg-success-50 p-4 rounded-r-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-secondary-900 mb-1">
                          {donation.location}
                        </h3>
                        <p className="text-secondary-600 mb-2">
                          Recipient: {donation.recipient}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-secondary-600">
                          <span>{new Date(donation.date).toLocaleDateString()}</span>
                          <span>{donation.units} unit{donation.units > 1 ? 's' : ''}</span>
                          <span className="capitalize">{donation.status}</span>
                        </div>
                      </div>
                      <Heart className="h-6 w-6 text-success-500" />
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

export default DonorDashboard;