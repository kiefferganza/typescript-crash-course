"use strict";
let fullname = 'kieffer';
let isTrue = true;
let ids = [1, 2, 3, 4, 5, 'kieffer'];
//tuple
let person = [1, 'a', true];
//tuple arr
let emp;
//union
let id = 22;
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    name: 'kieffer',
    age: 3
};
//type assertion
let cid = 1;
let customerId = cid;
//functions 
function addNum(x, y) {
    return x + y;
}
const User1 = {
    id: 1,
    name: 'kieffer'
};
const add = (x, y) => x + y;
//classes
class Person {
    constructor(id, name) {
        this.id = id + 1;
        this.name = name;
    }
    register() {
        return `${this.name} is now fucking registered as a Person`;
    }
}
const test = new Person(123, 'kieffer');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employee = new Employee(3, 'Kieffer CLone', 'Dev');
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['k1', 'k2', 'k3']);
