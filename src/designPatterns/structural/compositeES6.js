'use strict';

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
    this.name = name;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
}
class Designer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
}

class Organization {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new TypeError();
    }

    this.employees.push(employee);
  }

  getNetSalaries() {
    let netSalary = 0;
    for (let employee of this.employees) {
      netSalary += employee.getSalary();
    }

    return netSalary;
  }
}

const john = new Developer('John Doe', 12000);
const mary = new Designer('Mary Lou', 15000);

const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(mary);

console.log(`Net salaries: ${organization.getNetSalaries()}`);
