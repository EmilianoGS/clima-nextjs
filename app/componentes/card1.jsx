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

    const cardStyle=`${props.page}_card bg-white/50 shadow-md p-4 rounded-lg xl:p-4 lg:p-2 gap-4 cardStyle ${props.page}_st ${'flex-grow'} `;

    const flexStyle= `${props.page!=='dias' && props.page!=='horas'? 'flex-col' : 'flex lg:items-end'} body gap-3 lg:flex-row flex-col lg:flex-nowrap flex-wrap `

   return(
        <div className='flex flex-col lg:flex-row'>
        <div className={`justify-start sm:justify-center flex-shrink-0 my-2 flex items-center header text-[40px] xl:text-[50px] ${iconoNub || props.elem?.precipitationProbability > 0? 'text-indigo-600' : 'text-orange-500'} px-2 mx-1`} >
            {iconoNub ? <CiCloudOn/> : iconoLluvia.ico}                            
        </div> 
        <div className={cardStyle}>
            <div className={flexStyle}>
                {ppalKeys.map((item, i)=>{
                const st= item.key=='temperatureApparent' ? 'ST' : ''
                const existeClave = Object.keys(props.elem).indexOf(item.key!==-1) 

                return(
                    
                    <div className='flex'>  
                       
                        {/* {i == 0 ? 
                        : null
                        } */}

                        { existeClave ?                        
                            <p className={`fts${st} ${item.style || ''} text-nowrap`}>
                            {`${st} ${props.elem[item.key].toFixed(1)} ${item.u}`}</p>
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
