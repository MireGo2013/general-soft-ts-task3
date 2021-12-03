import { Employee } from "../Employee/Employee";

export class Manager extends Employee {
  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName, salary);
  }
}
