import { apiKeyMet } from '../../configuracion/environment';
import { campos_y_unidades } from './campos_y_unidades';

export async function fetchClima(param, fecha=null){ 
  
    var response = null;
    var data= null;
    var ahora= new Date()
    
    var u= param=='dias' ? 'd' : param=='hoy' ? 'h' : null
    const fields = campos_y_unidades.reduce(
      (acc, elem) => {
          acc.push(elem?.param);
          return acc;
      },
      []
    );

    function calcularEndTime(fechaInicio) {    
      // Convierte la fecha de inicio en un objeto Date
      const fecha = new Date(fechaInicio);
      // Añade 6 horas a la fecha de inicio
      fecha.setHours(fecha.getHours() + 6);
      // Retorna la fecha final en formato ISO 8601
      return fecha.toISOString();
    }


    const optionsHoras = {
      method: 'POST',
      cache: 'no-store',
      headers: {
        accept: 'application/json',
        'Accept-Encoding': 'gzip',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        location: '-34.36, -58.22',
        fields: fields,
        units: 'metric',
        timesteps: [`1${u}`],
        startTime: fecha || 'now',
        endTime : param=='hoy' ? fecha? calcularEndTime(fecha) : 'nowPlus6h' : 'nowPlus5d'    
      })
    };

    try {
          if(param=='current'){
            response = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=-34.36,-58.22&apikey=${apiKeyMet}`, {cache: 'no-store'})
             data = await response?.json();
          }
          else if(param=='hoy' || param=='dias'){
            response = await fetch(`https://api.tomorrow.io/v4/timelines?apikey=${apiKeyMet}`, optionsHoras)          
           
             data = await response?.json();
          }
       
        return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}


