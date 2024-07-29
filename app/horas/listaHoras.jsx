import React from 'react'
import Card1 from '../componentes/card1'
import Card2 from '../componentes/card2'
import './styles.css'
import {fecha, dia} from '../funciones/fechas'
import {Suspense} from 'react'

const ListaHoras = (props) => {
    
 const data=  props.data
 const fontHora='text-lg  my-2 text-[#4f5a6f] ftLato'

  return (
    <>
        <Suspense fallback={<p className='text-zinc-400'>Cargando...</p>}>  
            <div className='p-4 text-zinc-700 gap-4'>
                <div className="my-3">
                    <p className='titulo ftGris'>Clima por horas</p>
                    <p className='text-[#4f5a6f] diaclima my-1'> {dia(data && data[0] ? data[0].startTime : null)}, {fecha(data && data[0] ? data[0].startTime : null)}</p>
                </div>
                <p className="maxymin ftGris text-xl">
                  Min {props.minTemp} °C, Max {props.maxTemp} °C
                </p>
                <div className="my-5 flex flex-col p-4  bg-[#f7f7e642]">
                    
                    {data?.map((elem, i)=>{
                        const hour= elem?.startTime?.slice(11,16)
                        return(
                            <div className="flex filaHoras gap-3 items-center py-4 last:border-0 border-b border-[#bfbfbf]" key={i}>
                                <p className={fontHora}>
                                    {hour ? `${hour} hs` : null}
                                </p>
                                <div className='keys gap-3 flex flex-1'>
                                    <Card1                                      
                                    hour={hour} 
                                    page={'horas'} elem={elem.values}/>
                                
                                    <Card2                                      
                                    hour={hour} 
                                    page={'horas'} elem={elem.values}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
           
        </Suspense>
    </>
  )
}

export default ListaHoras