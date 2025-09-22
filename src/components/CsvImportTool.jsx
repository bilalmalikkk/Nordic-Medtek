import { useState } from 'react';
import CmsApiService from '../services/cmsApi';

export default function CsvImportTool({ onImportComplete }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
      setError(null);
      setResult(null);
    } else {
      setError('Please select a valid CSV file');
    }
  };

  const handleImport = async () => {
    if (!file) {
      setError('Please select a CSV file first');
      return;
    }

    const token = localStorage.getItem('cms_token');
    if (!token) {
      setError('Please login first');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await CmsApiService.importProducts(file, token);
      setResult(response);
      
      if (onImportComplete) {
        onImportComplete(response);
      }
    } catch (error) {
      setError(`Import failed: ${error.message}`);
      console.error('Import error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">CSV Import Tool</h2>
      
      <div className="space-y-6">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select CSV File
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
              id="csv-file"
            />
            <label htmlFor="csv-file" className="cursor-pointer">
              <div className="text-4xl mb-2">📁</div>
              <p className="text-lg font-medium text-gray-900">
                {file ? file.name : 'Click to select CSV file'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Upload your Product+Collection.csv file
              </p>
            </label>
          </div>
        </div>

        {/* Import Button */}
        {file && (
          <button
            onClick={handleImport}
            disabled={loading}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Importing...
              </div>
            ) : (
              'Import Products'
            )}
          </button>
        )}

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Result Display */}
        {result && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            <h3 className="font-semibold mb-2">Import Completed Successfully!</h3>
            <div className="text-sm space-y-1">
              <p><strong>Total processed:</strong> {result.summary.total}</p>
              <p><strong>Successfully imported:</strong> {result.summary.successful}</p>
              <p><strong>Skipped (already exists):</strong> {result.summary.skipped}</p>
              {result.summary.failed > 0 && (
                <p><strong>Failed:</strong> {result.summary.failed}</p>
              )}
            </div>
            
            {result.errors && result.errors.length > 0 && (
              <div className="mt-3">
                <p className="font-semibold">Errors:</p>
                <ul className="text-xs mt-1 space-y-1">
                  {result.errors.slice(0, 5).map((error, index) => (
                    <li key={index}>• {error.item_number}: {error.error}</li>
                  ))}
                  {result.errors.length > 5 && (
                    <li>... and {result.errors.length - 5} more errors</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">CSV Format Instructions</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>Your CSV should include these columns:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li><strong>Title</strong> - Product title</li>
              <li><strong>Product name</strong> - Product name</li>
              <li><strong>Item No:</strong> - Unique item number</li>
              <li><strong>Technical data</strong> - Product description</li>
              <li><strong>Rich Text</strong> - HTML description (optional)</li>
              <li><strong>Image</strong> - Image URL (optional)</li>
              <li><strong>PDF file</strong> - PDF URL (optional)</li>
              <li><strong>Status</strong> - PUBLISHED/DRAFT</li>
              <li><strong>Sorting</strong> - Sort order number</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
