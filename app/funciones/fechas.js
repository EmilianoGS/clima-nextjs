export  const mes = (fecha=null) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const today = fecha!== null? new Date(fecha) : new Date();
    return months[today.getMonth()];
};

export const dia = (fecha=null) => {        
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const today = fecha!== null? new Date(fecha) : new Date();  
    return daysOfWeek[today.getDay()];
};
 
export const fecha = (fecha=null) => {
    const today = fecha!== null? new Date(fecha) : new Date();
    const day = today.getDate();
    const month = mes(); // Los meses en JavaScript van de 0 a 11
    const year = today.getFullYear();

    return `${day} de ${month} de ${year}`;
  };