import React from 'react'
import { fetchClima } from '@/app/data/dataClima';
import Carousel from './carousel'

const Horas = async (props) => {  

  const reqHoras= await fetchClima('hoy')
  const dataHoras = reqHoras.data?.timelines[0].intervals
 
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