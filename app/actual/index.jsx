import {Suspense} from 'react'

import '../climaDia/styles.css'
import { fetchClima } from '@/app/data/dataClima';
import { campos_y_unidades } from '../data/campos_y_unidades'

export default async function Actual() {
    
   const dataActual=await fetchClima('current') 
   const actual= dataActual?.data?.values


   return (
    <>   
        
      <div className="flex items-start mt-6 gap-6 md:grid-cols-4 lg:grid-cols-8 text-midnight ">
        <Suspense fallback={'Cargando...'}>
                <div className='flex-column'>
                 {Object.keys(actual).map((item)=>{
                  const existeClave = campos_y_unidades.some(campo => campo.param==item);
                  return(
                    existeClave ?
                      <p>{`${item} : ${actual[item]}`} </p>
                      :
                      <></>
                  )
                 })}
                {/* <ClimaDia /> */}
                </div>
        </Suspense>          
      </div>
    
    </>
  );
}