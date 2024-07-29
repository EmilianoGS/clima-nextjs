import React from 'react'
import { fetchClima } from '@/app/data/dataClima';
import Card1 from '../componentes/card1'
import Card2 from '../componentes/card2'
import {dia} from '../funciones/fechas'
import Link from 'next/link';
import { Suspense } from 'react';
import './styles.css'

const Dias = async (props) => {

  const reqDias= await fetchClima('dias')  
  const dataDias = reqDias?.data?.timelines? reqDias?.data?.timelines[0].intervals : []
  const h3Style='text-2xl text-zinc-600 my-2'
   
  console.log("Data dias ", dataDias)
  return (
    <div className='flex flex-col p-4 text-zinc-600 gap-4 ftLato overflow-auto w-full'>
      <div className='w-6/7'>
        <p>{dataDias && dataDias[0]? dataDias[0].startTime?.slice(0,10) : ''}</p>
        <h3 className={h3Style}>Próximos días </h3>
         <div className='bg-[#f7f7e642] p-4 '>
            {dataDias?.map((elem, i)=>{          
              const fecha= elem.startTime?.slice(0,10)

                return(
                  <div className='filaDias last:border-0 border-b border-[#bfbfbf] pb-4'>
                    <p className='mb-2 text-lg text-[#4f5a6f]'>{dia(elem.startTime)}, {fecha}</p>
                    <div className='flex gap-2 items-stretch h-[65px]'>
                      <Suspense fallback={<p>Cargando...</p>}>
                        <Card1 page={'dias'} fecha={fecha} elem={elem.values} />
                        <Card2 page={'dias'} fecha={fecha} elem={elem.values} />
                      </Suspense>
                      <Link href={`/horas/${elem.startTime}`} className='h-full flex shadow-md' >
                        <div className='flex bg-white/50 rounded-lg p-4 h-full items-center ftLato'>
                          <p>Por <br/> horas</p>
                        </div>
                      </Link> 
                    </div>
                  </div>
                )
            })}
         </div>
      </div>
    </div>
  )
}

export default Dias