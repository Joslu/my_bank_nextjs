// utils/api.js
const BASE_URL = 'http://127.0.0.1:5000';  // Cambia esto según el puerto en el que se ejecute tu servidor Flask
const PRODUCTION_URL = "https://ec2-3-22-188-144.us-east-2.compute.amazonaws.com"

const makeApiRequest = async (endpoint, method, data) => {
  try {
    const url = `${PRODUCTION_URL}${endpoint}`;
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};

export default makeApiRequest;
