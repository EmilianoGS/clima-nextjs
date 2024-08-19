'use client';
import React from 'react'
import { IoIosSunny, IoIosRainy, IoMdRainy } from "react-icons/io";
import { CiCloudOn } from "react-icons/ci";

const Card1 = async (props) => {

    const ppalKeys=[
       {key:'temperature', u:'°C', style: ''},
       {key:'temperatureApparent', u:'°C', style: ''},
    ]
     
    const iconosLluvia= [
        {ico: <IoIosSunny />, porc: 0},
        {ico: <IoMdRainy />, porc: 50},
        {ico: <IoIosRainy />, porc: 75} 
    ]  

    function asignarIconoPorcentajeLluvia(probLluvia) {        
        return iconosLluvia.reduce((iconoMasCercano, icono) => {
        const diferencia = Math.abs(probLluvia - icono.porc);
        const diferenciaActual = Math.abs(probLluvia - iconoMasCercano);
        return diferencia < diferenciaActual || 
                (diferencia === diferenciaActual && icono.porc > 0)
                ? icono.porc
                : iconoMasCercano;
        }, iconosLluvia[0].porc);
    }

    const iconoPorc = asignarIconoPorcentajeLluvia(props.elem?.precipitationProbability ||  0, props.elem?.cloudCover )
    const iconoLluvia= iconosLluvia.find((elm)=> elm.porc == iconoPorc)
    const iconoNub= props.elem?.precipitationProbability < 20 &&  props.elem?.cloudCover>=50

    // var estilo_card1 = '' 
    var estilo_card1=' sm:bg-white/50 shadow-md p-4 rounded-lg xl:p-4  gap-4 cardStyle '
    if(props.page=='actual'){
        estilo_card1+= 'actual_st actual_card bg-white/50 flex-1' 
    }
    else{
        estilo_card1+=' bg-white/10 '
    }
    
    var flexStyle= ''

    if(props.page=='actual'){
        flexStyle= 'flex items-center'
    }
    else if(props.page=='dias' || props.page=='horas' ){
        flexStyle='flex lg:items-end xl:flex-row'
    }
   
    flexStyle+=` body gap-3 flex-col lg:flex-nowrap flex-wrap`

    var estilo_icono = `justify-start lg:justify-center flex-shrink-0 my-2 flex items-center header text-[40px] xl:text-[50px] ${iconoNub || props.elem?.precipitationProbability > 0? 'text-indigo-600' : 'text-orange-500'} px-2 mx-1`

    var estilo_cnt_flex = 'flex'

    if(props.page=='actual'){
        estilo_cnt_flex += ' flex-col flex-1 xl:justify-center justify-end lg:flex-row'
    } 
    else if(props.page=='horas'){
        estilo_cnt_flex += ' flex-row sm:flex-row '
    }

   return(
        <div className={estilo_cnt_flex}>
            <div className={estilo_icono} >
                {iconoNub ? <CiCloudOn/> : iconoLluvia.ico}                            
            </div> 
            <div className={estilo_card1}>
                <div className={flexStyle}>
                    {ppalKeys.map((item, i)=>{
                        const st= item.key=='temperatureApparent' ? 'ST' : ''
                        const existeClave = Object.keys(props.elem).indexOf(item.key!==-1)
                        return(                    
                            <div className='flex'>                        
                                { existeClave ?                        
                                    <p className={`fts${st} ${item.style || ''} text-nowrap`}>
                                        {`${st} ${props.elem[item.key].toFixed(1)} ${item.u}`}
                                    </p>
                                    :
                                    <></>
                                }                    
                            </div>
                        )
                    })}
                </div>
            </div>  
        </div>
    )
}

export default Card1
