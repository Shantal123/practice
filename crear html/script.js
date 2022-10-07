window.onload = (event) => {

};

function crearTarjeta(){

    const contenedor = document.getElementById("cards");

    //crear div
    const card = document.createElement('div');

    //crear h2
    const titulo = document.createElement('h2');
    titulo.textContent += 'SOY UNA TARJETA JS';
    //crear span
    const bar = document.createElement('span');


    //donde se van a crear
    contenedor.appendChild(card);
    card.appendChild(titulo);
    card.appendChild(bar);

    card.classList.add('card','salir');
    bar.classList.add('bar');

    //delay de animacion
    setTimeout(()=>{
        card.classList.remove('salir')
    },500);

    // console.log(card);

}
