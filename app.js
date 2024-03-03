// alert()
// prompt()


// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

// function greetUser(){
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// }

// greetUser()
// greetUser()



// function greetUser(username , lastname , age){
//     console.log('hello' + username + lastname + age);
// }

// greetUser('fahad' , 'khan' , 19)
// greetUser('sir' , 'abdullah' , 20)


// number sum project 
// function sum(num1 , num2){
//     console.log('sum of two number ===>' , num1 + num2)
// }

// sum(20 , 30)
// sum(67 , 22)


// // local variable function
// function greetUser(){
//     var username = 'fahadkhan'
//     console.log(username);
// }

// greetUser()

// function showString(){
//     console.log('hello world')
//     return 'muhammadfahad'
// }

// // showString()
// var myfunc = showString()
// console.log(myfunc);



// percentage project started 

// function percentage(marks1 , marks2 , marks3 , marks4){
//     var totalMarks = 400;
//     var obtainedMarks = marks1 + marks2 + marks3 + marks4
//     return obtainedMarks / totalMarks * 100
// }

// var usmanpercentage = percentage(22 , 33 , 45 , 80);
// console.log(usmanpercentage);

var head = document.querySelector('.head');
console.log(head.innerHTML);
head.innerHTML = 'changed through js'
console.log(head.innerHTML);

var para = document.querySelector('#para');
console.log(para.innerHTML);
para.innerHTML = 'changed through js'
console.log(para.innerHTML);







function changetext(){
para.innerHTML = 'changed through js'
head.innerHTML = 'changed through js'
if(para.innerHTML === 'changed through js' && head.innerHTML === 'changed through js'){
    para.innerHTML = ' Lorem ipsum dolor sit.'
    head.innerHTML = 'Hello Functions'
}else{
    para.innerHTML = 'changed through js'
    head.innerHTML = 'changed through js'
}
}
