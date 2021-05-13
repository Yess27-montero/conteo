const contador = () => {
    const fechadeseada = new Date ('August 27, 2021 00:00:00').getTime();
    const fechahoy = new Date ();
    const diferencia = fechadeseada - fechahoy;
    console.log(diferencia);

    //Cálculos
    const segundos = 1000; 
    const minutos = segundos * 60; 
    const horas = minutos * 60; 
    const dias = horas *24; 

    //Resultados 
    document.querySelector('#dias').innerHTML = Math.floor(diferencia /dias);
    document.querySelector('#horas').innerHTML = Math.floor((diferencia % dias) / horas);
    document.querySelector('#minutos').innerHTML = Math.floor((diferencia % horas) / minutos);
    document.querySelector('#segundos').innerHTML = Math.floor((diferencia % minutos) / segundos);
     


} 
setInterval(contador, 1000);

