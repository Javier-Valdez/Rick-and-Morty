
/* for (i=0; i < fotos.length; i++){
    document.write(`<img src="${fotos[i]}" alt="foto1" >`)
} */

var cad= `<div class="container">`

for (let i=0; i < data.length; i++){
    cad += `
    <div class="tarjeta">
        <img src="${data[i].image}" alt= "foto">
        <div class="datos">
            <h4>Nombre: ${data[i].name}</h4>
            <p>ID: ${data[i].id}</p>
            <p>Genero: ${data[i].gender}</p>
            <p>Especie: ${data[i].species}</p>
            <p>Estado: ${data[i].status}</p>
            <p>Creado: ${data[i].created}</p>
        </div>   
    </div>
    `
}

cad += `</div>`;

document.write(cad)