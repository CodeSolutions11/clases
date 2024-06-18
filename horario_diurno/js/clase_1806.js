const clientes = new Array(3);

class Cliente{
    constructor(nombre, email, telefono){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

class Factura{
    constructor(id, total, listaClientes){
        this.cliente = listaClientes[id];
        this.total = total;
        this.estado = "Pendiente"
    }

    cobrar(){
        this.estado = "Pagada"
    }

    imprimir(){
        document.write(`
            <b>Factura a nombre de:<b>  <span>${this.cliente.nombre}</span>
            <b>Total:<b>  <span>${this.total}$</span>
            <b>Estado:<b>   <span>${this.estado}</span><br>
        `)
    }
}


clientes[0] = new Cliente('Juan', 'juan@mail.com', '0414-111-2233');
clientes[1] = new Cliente('Marisa', 'marisa@mail.com', '0414-111-2233');
clientes[2] = new Cliente('Luis', 'luis@mail.com', '0414-111-2233');

const factura1 = new Factura(0, 300, clientes);
factura1.imprimir()
document.write(`<span>${factura1.estado}</span><br>`);

factura1.cobrar();
document.write(`<span>${factura1.estado}</span>`);




/*
const nombres = new Array(3);

nombres[0] = {Nombre: "jesus", Email:"Jesus@gmail.com", Telefono: "0412-222-3344"};


nombres[2] = "Mrecedes";

console.log(nombres[0].Telefono);
*/
/*
const alumnos = new Array(3);

class Alumno{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const alumnos1 = new Alumno("Ewil", 20)

console.log(alumnos)

*/

// function saludar(nombre){
//     alert("hola " + nombre)
// }

// saludar()