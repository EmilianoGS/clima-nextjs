import { apiKeyMet } from '../../configuracion/environment';
import { campos_y_unidades } from './campos_y_unidades';

export async function fetchClima(param) { 
  var response = null;
  var data= null;
  var ahora= new Date()
  console.log('Ahora: ', ahora)
  const fields = campos_y_unidades.reduce(
    (acc, elem) => {
        acc.push(elem.param);
        return acc;
    },
    []
);


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
    timesteps: ['1h'],
    startTime: 'now',
    endTime: 'nowPlus6h'
  })
};

  console.log('fields', fields)
    try {       
          
          if(param=='current'){
            response = await fetch('https://api.tomorrow.io/v4/weather/realtime?location=-34.36,-58.22&apikey=RlMNRNLl5dUBuwDYoGalIrE9EUklc68O')
             data = await response?.json();
            console.log('data ', data)

          }
          else if(param=='hoy'){
                          
            response = await fetch('https://api.tomorrow.io/v4/timelines?apikey=RlMNRNLl5dUBuwDYoGalIrE9EUklc68O', optionsHoras)          
            
             data = await response?.json();
             
          }
       
        return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}


