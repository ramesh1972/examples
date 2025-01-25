import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const userInfo = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, USA',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

function App() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-6">
        <img
          src={userInfo.avatar}
          alt={userInfo.name}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{userInfo.name}</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-3" />
              {userInfo.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-3" />
              {userInfo.phone}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-3" />
              {userInfo.location}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Overview</h3>
        <div className="grid grid-cols-3 gap-4">
          {['Projects', 'Tasks', 'Messages'].map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{Math.floor(Math.random() * 100)}</div>
              <div className="text-sm text-gray-600">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;