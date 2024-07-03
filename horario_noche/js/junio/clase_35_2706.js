/*
Ejercicio #1
Construye una clase para implementar una cuenta de efectivo. 
Poseerá dos propiedades: 
- Nombre del titular 
- Saldo.
Además debe tener dos métodos: 
 ingresar() y retirar(). 
 El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. 
 No se puede sacar más de lo que exista en el saldo. 
*/

class Cuenta{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    ingresar(cantidad){
        //this.saldo = this.saldo + cantidad;
        this.saldo += cantidad;
        document.write(`
            <div>
                Monto Ingresado <b>${cantidad}$</b> Saldo total <b>${this.saldo}$</b>
            </div>
        `);
    }
    retiro(cantidad){
        document.write(`
            <div>
                Saldo Disponible <b>${this.saldo}$</b>
            </div>
        `);

        const resp = prompt("Estas seguro que quieres retirar " + cantidad + "$");

        if(resp === "si" || resp === "Si" || resp === "Si"){
            if(cantidad <= this.saldo){
                //this.saldo = this.saldo - cantidad
                this.saldo -= cantidad;
                document.write(`
                    <div>
                        Se ha retirado <b class="retiro">${cantidad}$</b>
                    </div>
                    <div>
                        Saldo Disponible <b>${this.saldo}$</b>
                    </div>

                `);
            }else{
                alert("No se puede retirar mas del saldo disponible " + this.saldo+"$");
            }
        }
    }
}
/*
const cuenta1 = new Cuenta('Jesus', 0);

cuenta1.ingresar(30);
cuenta1.ingresar(10);
cuenta1.ingresar(40);

cuenta1.retiro(120);
*/


// Herencia

class Animal{
    constructor(nombre, edad, tipo){
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
}

class Leones extends Animal{
    constructor(nombre, edad, tipo){
        super(nombre, edad, tipo);
        this.info = `
            <div>Nombre: <b>${this.nombre}</b></div>
            <div>Edad: <b>${this.edad}</b></div>
            <div>tipo: <b>${this.tipo}</b></div>
        `;
    }
    hablar(){
        alert("Rugidooo");
    }
}


class Aves extends Animal{
    constructor(nombre, edad, tipo){
        super(nombre, edad, tipo);
        this.info = `
        <div>Nombre: <b>${this.nombre}</b></div>
        <div>Edad: <b>${this.edad}</b></div>
        <div>tipo: <b>${this.tipo}</b></div>
    `;
    }
    volar(){
        alert(`El ${this.nombre} está volando`);
    }
}

/*
const leon1 = new Leones('león', 3, "felino");
leon1.hablar();
document.write(leon1.info);

const ave1 = new Aves("colibri", 1, 'Ave');
ave1.volar();
document.write(ave1.info); 
*/

/*Ejercicio #2
Escriba un programa JavaScript que cree una clase llamada 'Empleado'.
propiedades:
-nombre 
-salario 
Incluya un método para calcular el salario anual.

Cree una subclase llamada 'Gerente' que herede de la clase 'Empleado' y agregue una propiedad adicional para el departamento.

Anule el método de cálculo de salario anual para incluir bonos para los gerentes. 
Cree dos instancias de la clase 'Gerente' y calcule su salario anual.
*/

class Empleado{
    constructor(nombre, salario){
      this.nombre = nombre;
      this.salario = salario;
    }

    salarioAnual(){
        return this.salario * 12;
    }
}


class Gerente extends Empleado{
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }
    salarioAnual(){
        let porcentajeBono = 0.1;
        let salarioBase = this.salario * 12;
        let bono = salarioBase * porcentajeBono;

        return  salarioBase + bono + "<br>";
    }

}

const gerentePatty = new Gerente('Patty', 3000, 'tecnología');
document.write(gerentePatty.salarioAnual());


const gerenteCarlos = new Gerente('Carlo', 2000, 'RRHH');
document.write(gerenteCarlos.salarioAnual());

const empleadoJesus = new Empleado('Jesus', 5000);
document.write(empleadoJesus.salarioAnual());