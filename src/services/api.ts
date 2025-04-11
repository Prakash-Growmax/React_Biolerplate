const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function fetcher<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { params, ...fetchOptions } = options;

  // Add params to URL if provided
  let url = `${API_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, value);
    });
    url += `?${searchParams.toString()}`;
  }

  // Default headers
  const headers = new Headers(options.headers);
  if (!headers.has('Content-Type')) {
    headers.append('Content-Type', 'application/json');
  }

  // Get token from storage if available
  const token = localStorage.getItem('token');
  if (token && !headers.has('Authorization')) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
  });

  // Handle errors
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || 'An error occurred');
  }

  // Return data
  return response.json();
}

export const api = {
  get: <T>(endpoint: string, options?: FetchOptions) =>
    fetcher<T>(endpoint, { method: 'GET', ...options }),
  post: <T>(endpoint: string, data: unknown, options?: FetchOptions) =>
    fetcher<T>(endpoint, { method: 'POST', body: JSON.stringify(data), ...options }),
  put: <T>(endpoint: string, data: unknown, options?: FetchOptions) =>
    fetcher<T>(endpoint, { method: 'PUT', body: JSON.stringify(data), ...options }),
  patch: <T>(endpoint: string, data: unknown, options?: FetchOptions) =>
    fetcher<T>(endpoint, { method: 'PATCH', body: JSON.stringify(data), ...options }),
  delete: <T>(endpoint: string, options?: FetchOptions) =>
    fetcher<T>(endpoint, { method: 'DELETE', ...options }),
};
