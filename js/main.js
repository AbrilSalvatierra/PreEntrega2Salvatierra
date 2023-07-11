let carrito = [];
let total = 0;
let agregar = confirm("¿Desea agregar un producto al carrito?");
let opcion;

const pedirProducto = () => {
	let nombreDelProducto = prompt("¿Qué producto desea agregar? Menu: Curry de Tomate - Milanesa con Pure - Rollos Primavera - Crispy Pork - Singaporean Noodles");
    let productoElegido = productos.find((producto) => producto.nombre === nombreDelProducto);
    
    while (!productoElegido) {
		alert("Producto no encontrado.");
		nombreDelProducto = prompt("¿Qué producto desea agregar?");
		productoElegido = productos.find((producto) => producto.nombre === nombreDelProducto);
	}
	
    alert(`El producto '${productoElegido.nombre}' tiene un costo de $${productoElegido.precio}`);
	
    return productoElegido;
};

const mostrarCarrito = () => {
	let mensaje = "";
	carrito.forEach((producto) => {
		mensaje += `Producto: ${producto.nombre} ---------------------------------------- $${producto.precio}\n`;
	});
	mensaje += `Total: $${total}`;
	alert(mensaje);
};

while (agregar) {
	const producto = pedirProducto();
	total += producto.precio;
	carrito.push(producto);
	agregar = confirm("¿Desea agregar otro producto?");
}

if (total > 0) {
	mostrarCarrito();
} else {
	alert("¡Qué tenga un buen día!");
}