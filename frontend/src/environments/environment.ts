// src/environments/environment.ts
export const environment = {
  production: false,
  backendUrl: 'http://localhost:3005',
  apiKey: process.env['API_KEY'] || 'default-api-key'  // Using bracket notation
};
