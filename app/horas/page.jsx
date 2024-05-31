import React from 'react'
import { fetchClima } from '@/app/data/dataClima';
import { campos_y_unidades } from '../data/campos_y_unidades'

const Horas = async (props) => {

  const cardStyle='bg-white/50 shadow-md p-4 rounded-lg text-sm '
  const reqHoras= await fetchClima('hoy')
  const dataHoras = reqHoras.data.timelines[0].intervals

  console.log('dataHoras ', dataHoras)


  return (
    <div className='flex flex-col p-4 text-indigo-600 w-2/4 gap-4'>
        <p>Clima por horas {dataHoras[0].startTime.slice(0,10)}</p>
        {dataHoras?.map((hour, i)=>{
            return(
              <div className={cardStyle}>
                {hour.startTime.slice(11,16)}
                {/* <p>{JSON.stringify(hour)}</p> */}                
                {campos_y_unidades.map((campo)=>{
                  
                  return(
                    campo.param ?
                    <>
                      <p>{`${campo.param} : ${hour.values[campo.param]+' '+campo.uni}`} </p>
                    </>
                    :
                    <></>
                    
                  )
                 })}
              </div>  
            )
        })}
    </div>
  )
}

export default Horas