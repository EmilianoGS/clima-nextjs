'use client';
import React from 'react'
import { IoIosSunny, IoIosRainy, IoMdRainy } from "react-icons/io";
import { PiWindLight } from "react-icons/pi";
import { BsMoisture } from 'react-icons/bs'

const Card3 = async (props) => {

    const maxminKeys=[
       {key:'maxTemp', u:'°C', style: 'text-xl text-red-600'},
       {key:'minTemp', u:'°C', style: 'text-xl text-sky-500'},
    ]

    const cardStyle='bg-white/50 shadow-md p-4 rounded-lg text-sm grow p-4 gap-4'
   
   return(              
        <div className={cardStyle}>            
            <div className='flex-col grow'>
                Max/Min
                {maxminKeys.map((item, i)=>{
                const existeClave = Object.keys(props.elem).indexOf(item.key!==-1)                         
                return(
                    <>
                      { existeClave ?
                          <p className={item.style || '' }>
                            {` ${props.elem[item.key]} ${item.u} `}</p>
                          :
                          <></>
                      }
                    </>
                )
                })}
            </div>
        </div>                       
    )
}

export default Card3
