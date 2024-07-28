import React from 'react'
import Card1 from '../componentes/card1'
import Card2 from '../componentes/card2'
import './styles.css'
import {fecha, dia} from '../funciones/fechas'
import {Suspense} from 'react'

const ListaHoras = (props) => {
    
 const data=  props.data
 const fontHora='text-lg  my-2 text-red-400 ftLato'

  return (
    <>
        <Suspense fallback={<p className='text-zinc-400'>Cargando...</p>}>  
            <div className='p-4 text-zinc-700 w-5/6 gap-4'>
                <div className="my-3">
                    <p className='titulo ftGris'>Clima por horas</p>
                    <p className='text-red-400 diaclima my-1'> {dia(data[0].startTime)}, {fecha(data[0].startTime)}</p>
                </div>
             
                
                    <div className="my-5 flex flex-col py-4 gap-6">
                        <p className="maxymin ftGris">
                          Min {props.minTemp} °C, Max {props.maxTemp} °C
                         </p>
                        {data.map((elem, i)=>{
                            const hour= elem.startTime.slice(11,16)
                            return(
                                <div className="flex gap-3 items-center" key={i}>
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
            :
            <p>Cargando...</p>
        </Suspense>
    </>
  )
}

export default ListaHoras