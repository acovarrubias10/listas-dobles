import Producto from './producto.js'
import Inventario from './inventario.js'

const inventario = new Inventario();

//Botones
const btn1 = document.getElementById('btn1');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
btn1.addEventListener('click', validarDatos);
btn3.addEventListener('click', borrarProducto);
btn4.addEventListener('click', borrarPrimerProducto);
btn5.addEventListener('click', buscarProducto);
btn6.addEventListener('click', listarProducto);
btn7.addEventListener('click', listarInvertido);

function validarDatos() {
    const codigo = document.querySelector('#codigo').value;
    const nombre = document.querySelector('#nombre').value;
    const descripcion = document.querySelector('#descripcion').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    const costo = Number(document.querySelector('#costo').value);
    if(codigo === '' || nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
        console.log('Asegúrate de llenar todos los espacios');
    } else if( isNaN(cantidad) || cantidad <= 0) {
        console.log('Asegúrate de llenar todos los espacios');
    } else if( isNaN(costo) || costo <= 0) {
        console.log('Asegúrate de llenar todos los espacios');
    } else {
        const producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.agregarProducto(producto);
        console.log('El producto ha sido agregado de manera exitosa');
        console.log(inventario);
    }
}


function borrarProducto() {
    let producto = document.querySelector('#productoborrar').value;
    inventario.borrarProducto(producto);
    console.log(inventario);
}

function borrarPrimerProducto() {
    inventario.borrarPrimerProducto();
}

function buscarProducto() {
    let producto = document.querySelector('#productobuscar').value;
    console.log(inventario.buscarProducto(producto));
}

function listarProducto() {
    inventario.listarProductos()
}

function listarInvertido() {
    console.log(inventario.listarProductosInvertido());
}