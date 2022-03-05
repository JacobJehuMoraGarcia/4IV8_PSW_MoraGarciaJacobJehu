const Monto = document.getElementById('Monto')
const Tiempomes = document.getElementById('Tiempomes')
const Cuotainicial = document.getElementById('Cuotainicial')
const btnCalcular = document.getElementById('btnCalcular')
const llenarTabla = document.querySelector('#lista-tabla tbody');

btnCalcular.addEventListener('click', () => {
    calcularCuota(Monto.value, Tiempomes.value, Cuotainicial.value);
})

function calcularCuota(Monto, Cuotainicial, Tiempomes){

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }
  
    let interes=0, Cuotainicial = 0, cuota = 0;

    cuota = Monto * (Math.pow(1+interes)(Tiempomes))-Cuotainicial;

    for(let i = 1; i <= tiempo; i++) {

 
    }
}