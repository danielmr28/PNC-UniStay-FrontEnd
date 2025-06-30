// src/services/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://railway-backend-production-8a17.up.railway.app/api', // Nota que incluimos /api en la URL base
});

// Más adelante, aquí configuraremos los "interceptors" para manejar errores
// o la renovación de tokens de forma global.

export default apiClient;