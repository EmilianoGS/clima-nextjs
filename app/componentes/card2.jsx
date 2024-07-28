'use client';
import React from 'react'
import { PiWindLight, PiCloudRain } from "react-icons/pi";
import { BsMoisture } from 'react-icons/bs'
import { GoArrowUpRight }  from 'react-icons/go'

const Card2 = async (props) => {

    const detalleKeys=[
     {key:'precipitationProbability', u:'%', style: 'text-xl'},
     {key:'humidity',u:'%', style: 'text-xl'},     
     {key:'windDirection', u:'°'},
     {key:'windSpeed', u:'m/s'}]
  
    const cardStyle=`${props.page!=='dias' ? 'h-fit' : `${props.page}_card2`} text-xl bg-white/50 shadow-md p-4 rounded-lg text-sm p-4 gap-4 cardStyle ${props.page=='horas' ? 'flex-1' : ''}`
    
    const iconos=[
        {icono: <PiCloudRain />, key: 'precipitationProbability'},
        {icono: <PiWindLight />, key: 'windSpeed'},
        {icono: <GoArrowUpRight />, key: 'windDirection'},
        {icono: <BsMoisture />, key: 'humidity'}
    ]

    const flexStyle= `${props.page!=='dias' && props.page!=='horas'? 'flex-col' : 'flex items-center'} body gap-3`

   return(              
        <div className={cardStyle}> 
            <div className={flexStyle}>
                {detalleKeys.map((item)=>{
                
                const existeClave = Object.keys(props.elem).indexOf(item.key!==-1)   
                const icono = iconos.find((elem)=> elem.key == item.key)                       
                return(
                    <div className={`flex  gap-1 items-center ${props.page!=='dias' && props.page!=='horas'? 'py-2 last:border-0 border-b border-neutral-600' : ''}`}>
                      <div className='text-zinc-700'>{icono ? icono.icono : null }</div>  
                      { existeClave ?
                          <p className={`${item.style || '' } mx-2`}>
                            {` ${props.elem[item.key]} ${item.u}`}</p>
                          :
                          <></>
                      }
                    </div>
                )
                })}
            </div>
        </div>                       
    )
}

export default Card2
