import {Suspense} from 'react'
import Card from '../componentes/card'
import '../climaDia/styles.css'
import { fetchClima } from '@/app/data/dataClima';
import { campos_y_unidades } from '../data/campos_y_unidades'

export default async function Actual() {
    
   const dataActual=await fetchClima('current') 
   const actual= dataActual?.data?.values
   const time= dataActual?.data?.time.slice(0,10)

   
   return (
    <>    
      <div className="flex items-start gap-6 md:grid-cols-4 lg:grid-cols-8 text-midnight w-full">
        <Suspense fallback={'Cargando...'}>
            <Card elem={actual} fecha={time}/> 
        </Suspense>          
      </div>
    
    </>
  );
}