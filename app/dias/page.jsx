import React from 'react'
import { fetchClima } from '@/app/data/dataClima';

import Card from '../componentes/card'

const Dias = async (props) => {

  const cardStyle='bg-white/50 shadow-md p-4 rounded-lg text-sm '
  const reqDias= await fetchClima('dias')
  console.log(reqDias)
  const dataHoras = reqDias.data.timelines[0].intervals
  
  const temps = dataHoras.reduce(
    (acc, elm) => {acc.push(parseFloat(elm.values.temperature));
        return acc;
    },[]);

   const maxTemp= Math.max.apply(Math,temps)
   const minTemp=Math.min.apply(Math,temps)

   
  return (
    <div className='flex flex-1 overflow-auto flex-col p-4 text-indigo-600 w-1/2 gap-4'>
        <p>Clima por horas {dataHoras[0].startTime.slice(0,10)}</p>
        Maxima {maxTemp}, minima {minTemp}
        {dataHoras?.map((elem, i)=>{
           const hour= elem.startTime?.slice(11,16)
            return(
                <Card hour={hour} elem={elem.values}/>
            )
        })}
    </div>
  )
}

export default Dias