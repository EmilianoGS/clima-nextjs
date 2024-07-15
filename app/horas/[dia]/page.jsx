import React from 'react'
import { fetchClima } from '@/app/data/dataClima';
import Carousel from '../carousel'


const Horas = async ({params}) => {  

   
  const diaHs = params.dia!== 'hoy' ? decodeURIComponent(params.dia) : null
 console.log('diaHs ', diaHs)
  const reqHoras= await fetchClima('hoy', diaHs)
 
  const dataHoras = reqHoras.data?.timelines[0].intervals
  console.log("Data horas: ", dataHoras)
  const temps = dataHoras.reduce(
    (acc, elm) => {acc.push(parseFloat(elm.values.temperature));
        return acc;
    },[]);

  const maxTemp= Math.max.apply(Math,temps)
  const minTemp=Math.min.apply(Math,temps)
   
  return (
      <Carousel maxTemp={maxTemp} minTemp={minTemp} data={dataHoras}/>
  )
}

export default Horas