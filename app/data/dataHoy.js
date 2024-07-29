 
 
 const getStartOfDay = () => {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0); // Establecer la hora a las 23:59:59.999
    return today.toISOString().slice(0, -5)+ 'Z'
 };

 const getEndOfDay = () => {
    const today = new Date();
    today.setUTCHours(23, 59, 59, 999); // Establecer la hora a las 23:59:59.999
    return today.toISOString().slice(0, -5)+ 'Z'   
 };

  
 export async function fetchDataHoy() { 
    var response = null;
    var data= null;
    const optionsHoras = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Accept-Encoding': 'gzip',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        location: '-34.36, -58.22',
        fields: [
          "temperature"
        ],
        units: 'metric',
        timesteps: [`1h`],
        startTime: getStartOfDay(),
        endTime : getEndOfDay()
      })
    };
  
    try {
          response = await fetch('https://api.tomorrow.io/v4/timelines?apikey=RlMNRNLl5dUBuwDYoGalIrE9EUklc68O', optionsHoras)  
          
          data = await response?.json();         
          return data;

      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
  }
  
  function hourlyTemps(data){
    
    return (
      data?.timelines && data?.timelines[0]? data?.timelines[0].intervals?.map(interval => ({
        time: interval?.startTime,
        temperature: interval?.values?.temperature,
      }))
      :[]
    )
  };


 export const calculateMaxMinTemperatures = (data) => {
    if (!data) return null;   
    let maxTemp = -Infinity;
    let minTemp = Infinity;
   
      hourlyTemps(data).forEach(tempData => {
        if (tempData?.temperature > maxTemp) {
          maxTemp = tempData?.temperature;
        }
        if (tempData?.temperature < minTemp) {
          minTemp = tempData?.temperature;
        }
      }
    );
    return { maxTemp, minTemp };
  };

