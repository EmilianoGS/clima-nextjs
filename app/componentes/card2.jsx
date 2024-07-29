'use client';
import React from 'react'
import { PiWindLight, PiCloudRain } from "react-icons/pi";
import { BsMoisture } from 'react-icons/bs'
import { GoArrowUpRight }  from 'react-icons/go'
import { CiCloudOn } from "react-icons/ci";

const Card2 = async (props) => {

    const detalleKeys=[
     {key:'precipitationProbability', u:'%', style: 'text-xl', desc:'Probabilidad de lluvia'},
     {key:'humidity',u:'%', style: 'text-xl', desc:'Humedad'},
     {key:'cloudCover',u:'%', style: 'text-xl', desc:'Nubosidad'}, 
     {key:'windSpeed', u:'m/s', desc:'Velocidad del viento'}, 
     {key:'windDirection', u:'°', desc: 'Dirección del viento'}
     ]
  
    const cardStyle=`${props.page!=='dias' ? 'h-fit' : `${props.page}_card2`} text-xl bg-white/50 shadow-md p-4 rounded-lg text-sm p-4 gap-4 cardStyle ${props.page=='horas' || props.page=='dias' ? 'flex-1' : ''}`
    
    const iconos=[
        {icono: <PiCloudRain />, key: 'precipitationProbability'},
        {icono: <PiWindLight />, key: 'windSpeed'},
        {icono: '-', key: 'windDirection'},
        {icono: <CiCloudOn />, key: 'cloudCover'},
        {icono: <BsMoisture />, key: 'humidity'}
    ]

    const flexStyle= `${props.page!=='dias' && props.page!=='horas'? 'flex-col' : 'flex items-center'} body gap-1`

   return(              
        <div className={cardStyle}> 
            <div className={flexStyle}>
                {detalleKeys.map((item,i)=>{
                
                const existeClave = Object.keys(props.elem).indexOf(item.key!==-1)   
                const icono = iconos.find((elem)=> elem.key == item.key) 
                const anteUltimo= detalleKeys.length-2

                return(
                    <div className={`flex ${i>=anteUltimo? 'mx-0': 'mx-2'} gap-1 items-center ${props.page!=='dias' && props.page!=='horas'? 'py-2 last:border-0 border-b border-neutral-600' : ''}`}>
                    
                    <div className='text-zinc-700'>
                      
                        {icono ? icono.icono : null }
                    </div>  
                      { existeClave ?
                         
                          <div className="flex items-end gap-3">
                             
                            <p className={`${item.style || '' } mx-1`}>
                                {` ${props.elem[item.key]} ${item.u}`}
                            </p>
                            {props.page=='actual'?
                                <p className='text-sm'>
                                    {item.desc}
                                </p>
                                :
                                null
                            }
                          </div>
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
