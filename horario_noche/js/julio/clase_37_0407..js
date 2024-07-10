/* En esta ocasión tienes una lista de clientes, cada cliente es un objeto 
con atributos: 
    nombre, email, telefono.
Se quiere crear una clase Factura para gestionar las facturas emitidas a los clientes. Las propiedades de esta clase son

idCliente: número de cliente (su lugar en la lista de clientes)
total: número con el importe total de la factura
estado: pagada o pendiente
Los métodos serán

cobrar(): pone el estado en pagada.
info(): imprime los datos de la factura.

Para probar crea tres clientes y al menos una factura.

Podemos tener los siguietnes clientes

Juan, juan#mail.com, 3456718
Marisa, marisa@mail.com, 5556123
Luis, luis@mail.com, 2354322

Emitimos una factura al cliente 1, o sea, a Luis. el importe es 300 euros. Si se imprime factura.estado saldrá "pendiente".

Depués de hacer factura.pagar() al imprimir factura.estado saldrá "pagada".*/

// const customers = new Array(3);
const customers = [];

class Customer{
    constructor(name, email, tel) {
        this.name = name;
        this.email = email;
        this.tel = tel;
    }
}
/*
customers[0] = new Customer('Juan', 'juan@gmail.com', '3456718');
customers[1] = new Customer('Marisa', 'marisa@gmail.com', '5556123');
customers[2] = new Customer('Luis', 'luis@gmail.com', '2354322');
customers[3] = new Customer('Patty', 'patty@gmail.com', '234564322');
customers[4] = new Customer('Rosa', 'rosa@gmail.com', '234564322');
*/

const agregarCliente = () => {
    let name = prompt("Nombre del Cliente");
    let email = prompt("Email del cliente");
    let tel = prompt("Telefono del cliente");
    const customer =  new Customer(name, email, tel);
    customers.push(customer);
}

agregarCliente();
agregarCliente();
agregarCliente();
agregarCliente();

class Factura{
    constructor(idCustomer, total, listCustomers){
        this.customer = listCustomers[idCustomer];
        this.total = total;
        this.status = 'Pendiente';
    }

    cobrar = function(){
        this.status = 'Pagada';
    }

    info(){
        document.write(`
            <div>Factura a nombre de: <b>${this.customer.name}</b></div>
            <div>Correo: <b>${this.customer.email}</b></div>
            <div>Telefono: <b>${this.customer.tel}</b></div>
            <div>Total: <b>${this.total}$</b></div>
            <div>Estado de la factura: <b>${this.status}</b></div>
        `);
    }
}

const facturas = [];
/*
facturas[0] = new Factura(2, 300, customers);
facturas[1] = new Factura(0, 300, customers);
facturas[2] = new Factura(1, 300, customers);
*/
for(let i = 0; i < customers.length; i++){
    facturas[i] = new Factura(i, 300, customers);
}

for(let i = 0; i < facturas.length; i++){
    facturas[i].info();
    document.write('<hr>')
}

console.log(facturas.length);
console.log(customers);





