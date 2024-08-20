let listaCarrito = [];
// obtiene datos del carrito de las cookies

function chequeaCarrito() {
    var valorCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('listaCarrito='));
    if (valorCookie) {
        listaCarrito = JSON.parse(valorCookie.split('=')[1])
    }
}
chequeaCarrito();
agregarCarritoToHTML();
function agregarCarritoToHTML() {
    // limpia los datos del html
    let listaCarritoHTML = document.querySelector('.retornarCarrito .lista');
    listaCarritoHTML.innerHTML = '';
    let cantidadTotalHTML = document.querySelector('.cantidadTotal');
    let precioTotalHTML = document.querySelector('.precioTotal');

    let cantidadTotal = 0;
    let precioTotal = 0;

    // si el producto esta en el carro
    if(listaCarrito){
        listaCarrito.forEach(producto => {
            if(producto){
                let nuevoProducto = document.createElement('div');
                nuevoProducto.classList.add('item');
                nuevoProducto.innerHTML =
                `<img src="${producto.imagen}" alt="">
                        <div class="info">
                            <div class="nombre">${producto.nombre}</div>
                            <div class="price">¥${producto.precio}</div>
                        </div>
                        <div class="cantidad">${producto.cantidad}</div>
                        <div class="precioRetorno">¥${producto.precio * producto.cantidad}</div>`;
                        listaCarritoHTML.appendChild(nuevoProducto);
                        cantidadTotal = cantidadTotal + producto.cantidad;
                        precioTotal = precioTotal + (producto.precio * producto.cantidad);
            }
        })
    }
    cantidadTotalHTML.innerText = cantidadTotal;
    precioTotalHTML.innerText = '¥' + precioTotal;
}