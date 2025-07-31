import React, { useState, useEffect } from 'react';
import { Search, MapPin, Droplet, Clock, Heart, Filter } from 'lucide-react';

interface BloodRequest {
  id: string;
  patientName: string;
  bloodType: string;
  urgency: 'critical' | 'urgent' | 'routine';
  location: string;
  hospital: string;
  unitsNeeded: number;
  postedAt: string;
  description: string;
  contactPhone: string;
}

const BloodRequests: React.FC = () => {
  const [requests, setRequests] = useState<BloodRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [loading, setLoading] = useState(true);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRequests([
        {
          id: '1',
          patientName: 'John D.',
          bloodType: 'O+',
          urgency: 'critical',
          location: 'Downtown',
          hospital: 'City General Hospital',
          unitsNeeded: 3,
          postedAt: '2 hours ago',
          description: 'Urgent need for surgery patient',
          contactPhone: '+1 (555) 123-4567'
        },
        {
          id: '2',
          patientName: 'Sarah M.',
          bloodType: 'A+',
          urgency: 'urgent',
          location: 'Westside',
          hospital: 'Memorial Medical Center',
          unitsNeeded: 2,
          postedAt: '4 hours ago',
          description: 'Cancer treatment requirement',
          contactPhone: '+1 (555) 234-5678'
        },
        {
          id: '3',
          patientName: 'Mike R.',
          bloodType: 'B-',
          urgency: 'routine',
          location: 'Northridge',
          hospital: 'Regional Health Center',
          unitsNeeded: 1,
          postedAt: '1 day ago',
          description: 'Scheduled procedure preparation',
          contactPhone: '+1 (555) 345-6789'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodType = !selectedBloodType || request.bloodType === selectedBloodType;
    const matchesUrgency = !selectedUrgency || request.urgency === selectedUrgency;
    
    return matchesSearch && matchesBloodType && matchesUrgency;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'urgent':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'routine':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-secondary-900 mb-4">Blood Requests</h1>
          <p className="text-lg text-secondary-600">
            Find urgent blood donation requests in your area and help save lives.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-lg font-medium text-secondary-900 mb-4 flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Search & Filter
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                <input
                  type="text"
                  placeholder="Search by name, location, hospital..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Blood Type
              </label>
              <select
                value={selectedBloodType}
                onChange={(e) => setSelectedBloodType(e.target.value)}
                className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Types</option>
                {bloodTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Urgency
              </label>
              <select
                value={selectedUrgency}
                onChange={(e) => setSelectedUrgency(e.target.value)}
                className="w-full py-3 px-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Urgencies</option>
                <option value="critical">Critical</option>
                <option value="urgent">Urgent</option>
                <option value="routine">Routine</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBloodType('');
                  setSelectedUrgency('');
                }}
                className="w-full py-3 px-4 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Request Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredRequests.length === 0 ? (
            <div className="col-span-2 text-center py-12">
              <Heart className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-secondary-900 mb-2">No requests found</h3>
              <p className="text-secondary-600">
                Try adjusting your search criteria or check back later.
              </p>
            </div>
          ) : (
            filteredRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-1">
                      Patient: {request.patientName}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {request.postedAt}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {request.location}
                      </span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getUrgencyColor(request.urgency)}`}>
                    {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-accent-50 p-3 rounded-lg text-center">
                    <Droplet className="h-6 w-6 text-accent-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-accent-600">{request.bloodType}</div>
                    <div className="text-sm text-secondary-600">Blood Type</div>
                  </div>
                  <div className="bg-primary-50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-primary-600">{request.unitsNeeded}</div>
                    <div className="text-sm text-secondary-600">Units Needed</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-secondary-900 mb-1">Hospital:</h4>
                  <p className="text-secondary-600">{request.hospital}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-secondary-900 mb-1">Description:</h4>
                  <p className="text-secondary-600">{request.description}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-secondary-100">
                  <div className="text-sm text-secondary-600">
                    Contact: {request.contactPhone}
                  </div>
                  <button className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors">
                    Respond
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Emergency Banner */}
        <div className="bg-accent-500 text-white p-6 rounded-xl mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2">Emergency Blood Needed?</h3>
              <p className="text-accent-100">
                For critical emergencies, call our 24/7 hotline or contact your nearest hospital directly.
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">911</div>
              <div className="text-sm text-accent-100">Emergency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodRequests;