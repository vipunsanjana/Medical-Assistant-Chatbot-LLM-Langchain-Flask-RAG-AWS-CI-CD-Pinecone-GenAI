import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { ApiService } from '../services/api';

export const Header: React.FC = () => {
  const [healthStatus, setHealthStatus] = useState<'healthy' | 'error'>('error');

  useEffect(() => {
    const checkHealth = async () => {
      try {
        await ApiService.healthCheck();
        setHealthStatus('healthy');
      } catch (error) {
        setHealthStatus('error');
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 30000); // every 30s
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = () =>
    healthStatus === 'healthy'
      ? <CheckCircle size={16} />
      : <AlertCircle size={16} />;

  const getStatusColor = () =>
    healthStatus === 'healthy'
      ? 'text-emerald-600 bg-emerald-100'
      : 'text-red-600 bg-red-100';

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Medical Assistant</h1>
            <p className="text-sm text-gray-600">AI-Powered Healthcare Support</p>
          </div>
        </div>

        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getStatusColor()}`}>
          {getStatusIcon()}
          <span className="text-xs font-medium">
            {healthStatus === 'healthy' ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
    </header>
  );
};
