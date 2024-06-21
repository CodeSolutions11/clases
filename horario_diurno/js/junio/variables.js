// 1. Declaración y exportacion
/*
export const saludo = 'Hola desde un módulo';
export let nro = 25;
export class employee{};
export const math = (n1, n2)=>{};
*/

// .2 Exportar post-declaracion
/*
const saludo = 'Hola desde un módulo';
let nro = 25;
class Employee{};
/*
export { saludo as talk};
export {nro};
export {Employee as Empleado};


export {
    saludo,
    nro,
    Employee,
    nro as numero
};*/

// 3. Exportacion por defecto
const number = 27;
export const suma = (n1, n2) => n1+n2;
export const name = "Jesus";


export default suma;