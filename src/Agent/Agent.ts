import { Employee } from "../Employee/Employee";

export class Agent extends Employee {
  amountOfEmployees: number;

  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName, salary);
    this.amountOfEmployees = 0;
  }

  getSalary(): string {
    this.salary *= this.amountOfEmployees;
    return super.getSalary();
  }
}
