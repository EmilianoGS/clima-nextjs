
import { fetchClima } from '@/app/data/dataClima';
import React from 'react'

import Image from "next/image";
import { pathImg } from '@/configuracion/environment';

const ClimaDia = async (props) => {

    
    const dataclima= await fetchClima('current')
    const cardStyle='bg-white/50 shadow-md p-4 rounded-lg my-2 text-base absolute'
    const current= dataclima

    // var porc= Math.floor(current.cloud_cover)
    // switch(porc){
    //     case (porc<100 && porc>80):
    //         porc=100
    //         break;
    //     case (porc<80 && porc>50):
    //         porc=80
    //         break;
    //     case (porc<50 && porc>10):
    //         porc=50
    //         break;
    //     case (porc<10 && porc>0):
    //         porc=10
    //         break;
    // }
    // const wind= current.wind
    const fecha=new Date()
    const dia= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} `
   
    return (
        <div className="relative min-h-80 min-w-80 p-3">
            <p>{dia}</p>
             {/* <Image
                src={`${pathImg}cover${porc}.jpg`}
                fill={true}                   
                className="hidden md:block rounded"
                alt="Screenshots of the dashboard project showing desktop version"
                /> */}

             {/* <div className={cardStyle}>                
                <h3>Tiempo actual</h3>
                <h1>{current?.temperature} °C</h1>
                <div>{current?.summary}</div>
                <div>{current?.cloud_cover}</div>
                <div>Viento : {wind?.speed} km/h Direccion {wind?.dir}</div>
                <div>Precipitaciones: {current?.precipitation?.total}</div>
            </div>  */}
            
        </div>
        
    )
}

export default ClimaDia
