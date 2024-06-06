
import { fetchClima } from '@/app/data/dataClima';
import React from 'react'
import { IoIosSunny  } from "react-icons/io";


const Card = async (props) => {

   const cardKeys=[{key:'temperature', u:'°C'}, {key:'temperatureApparent', u:'°C'}, {key:'humidity',u:'%'}, {key:'precipitationProbability',u:'%'}, {key:'windDirection', u:'°'}, {key:'windDirection', u:'m/s'}]

   const cardStyle='bg-white/50 shadow-md p-4 rounded-lg text-sm flex h-fit flex-1  p-4 text-indigo-600 w-1/3 gap-4 '
console.log(props.elem)
 
   return (
                <div className={cardStyle}>
                    <IoIosSunny className="size-9" />
                   
                    <div className='flex-col'>            
                        {cardKeys.map((item)=>{
                        const existeClave=  Object.keys(props.elem).indexOf(item.key!==-1)
                        {
                            props.hour?
                            props.hour
                            :
                            props.fecha ? props.fecha : null
                        }  
                        return(
                            existeClave ?
                            <p>{`${item.key} : ${props.elem[item.key]} ${item.u}`}</p>
                            :
                            <></>
                        )
                        })}
                    </div>
                </div>         
    )
}

export default Card
