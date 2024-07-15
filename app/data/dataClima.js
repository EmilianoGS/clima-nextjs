import { apiKeyMet } from '../../configuracion/environment';
import { campos_y_unidades } from './campos_y_unidades';

export async function fetchClima(param, fecha=null) { 
  console.log('Param ', fecha)
  var response = null;
  var data= null;
  var ahora= new Date()
  
  var u= param=='dias' ? 'd' : param=='hoy' ? 'h' : null
  const fields = campos_y_unidades.reduce(
    (acc, elem) => {
        acc.push(elem.param);
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
console.log("optionsHoras ", optionsHoras)
    try {
          if(param=='current'){
            response = await fetch('https://api.tomorrow.io/v4/weather/realtime?location=-34.36,-58.22&apikey=RlMNRNLl5dUBuwDYoGalIrE9EUklc68O')
             data = await response?.json();
          }
          else if(param=='hoy' || param=='dias'){
            response = await fetch('https://api.tomorrow.io/v4/timelines?apikey=RlMNRNLl5dUBuwDYoGalIrE9EUklc68O', optionsHoras)          
           
             data = await response?.json();
             console.log("Data: ", data)
          }
       
        return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}


