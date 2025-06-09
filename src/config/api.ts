// API Configuration
const isDevelopment = process.env.NODE_ENV === 'development';

// API Base URLs
export const API_CONFIG = {
  development: 'http://localhost:5000',
  production: 'https://the-fun-project-backend.onrender.com'
};

// Get the current API base URL
export const API_BASE_URL = isDevelopment ? API_CONFIG.development : API_CONFIG.production;

// API Endpoints
export const API_ENDPOINTS = {
  // Public endpoints
  health: `${API_BASE_URL}/api/health`,
  messages: `${API_BASE_URL}/api/messages`,
  
  // Auth endpoints  
  login: `${API_BASE_URL}/api/auth/login`,
  verify: `${API_BASE_URL}/api/auth/verify`,
  logout: `${API_BASE_URL}/api/auth/logout`,
  
  // Admin endpoints (require authentication)
  adminMessages: `${API_BASE_URL}/api/messages`,
  adminMessage: (id: string) => `${API_BASE_URL}/api/messages/${id}`,
  toggleRead: (id: string) => `${API_BASE_URL}/api/messages/${id}/read`,
  toggleArchive: (id: string) => `${API_BASE_URL}/api/messages/${id}/archive`,
  deleteMessage: (id: string) => `${API_BASE_URL}/api/messages/${id}`,
};

export default API_ENDPOINTS; 