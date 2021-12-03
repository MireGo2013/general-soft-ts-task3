import {Manager} from "./Manager/Manager";
import {Agent} from "./Agent/Agent";
import {Workman} from "./Workman/Workman";
import {Employee} from "./Employee/Employee";


const showSalary = (employee: Employee): void => {
    console.log(`${employee.firstName} ${employee.lastName} has salary ${employee.getSalary()}`)
}


const sam = new Manager('Sam', 'Winchester', 1600)
const din = new Agent('Din', 'Winchester', 110)
const bob = new Workman('Bob', 'Singer', 6)

din.amountOfEmployees = 8
bob.workingHours = 174

showSalary(sam)
showSalary(din)
showSalary(bob)