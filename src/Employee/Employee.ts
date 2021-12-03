export class Employee {
  firstName: string;
  lastName: string;
  salary: number;
  tax: number;

  constructor(firstName: string, lastName: string, salary: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.tax = 13;
  }

  getSalary(): string {
    return `$${this.salary - (this.salary * this.tax) / 100}`;
  }
}
