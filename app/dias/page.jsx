import React from 'react'
import { fetchClima } from '@/app/data/dataClima';
import { IoMdArrowRoundForward } from 'react-icons/io'
import Card1 from '../componentes/card1'
import Card2 from '../componentes/card2'
import {dia} from '../funciones/fechas'
import Link from 'next/link';
import { Suspense } from 'react';
import './styles.css'

const Dias = async (props) => {

  const reqDias= await fetchClima('dias')  
  const dataDias = reqDias?.data?.timelines && reqDias?.data?.timelines[0] ? reqDias?.data?.timelines[0].intervals : []
  const h3Style='text-2xl text-zinc-600 my-2'

  return (
    <div className='flex flex-col p-4 text-zinc-600 gap-4 ftLato overflow-auto w-full'>
      <div className='w-6/7'>
        <p>{dataDias && dataDias[0]? dataDias[0].startTime?.slice(0,10) : ''}</p>
        <h3 className={h3Style}>Próximos días </h3>
         <div className='bg-[#f7f7e642] p-4 '>
            {dataDias?.map((elem, i)=>{          
              const fecha= elem?.startTime?.slice(0,10)

                return(
                  <div className='filaDias last:border-0 border-b border-[#bfbfbf] pb-4'>
                    <p className='mb-2 text-lg text-[#4f5a6f]'>{dia(elem.startTime)}, {fecha}</p>
                    <div className='flex sm:flex-row flex-col gap-2 items-stretch 
                    sm:bg-white/0 bg-white/50 sm:p-0 p-3 rounded-lg'>
                      <Suspense fallback={<p className='text-zinc-400 px-3'>Cargando...</p>}>
                        <Card1 page={'dias'} fecha={fecha} elem={elem.values} />
                        <Card2 page={'dias'} fecha={fecha} elem={elem.values} />
                      </Suspense>
                      <div className="flex">
                        <Link href={`/horas/${elem.startTime}`} className=' flex sm:shadow-md w-full sm:w-fit' >
                          <div className='w-full sm:w-fit flex sm:bg-white/50 rounded-lg sm:p-4  p-2 h-full items-center'>
                            <p className='ftLato font-semibold'>{`Por horas `}</p>
                            <IoMdArrowRoundForward />
                          </div>
                        </Link> 
                      </div>
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