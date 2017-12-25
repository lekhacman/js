"use strict";

/**
 * Every organization is composed of employees. Each of the employees
 * has the same features i.e. has a salary, has some responsibilities,
 * may or may not report to someone, may or may not have some subordinates etc.
 *
 * Composite pattern lets clients treat the individual objects in a uniform manner.
 *
 * In software engineering, the composite pattern is a partitioning
 * design pattern. The composite pattern describes that a group of objects
 * is to be treated in the same way as a single instance of an object. The
 * intent of a composite is to "compose" objects into tree structures to represent
 * part-whole hierarchies. Implementing the composite pattern lets clients treat
 * individual objects and compositions uniformly.
 */

class Employee {
    constructor(name, salary) {
        if ((typeof name !== "string") || (typeof salary !== "number")) {
            throw new TypeError();
        }
    }
    getName() {return this.name;}
    setSalary(salary){}
    getSalary(){ return this.salary;}
    getRoles(){}
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
    }
    getRoles() {
        return this.roles;
    }
}
class Designer extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
    }
    getRoles() {
        return this.roles;
    }
}

class Organization {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getNetSalaries() {
        let netSalary = 0;
        for (let e of this.employees) {
            netSalary += e.getSalary();
        }
        return netSalary;
    }
}

const john = new Developer("John Doe", 12000);
const mary = new Designer("Mary Lou", 15000);

const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(mary);

console.log(organization.getNetSalaries());