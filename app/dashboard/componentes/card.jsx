
import { fetchClima } from '@/app/data/dataClima';
import React from 'react'
import Horas from './horas';

const Card = async () => {

   
    const dataclima= await fetchClima()
    const cardStyle='bg-white shadow-md p-4 rounded-lg'
    

    const current= dataclima?.current
    const wind= current.wind

    return (
        <>
            <div className={cardStyle}>
                <h3>Tiempo actual</h3>
                <div>{current?.summary}</div>
                <div>Temperatura : {current?.temperature}</div>
                <div>Viento : {wind?.speed} km/h Direccion {wind?.dir}</div>
                <div>Precipitaciones: {current?.precipitation?.total}</div>
            </div>
            <Horas data={dataclima}/>
        </>
        
    )
}

export default Card
