import React from 'react'
import { fetchClima } from '@/app/data/dataClima';
import Card1 from '../componentes/card1'
import Card2 from '../componentes/card2'
import {dia} from '../actual'
import {  calculateMaxMinTemperatures } from '@/app/data/dataHoy'
import './styles.css'

const Dias = async (props) => {

  const cardStyle='bg-white/50 shadow-md p-4 rounded-lg text-sm'
  const reqDias= await fetchClima('dias')
  
  const dataDias = reqDias.data.timelines[0].intervals
  
  const temps = dataDias.reduce(
    (acc, elm) => {acc.push(parseFloat(elm.values.temperature));
        return acc;
  },[]);
  
  const maxTemp= Math.max.apply(Math,temps)
  const minTemp=Math.min.apply(Math,temps)
   
  return (
    <div className='flex flex-col p-4 text-indigo-600 gap-4 ftLato overflow-auto w-full'>
      <div className='w-3/4 '>
        <h3>Clima por horas {dataDias[0].startTime.slice(0,10)}</h3>
        Min {minTemp}, Max {maxTemp} 
        {dataDias?.map((elem, i)=>{
           const hour= elem.startTime?.slice(11,16)
           const fecha= elem.startTime?.slice(0,10)
           
            return(
              <div >
                {/* {fecha} */}
                <p className='text-lg '>{dia(elem.startTime)}, {fecha}</p>
                <div className='flex gap-2'>
                  <Card1 page={'dias'} fecha={fecha} elem={elem.values} />
                  <Card2 page={'dias'} fecha={fecha} elem={elem.values} />                
                </div>
              </div>
            )
        })}
    </div>
    </div>
  )
}

export default Dias