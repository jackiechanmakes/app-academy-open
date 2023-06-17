const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        // multiplier = 1;
        let bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }

    _totalSubSalary() {
         let sum = 0;

         for (let i = 0; i < this.employees.length; i++) {
            let employee = this.employees[i];

            sum += employee.salary;


            if (employee instanceof Manager) {
                sum += employee._totalSubSalary();
            }
         }

         return sum;
    }
}

try {
    module.exports = Manager;
  } catch {
    module.exports = null;
  }
