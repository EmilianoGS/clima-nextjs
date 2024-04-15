


import { apiKeyMet } from '../../configuracion/environment';



export async function fetchClima() {   

    try {       
        const response = await fetch(`https://www.meteosource.com/api/v1/free/point?lat=34.36S&lon=58.22W&key=${apiKeyMet}`)        
        const data = await response?.json();
        return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}