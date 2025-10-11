// CMS API service for connecting to the integrated CMS
// Use relative URLs for production (Vercel proxy) or localhost for development
const API_URL = import.meta.env.PROD ? '/api' : (import.meta.env.VITE_CMS_URL || 'http://localhost:3001/api');
// Base without trailing /api for assets like /uploads/...
const API_BASE_URL = import.meta.env.PROD ? '' : API_URL.replace(/\/?api\/?$/, '');

class CmsApiService {
  async request(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    // Important: spread options first so we don't overwrite headers later
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        // Try to extract error body for better diagnostics
        let errorBody;
        try {
          errorBody = await response.json();
        } catch (_) {
          try {
            errorBody = await response.text();
          } catch (_) {
            errorBody = null;
          }
        }

        const message = (errorBody && (errorBody.error || errorBody.message))
          || `HTTP error! status: ${response.status}`;

        const error = new Error(message);
        error.status = response.status;
        error.details = errorBody;
        throw error;
      }
      
      return await response.json();
    } catch (error) {
      console.error('CMS API request failed:', error);
      throw error;
    }
  }

  // Authentication
  async login(username, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
  }

  async getProfile(token) {
    return this.request('/auth/profile', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  // Product endpoints
  async getProducts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/products?${queryString}`);
  }

  async getProduct(id) {
    return this.request(`/products/${id}`);
  }

  async getFeaturedProducts() {
    return this.request('/products?featured=true&status=PUBLISHED');
  }

  async getProductsByCategory(categoryId) {
    return this.request(`/products?category=${categoryId}&status=PUBLISHED`);
  }

  // Admin product endpoints
  async createProduct(productData, token) {
    return this.request('/products', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(productData)
    });
  }

  async updateProduct(id, productData, token) {
    return this.request(`/products/${id}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(productData)
    });
  }

  async deleteProduct(id, token) {
    return this.request(`/products/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  // Category endpoints
  async getCategories() {
    return this.request('/categories');
  }

  async getCategory(id) {
    return this.request(`/categories/${id}`);
  }

  // Admin category endpoints
  async createCategory(categoryData, token) {
    return this.request('/categories', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(categoryData)
    });
  }

  async updateCategory(id, categoryData, token) {
    return this.request(`/categories/${id}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(categoryData)
    });
  }

  async deleteCategory(id, token) {
    return this.request(`/categories/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  // Import endpoints
  async importProducts(csvFile, token) {
    const formData = new FormData();
    formData.append('csvFile', csvFile);

    return fetch(`${API_URL}/import/products`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
  }

  // Search products
  async searchProducts(query) {
    return this.request(`/products?search=${encodeURIComponent(query)}&status=PUBLISHED`);
  }

  // Upload endpoints
  async uploadFile(file, token) {
    const formData = new FormData();
    formData.append('file', file);

    return fetch(`${API_URL}/upload/single`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
  }

  // Bulk operations
  async deleteAllProducts(token) {
    return this.request('/products/bulk/delete', {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export default new CmsApiService();
export { API_URL, API_BASE_URL };
