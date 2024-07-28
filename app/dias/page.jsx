import React from 'react'
import { fetchClima } from '@/app/data/dataClima';
import Card1 from '../componentes/card1'
import Card2 from '../componentes/card2'
import {dia} from '../funciones/fechas'
import Link from 'next/link';
import { Suspense } from 'react';
import {  calculateMaxMinTemperatures } from '@/app/data/dataHoy'
import './styles.css'

const Dias = async (props) => {

  const cardStyle='bg-white/50 shadow-md p-4 rounded-lg text-sm'
  const reqDias= await fetchClima('dias')
  
  const dataDias = reqDias.data.timelines[0].intervals
  const h3Style='text-2xl text-zinc-600 my-2'

  const temps = dataDias.reduce(
    (acc, elm) => {acc.push(parseFloat(elm.values.temperature));
        return acc;
  },[]);
  
  
   
  return (
    <div className='flex flex-col p-4 text-zinc-600 gap-4 ftLato overflow-auto w-full'>
      <div className='w-6/7'>
        <p>{dataDias[0].startTime.slice(0,10)}</p>
        <h3 className={h3Style}>Próximos días </h3>
         
        {dataDias?.map((elem, i)=>{
           const hour= elem.startTime?.slice(11,16)
           const fecha= elem.startTime?.slice(0,10)
           
            return(
              <div className='filaDias'>
                <p className='text-lg text-red-400'>{dia(elem.startTime)}, {fecha}</p>
                <div className='flex gap-2 items-center h-[65px]'>
                <Suspense fallback={<p>Cargando...</p>}>
                  <Card1 page={'dias'} fecha={fecha} elem={elem.values} />
                  <Card2 page={'dias'} fecha={fecha} elem={elem.values} />
                </Suspense>
                    <Link href={`/horas/${elem.startTime}`} className='h-full flex shadow-md' >
                      <div className='flex bg-white/50 rounded-lg p-4 h-full items-center'>
                        <p>Por horas</p>
                      </div>
                    </Link> 
                </div>
              </div>
            )
        })}
    </div>
    </div>
  )
}

export default Dias