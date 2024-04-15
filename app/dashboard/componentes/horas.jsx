import React from 'react'

const Horas = (props) => {

const data=props.data
  return (
    <div>
        {data?.hourly?.data?.map((hour, i)=>{
            console.log('Hora : ', hour)
            return(
                <>{i}</>
            )
        })}
    </div>
  )
}

export default Horas