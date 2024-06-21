// Escriba un programa JavaScript que cree una clase llamada 'Empleado' con propiedades para nombre y salario. Incluya un método para calcular el salario anual. Cree una subclase llamada 'Gerente' que herede de la clase 'Empleado' y agregue una propiedad adicional para el departamento. Anule el método de cálculo de salario anual para incluir bonos para los gerentes. Cree dos instancias de la clase 'Gerente' y calcule su salario anual.

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary(){
        return  (this.salary * 12);

    }
}

class Manager extends Employee{
    constructor(name, salary, deparment){
        super(name, salary);
        this.deparment = deparment;
    }
    calculateAnnualSalary(){
        const baseSalary = super.calculateAnnualSalary();

        const bonus = 0.15; //15%
        const managerAnnualSalary = (bonus * baseSalary) + baseSalary;
        document.write(`the ${this.name} salary annual is: ${managerAnnualSalary}$ <br>`);
    }

}

const manager1 = new Manager('Ewil', 5000, 'FrontendDeveloper');
manager1.calculateAnnualSalary();

const manager2 = new Manager('Mercedes', 5500, 'BackendDeveloper')
manager2.calculateAnnualSalary();

const employee1 = new Employee('Jesus', 7000);
document.write(employee1.calculateAnnualSalary());
