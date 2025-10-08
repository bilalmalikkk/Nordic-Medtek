// Custom hook for managing products from CMS
import { useState, useEffect } from 'react';
import CmsApiService from '../services/cmsApi';

export const useProducts = (params = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      // Add cache-busting timestamp to force fresh data
      const response = await CmsApiService.getProducts({
        ...params,
        _t: Date.now()
      });
      setProducts(response.products || []);
    } catch (err) {
      setError(err.message);
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [JSON.stringify(params), refreshKey]);

  const refresh = () => setRefreshKey(prev => prev + 1);

  return { products, loading, error, refresh };
};

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await CmsApiService.getProduct(id);
        setProduct(response.product);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await CmsApiService.getFeaturedProducts();
      setProducts(response.products || []);
    } catch (err) {
      setError(err.message);
      console.error('Failed to fetch featured products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, [refreshKey]);

  const refresh = () => setRefreshKey(prev => prev + 1);

  return { products, loading, error, refresh };
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await CmsApiService.getCategories();
        setCategories(response.categories || []);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export const useProductSearch = (query) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || query.length < 2) {
      setProducts([]);
      return;
    }

    const searchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await CmsApiService.searchProducts(query);
        setProducts(response.products || []);
      } catch (err) {
        setError(err.message);
        console.error('Failed to search products:', err);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return { products, loading, error };
};
