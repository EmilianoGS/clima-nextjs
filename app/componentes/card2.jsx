'use client';
import React from 'react'
import { PiWindLight, PiCloudRain } from "react-icons/pi";
import { BsMoisture } from 'react-icons/bs'
import { GoArrowUpRight }  from 'react-icons/go'
import { CiCloudOn } from "react-icons/ci";

const Card2 = async (props) => {

    const detalleKeys=[
     {key:'precipitationProbability', u:'%', style: 'lg:text-xl text-base', desc:'Probabilidad de lluvia'},
     {key:'humidity',u:'%', style: 'lg:text-xl text-base', desc:'Humedad'},
     {key:'cloudCover',u:'%', style: 'lg:text-xl text-base', desc:'Nubosidad'}, 
     {key:'windSpeed', u:'m/s', style:'lg:text-xl text-base', desc:'Velocidad del viento'}, 
     {key:'windDirection', u:'°',style:'lg:text-xl text-base', desc: 'Dirección del viento'}
     ]
      
    
    const iconos=[
        {icono: <PiCloudRain />, key: 'precipitationProbability'},
        {icono: <PiWindLight />, key: 'windSpeed'},
        {icono: props.page=='actual' ? '' : '-', key: 'windDirection'},
        {icono: <CiCloudOn />, key: 'cloudCover'},
        {icono: <BsMoisture />, key: 'humidity'}
    ]



    var estilo_card2= ''
    if(props.page=='dias'){
        estilo_card2= 'dias_card2 lg:flex-1'
    }
    else if(props.page=='horas'){
        estilo_card2= 'lg:flex-1 '
    }

    var cardStyle= ''
    var flexStyle= ''
    var estilo_cnt_campo='flex items-center gap-3'

    if(props.page=='horas'){
        flexStyle= 'flex flex-row sm:flex-row sm:items-center items-start body gap-3 md:w-full flex-wrap lg:flex-nowrap'
        cardStyle=`md:w-full text-2xl p-2 lg:p-4 rounded-lg gap-4 cardStyle items-center flex `
    }
    else if(props.page=='actual'){
            flexStyle= 'flex-col flex sm:items-center items-start body gap-1 md:w-full flex-wrap lg:flex-nowrap'
    }
    else{
        flexStyle= `flex flex-row sm:items-center items-center body gap-1 md:w-full  flex-wrap lg:flex-nowrap`
        cardStyle=`md:w-full text-xl sm:bg-white/50 sm:shadow-md lg:p-4 p-2 rounded-lg text-sm gap-4 cardStyle items-center flex `
    }

    if(props.page=='actual'){
        estilo_cnt_campo+="  items-center"
    }
    else{
        estilo_cnt_campo+=" items-end "
    }
   return(              
        <div className={cardStyle}> 
            <div className={flexStyle}>
                {detalleKeys?.map((item,i)=>{
                
                const existeClave = Object.keys(props.elem).indexOf(item.key!==-1)   
                const icono = iconos.find((elem)=> elem.key == item.key) 
                const anteUltimo= detalleKeys.length-2

                return(
                    <div className={`flex ${i>=anteUltimo? 'mx-0': 'lg:mx-2 mx-1'} gap-1 items-center ${props.page=='actual'? 'w-full py-2 last:border-0 border-b border-neutral-600' : ''}`}>                    
                    <div className='text-zinc-700'>
                        {icono ? icono.icono : null }
                    </div>  
                      { existeClave ?                         
                          <div className={estilo_cnt_campo}>                             
                            <p className={`${item.style || '' } mx-1 text-nowrap`}>
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
