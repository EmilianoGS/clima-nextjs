
const today =(fecha)=>{ return (fecha!== null? new Date(fecha) : new Date());}

export  const mes = (fecha=null) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];  
    return months[today(fecha).getMonth()];
};

export const dia = (fecha=null) => {        
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];    
    return daysOfWeek[today(fecha).getDay()];
};
 
export const fecha = (fecha=null) => {   
    const day = today(fecha).getDate();
    const month = mes(); // Los meses en JavaScript van de 0 a 11
    const year = today(fecha).getFullYear();
    return `${day} de ${month} de ${year}`;
 };