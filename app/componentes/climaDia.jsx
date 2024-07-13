
import { fetchClima } from '@/app/data/dataClima';
import React from 'react'
import Image from "next/image";
import { pathImg } from '@/configuracion/environment';

const ClimaDia = async (props) => {

    
    const dataclima= await fetchClima('current')

   
    const fecha=new Date()
    const dia= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} `
   
    return (
        <div className="relative min-h-80 min-w-80 p-3">
            <p>{dia}</p>
        </div>
        
    )
}

export default ClimaDia
