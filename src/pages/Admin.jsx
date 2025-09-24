import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CmsApiService, { API_BASE_URL } from '../services/cmsApi';

export default function Admin() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('products');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  // Login form state
  const [loginForm, setLoginForm] = useState({
    username: 'admin',
    password: 'admin123'
  });

  // Product form state
  const [productForm, setProductForm] = useState({
    title: '',
    product_name: '',
    item_number: '',
    technical_data: '',
    rich_text_description: '',
    image_url: '',
    pdf_url: '',
    category_id: '',
    status: 'PUBLISHED',
    is_featured: false,
    sorting: 0
  });

  // Image upload state
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('cms_token');
    if (token) {
      verifyToken(token);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await CmsApiService.getProfile(token);
      setIsAuthenticated(true);
      setUser(response.user);
      loadData(token);
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('cms_token');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await CmsApiService.login(loginForm.username, loginForm.password);
      localStorage.setItem('cms_token', response.token);
      setIsAuthenticated(true);
      setUser(response.user);
      loadData(response.token);
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('cms_token');
    setIsAuthenticated(false);
    setUser(null);
    setProducts([]);
    setCategories([]);
    setEditingProduct(null);
  };

  const loadData = async (token) => {
    try {
      console.log('Loading data with token:', !!token);
      setError(null);
      
      const [productsResponse, categoriesResponse] = await Promise.all([
        CmsApiService.getProducts({ status: 'PUBLISHED' }),
        CmsApiService.getCategories()
      ]);
      
      console.log('Products loaded:', productsResponse.products?.length || 0);
      console.log('Products data:', productsResponse.products);
      
      // Direct state update
      setProducts(productsResponse.products || []);
      setCategories(categoriesResponse.categories || []);
      
    } catch (error) {
      console.error('Failed to load data:', error);
      setError('Failed to load data: ' + error.message);
    }
  };

  // Alternative refresh function
  const forceRefresh = async () => {
    const token = localStorage.getItem('cms_token');
    setProducts([]); // Clear immediately
    await loadData(token);
  };

  const resetProductForm = () => {
    setProductForm({
      title: '',
      product_name: '',
      item_number: '',
      technical_data: '',
      rich_text_description: '',
      image_url: '',
      pdf_url: '',
      category_id: '',
      status: 'PUBLISHED',
      is_featured: false,
      sorting: 0
    });
    setEditingProduct(null);
    setSelectedImage(null);
  };

  const handleImageUpload = async (file) => {
    if (!file) return;
    
    const token = localStorage.getItem('cms_token');
    setUploadingImage(true);
    
    try {
      const response = await CmsApiService.uploadFile(file, token);
      const absoluteUrl = response.media.url.startsWith('http')
        ? response.media.url
        : `${API_BASE_URL}${response.media.url}`;
      setProductForm({...productForm, image_url: absoluteUrl});
      setSelectedImage(absoluteUrl);
      alert('Image uploaded successfully!');
    } catch (error) {
      setError('Failed to upload image');
      console.error('Image upload error:', error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('cms_token');
    
    // Client-side validation
    if (!productForm.title.trim()) {
      setError('Title is required');
      return;
    }
    if (!productForm.product_name.trim()) {
      setError('Product name is required');
      return;
    }
    if (!productForm.item_number.trim()) {
      setError('Item number is required');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Clean up the form data - convert empty strings to null for optional fields
      const cleanedFormData = {
        ...productForm,
        category_id: productForm.category_id || null,
        technical_data: productForm.technical_data || null,
        rich_text_description: productForm.rich_text_description || null,
        image_url: productForm.image_url || null,
        pdf_url: productForm.pdf_url || null
      };
      
      if (editingProduct) {
        await CmsApiService.updateProduct(editingProduct.id, cleanedFormData, token);
        alert('Product updated successfully!');
      } else {
        await CmsApiService.createProduct(cleanedFormData, token);
        alert('Product created successfully!');
      }
      
      resetProductForm();
      await loadData(token);
    } catch (error) {
      const baseMsg = editingProduct ? 'Failed to update product' : 'Failed to create product';
      let extra = '';
      if (error?.details?.errors && Array.isArray(error.details.errors)) {
        extra = ': ' + error.details.errors.map(e => e.msg || e.message || e).join(', ');
      } else if (error?.details?.error || error?.message) {
        extra = ': ' + (error.details?.error || error.message);
      }
      setError(baseMsg + extra);
      console.error('Product operation error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = (product) => {
    console.log('Edit button clicked for product:', product);
    setEditingProduct(product);
    setProductForm({
      title: product.title || '',
      product_name: product.product_name || '',
      item_number: product.item_number || '',
      technical_data: product.technical_data || '',
      rich_text_description: product.rich_text_description || '',
      image_url: product.image_url || '',
      pdf_url: product.pdf_url || '',
      category_id: product.category_id || '',
      status: product.status || 'PUBLISHED',
      is_featured: product.is_featured || false,
      sorting: product.sorting || 0
    });
    setSelectedImage(product.image_url || null);
    setActiveTab('products');
  };

  const handleDeleteProduct = async (productId) => {
    console.log('Delete button clicked for product ID:', productId);
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    const token = localStorage.getItem('cms_token');
    console.log('Token available:', !!token);
    try {
      setLoading(true);
      setError(null);
      console.log('Attempting to delete product:', productId);
      await CmsApiService.deleteProduct(productId, token);
      console.log('Product deleted successfully, refreshing data...');
      
      // Force refresh the data
      await forceRefresh();
      
      alert('Product deleted successfully!');
    } catch (error) {
      setError('Failed to delete product: ' + error.message);
      console.error('Delete product error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAllProducts = async () => {
    if (!confirm('Are you sure you want to delete ALL products? This action cannot be undone!')) return;
    
    const token = localStorage.getItem('cms_token');
    try {
      setLoading(true);
      setError(null);
      console.log('Attempting to delete all products...');
      
      // Delete products one by one (more reliable than bulk delete)
      let deletedCount = 0;
      const productsToDelete = [...products]; // Create a copy
      
      for (const product of productsToDelete) {
        try {
          await CmsApiService.deleteProduct(product.id, token);
          deletedCount++;
          console.log(`Deleted product ${product.id}: ${product.product_name}`);
        } catch (error) {
          console.error(`Failed to delete product ${product.id}:`, error);
        }
      }
      
      console.log('All products deleted successfully, refreshing data...');
      
      // Force refresh the data
      await forceRefresh();
      
      alert(`All products deleted successfully! ${deletedCount} products removed.`);
    } catch (error) {
      setError('Failed to delete all products: ' + error.message);
      console.error('Delete all products error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileImport = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const token = localStorage.getItem('cms_token');
    try {
      setLoading(true);
      const response = await CmsApiService.importProducts(file, token);
      alert(`Import completed! ${response.summary.successful} products imported successfully.`);
      await loadData(token);
    } catch (error) {
      setError('Failed to import CSV file');
      console.error('Import error:', error);
    } finally {
      setLoading(false);
      e.target.value = ''; // Reset file input
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{t('admin.login.title')}</h1>
            <p className="text-gray-600 mt-2">{t('admin.login.subtitle')}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('admin.login.username')}
              </label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('admin.login.password')}
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
            >
              {loading ? t('admin.login.loggingIn') : t('admin.login.loginButton')}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>{t('admin.login.defaultCredentials')}</p>
            <p><strong>{t('admin.login.username')}:</strong> {t('admin.login.defaultUsername')}</p>
            <p><strong>{t('admin.login.password')}:</strong> {t('admin.login.defaultPassword')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t('admin.header.title')}</h1>
              <p className="text-gray-600">{t('admin.header.welcome', { username: user?.username })}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              {t('admin.header.logout')}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'products', name: t('admin.tabs.products'), icon: '📦' },
              { id: 'categories', name: t('admin.tabs.categories'), icon: '🏷️' },
              { id: 'import', name: t('admin.tabs.import'), icon: '📥' },
              { id: 'settings', name: t('admin.tabs.settings'), icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            {/* Product Form */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {editingProduct ? t('admin.products.editTitle') : t('admin.products.title')}
                </h2>
                {editingProduct && (
                  <button
                    onClick={resetProductForm}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {t('admin.products.cancelEdit')}
                  </button>
                )}
              </div>
              
              <form onSubmit={handleProductSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('admin.products.form.title')} *
                    </label>
                    <input
                      type="text"
                      value={productForm.title}
                      onChange={(e) => setProductForm({...productForm, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('admin.products.form.productName')} *
                    </label>
                    <input
                      type="text"
                      value={productForm.product_name}
                      onChange={(e) => setProductForm({...productForm, product_name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('admin.products.form.itemNumber')} *
                    </label>
                    <input
                      type="text"
                      value={productForm.item_number}
                      onChange={(e) => setProductForm({...productForm, item_number: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('admin.products.form.category')}
                    </label>
                    <select
                      value={productForm.category_id}
                      onChange={(e) => setProductForm({...productForm, category_id: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">{t('admin.products.form.selectCategory')}</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('admin.products.form.status')}
                    </label>
                    <select
                      value={productForm.status}
                      onChange={(e) => setProductForm({...productForm, status: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="DRAFT">{t('admin.products.status.draft')}</option>
                      <option value="PUBLISHED">{t('admin.products.status.published')}</option>
                      <option value="ARCHIVED">{t('admin.products.status.archived')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sorting Order
                    </label>
                    <input
                      type="number"
                      value={productForm.sorting}
                      onChange={(e) => setProductForm({...productForm, sorting: parseInt(e.target.value) || 0})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Image
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files[0])}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md border border-gray-300"
                    >
                      {uploadingImage ? 'Uploading...' : 'Upload Image'}
                    </label>
                    {selectedImage && (
                      <div className="flex items-center space-x-2">
                        <img 
                          src={selectedImage} 
                          alt="Preview" 
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <span className="text-sm text-gray-600">Image uploaded</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL (alternative)
                  </label>
                  <input
                    type="url"
                    value={productForm.image_url}
                    onChange={(e) => setProductForm({...productForm, image_url: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PDF URL
                  </label>
                  <input
                    type="url"
                    value={productForm.pdf_url}
                    onChange={(e) => setProductForm({...productForm, pdf_url: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="https://example.com/document.pdf"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Technical Data
                  </label>
                  <textarea
                    value={productForm.technical_data}
                    onChange={(e) => setProductForm({...productForm, technical_data: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rich Text Description
                  </label>
                  <textarea
                    value={productForm.rich_text_description}
                    onChange={(e) => setProductForm({...productForm, rich_text_description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="HTML content allowed"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={productForm.is_featured}
                    onChange={(e) => setProductForm({...productForm, is_featured: e.target.checked})}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                    Featured Product
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : (editingProduct ? 'Update Product' : 'Create Product')}
                  </button>
                  
                  {editingProduct && (
                    <button
                      type="button"
                      onClick={resetProductForm}
                      className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Products List */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Products ({products.length})</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={forceRefresh}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                    disabled={loading}
                  >
                    {loading ? 'Refreshing...' : 'Refresh'}
                  </button>
                  <button
                    onClick={handleDeleteAllProducts}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm"
                    disabled={loading}
                  >
                    Delete All Products
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {products.map((product) => (
                  <div key={product.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {product.image_url && (
                          <img 
                            src={product.image_url} 
                            alt={product.product_name}
                            className="w-16 h-16 object-cover rounded"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        )}
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{product.product_name}</h3>
                          <p className="text-sm text-gray-600">Item #{product.item_number}</p>
                          <p className="text-sm text-gray-500 mt-1">{product.technical_data}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          product.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' : 
                          product.status === 'DRAFT' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {product.status}
                        </span>
                        {product.is_featured && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            Featured
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Edit button clicked, product:', product);
                            handleEditProduct(product);
                          }}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                          disabled={loading}
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Delete button clicked, product ID:', product.id);
                            handleDeleteProduct(product.id);
                          }}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                          disabled={loading}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {products.length === 0 && (
                  <div className="px-6 py-8 text-center text-gray-500">
                    No products found. Create your first product above or import from CSV.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Categories ({categories.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div 
                      className="w-4 h-4 rounded-full mr-2"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                  <p className="text-xs text-gray-500">{category.product_count} products</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'import' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Import Products from CSV</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                accept=".csv"
                onChange={handleFileImport}
                className="hidden"
                id="csv-import"
              />
              <label
                htmlFor="csv-import"
                className="cursor-pointer"
              >
                <div className="text-4xl mb-4">📁</div>
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Click to upload CSV file
                </p>
                <p className="text-gray-600">
                  Upload your Product+Collection.csv file to import products
                </p>
              </label>
            </div>
            
            {loading && (
              <div className="mt-4 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto"></div>
                <p className="text-gray-600 mt-2">Importing products...</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">CMS Settings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">API Endpoints</h3>
                <p className="text-sm text-gray-600">http://localhost:3001/api</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Status</h3>
                <p className="text-sm text-gray-600">CMS is running and ready</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Upload Directory</h3>
                <p className="text-sm text-gray-600">uploads/images/ and uploads/documents/</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}