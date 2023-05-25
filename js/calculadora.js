
const botones = document.querySelectorAll('.botonera button');
const display = document.querySelector('#display');

// for (let boton of botones) {
//     boton.addEventListener('click', calcular);
// }
// este foreach hace lo mismo que el forof de antes
botones.forEach(boton => boton.addEventListener('click', calcular));

function calcular(event) {
    if (event.target.id === 'reset') {
        display.value = '';
    } else if (event.target.id === 'igual') {
        let resultado = eval(display.value); //eval: es una funcion propia que recibe un string cn una funcion matematica y la resuelve
        display.value = resultado;
    } else if (event.target.id !== 'igual') {
        let operacion = event.target.innerText;//del evento que recibo, el objeto que toco, quiero el innertext(su texto)
        display.value += operacion;
    }

}



