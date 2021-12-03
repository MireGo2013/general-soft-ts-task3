import { Manager } from "./Manager/Manager";
import { Agent } from "./Agent/Agent";
import { Workman } from "./Workman/Workman";
var sam = new Manager('Sam', 'Winchester', 1600);
var din = new Agent('Din', 'Winchester', 110);
var bob = new Workman('Bob', 'Singer', 6);
console.log(sam);
