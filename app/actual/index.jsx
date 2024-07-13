import {Suspense} from 'react'
import Card1 from '../componentes/card1'
import Card2 from '../componentes/card2'
import Card3 from '../componentes/card3'
import '../climaDia/styles.css'
import { fetchClima } from '@/app/data/dataClima';
import { fetchDataHoy, calculateMaxMinTemperatures } from '@/app/data/dataHoy'


export const dia = (fecha=null) => {    
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const today = fecha!== null? new Date(fecha) : new Date();  
  return daysOfWeek[today.getDay()];
};

export default async function Actual() {
    
   const dataActual=await fetchClima('current') 
   const datahoy= await fetchDataHoy()
   const actual= dataActual?.data?.values
   const time= dataActual?.data?.time.slice(0,10)
  
   const maxYmin= calculateMaxMinTemperatures(datahoy?.data)

  const mes = () => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const today = new Date();
    return months[today.getMonth()];
  };

  // Obtener la fecha en formato dd/mm/yyyy
  const fecha = () => {
    const today = new Date();
    const day = today.getDate();
    const month = mes(); // Los meses en JavaScript van de 0 a 11
    const year = today.getFullYear();

    return `${day} de ${month} de ${year}`;
  };
   return (
    <>    
      <div className="  gap-6 md:grid-cols-4 lg:grid-cols-8 text-midnight w-full">
        <Suspense fallback={'Cargando...'}>
            {dia()}, {fecha()}
            <div className='flex gap-y-2 flex-col'>
              <div className='flex gap-2 items-stretch'>
                <Card1 page='actual' elem={actual} fecha={time} />
                <Card3 page='actual' elem={maxYmin} fecha={time} /> 
              </div>
              <div>
                <Card2 page='actual' elem={actual} fecha={time}/>
              </div>
            </div>
           
        </Suspense>          
      </div>
    
    </>
  );
}