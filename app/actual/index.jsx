import {Suspense} from 'react'
import Card1 from '../componentes/card1'
import Card2 from '../componentes/card2'
import Card3 from '../componentes/card3'
import { fetchClima } from '@/app/data/dataClima';
import { fetchDataHoy, calculateMaxMinTemperatures } from '@/app/data/dataHoy'
import { mes, dia, fecha } from '../funciones/fechas'


export default async function Actual() {
    
   const dataActual=await fetchClima('current') 
   const datahoy= await fetchDataHoy()
   const actual= dataActual?.data?.values
   const time= dataActual?.data?.time?.slice(0,10)  
   const maxYmin= calculateMaxMinTemperatures(datahoy?.data)
 
   return (
    <>    
      <div className="flex flex-col items-center gap-6 md:grid-cols-4 lg:grid-cols-8 text-midnight w-full">
        <Suspense fallback={'Cargando...'}>
          <div className="lg:w-2/5 md:w-4/6 w-full">
            <p className='text-2xl text-[#4f5a6f] my-3'>{dia()}, {fecha()}</p>
            <div className='flex gap-y-2 flex-col bg-[#f7f7e642] p-4 rounded-md'>
              <div className='flex flex-col lg:flex-row gap-2 items-stretch'>
                <div className='w-full lg:w-1/2 flex flex-grow'>
                  <Card1 page='actual' elem={actual} fecha={time} />
                </div>
                <div className='w-full lg:w-1/3 '>
                  <Card3 page='actual' elem={maxYmin} fecha={time} />
                </div> 
              </div>
              <div>
                <Card2 page='actual' elem={actual} fecha={time}/>
              </div>
            </div>
          </div>
        </Suspense>          
      </div>
    
    </>
  );
}