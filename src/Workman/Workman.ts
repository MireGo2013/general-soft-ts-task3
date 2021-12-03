import { Employee } from "../Employee/Employee";

export class Workman extends Employee {
  workingHours: number;

  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName, salary);
    this.workingHours = 0;
  }

  getSalary(): string {
    this.salary *= this.workingHours;
    return super.getSalary();
  }
}
