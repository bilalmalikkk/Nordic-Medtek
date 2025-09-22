import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CsvImportTool from '../components/CsvImportTool';
import CmsApiService from '../services/cmsApi';

export default function CsvImport() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('cms_token');
    if (token) {
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      await CmsApiService.getProfile(token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('cms_token');
    } finally {
      setLoading(false);
    }
  };

  const handleImportComplete = (result) => {
    console.log('Import completed:', result);
    // Optionally redirect to products page
    // navigate('/products');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Access Required</h1>
            <p className="text-gray-600 mt-2">Please login to access the CSV import tool</p>
          </div>
          <button
            onClick={() => navigate('/admin')}
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Go to Admin Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/admin')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            ← Back to Admin
          </button>
        </div>
        
        <CsvImportTool onImportComplete={handleImportComplete} />
      </div>
    </div>
  );
}
