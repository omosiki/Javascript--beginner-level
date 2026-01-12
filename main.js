console.log('hello world');
console.error('this is an error')

const name = 'sikirat'
const age = 30
const rating = 4.5
const isCool = true
const y = undefined

console.log(typeof y)
//  concatinatio
console.log('my name is' + name + ' and i am '+ age + 'old' )
console.log(`my name is ${name} and i am ${age} old`)

// array variable that hld multiple number

const fruit = ['apple', 'orange','pears', 'cows']
fruit[9] = 'fish'
console.log(fruit);
fruit.push('fufu')
fruit.unshift('cowbbers')
fruit.pop()  

console.log(Array.isArray(fruit))
// To get the index
console.log(fruit.indexOf('pears'))



// obejet 
const person = {
    firstName: 'Abdulbaqi',
    lastName: 'Aminu',
    age :30,
    hobbies:['askar', 'quran reciatation', 'sleeping'],
    address: {  
        street: '20 main gate',
        city: 'suleja',
        state: 'niger'
    }


}
console.log(person.hobbies, person.lastName, person.firstName)
console.log(person.address.state)

const {firstName, lastName, address: {city}} = person
console.log(city)

// Array
const todos = [
    {
        id: 1 ,
        text: 'Take out the trash',
        isCompleted: true
    },

    {
        id: 2 ,
        text: ' meating with boss',
        isCompleted: true
    },
    {
        id: 3 ,
        text: ' trash',
        isCompleted: false
    }
]
console.log(todos[1].text)

const todoJsan = JSON.stringify(todos )
console.log(todoJsan)

// simple for loop

 for(let i = 0; i <= 20; i++){
    console.log(i)
 } 
//  while loop

// examples with  todos
for(let i = 0; i < todos.length; i++){
    console.log(todos[1].text)
}

// afrup loop
for(let todo of todos){
    console.log(todo.text)
}
// high order arry method
// foreach, map, filter
todos.forEach(function(todo){
      console.log(todo.text)
})
// map
const todoText = todos.map(function(todo){
    return todo.text
} )
console.log(todoText)
// filter
const textCompleted = todos.filter(function(todo){
    return todo.isCompleted === true
} ).map(function(todos){
    return todos.text
})
console.log(textCompleted)

// conditonal

const x = 4;
const m  = 10;
if (x === 10){
    console.log('x is 10')
}else if(x > 10){
    console.log('x is greater than 10')
}else{
    console.log('x is less 10')
}

// if (x > 5  || m > 10){
//     console.log('x is more than 5 or m is more than 10')
// }
// itenary
const colol = x < 10 ? 'red': 'blue';
console.log(colol)
// switch
switch(colol){
    case 'red':
    console.log('color is red')
    break;
    case 'blue':
    console.log('color is blue')
    break;
    default:
        console.log('color is not blue or red')
        break;
}


// Function
function addNums(num1 = 5, num2 = 9){
    // console.log(num1 +
        //  num2)
         
}
console.log(addNums(6, 8));

// construtive or con function 

function groupName(Name, surName, dob){
    this.Name = Name;
    this.surName = surName; 
    this.dob = new Date(dob);
 
}
// the best way to do it yousing prototype
    groupName.prototype.getBirthYear = function(){
         return this.dob.getFullYear()
    }
    groupName.prototype.getFullName =  function(){
         return `${this.Name} ${this.surName}`
    }
// class
// class groupName{
//     constructor(Name, surName,dob){
//           this.Name = Name;
//     this.surName = surName; 
//     this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear()
//     }
//     getFullName(){
//         return `${this.Name} ${surName}`
//     }
// }

// instantiate object
const person1 = new groupName( 'Nuru', 'Idris','2-3-2006');
const person2 = new groupName( 'lala', 'Idris','2-3-2006');

console.log(person1.getBirthYear());
console.log(person2.getFullName())
