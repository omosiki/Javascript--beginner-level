
// const container = document.getElementById('container')
const myform = document.getElementById('myform')

const btn = document.getElementById('btn');

    const x = 18
const m = 20

btn.addEventListener('click', function(e){
    e.preventDefault()
  const ages = document.getElementById('age')
    const birthYear = parseInt(ages.value)
    console.log(birthYear)


if  ( birthYear < x ){
    console.log('still a child') 
}else if ( birthYear > m){
    console.log('Welcome')
 }else{
    console.log('error')
 }   

})









// btn.addEventListener('submit', function(e){
//     e.preventDefault()
//     const realAge = ages.value;
  
// if  ( realAge < x ){
//     console.log('still a child')
// }else if ( m < realAge ){
//     console.log('Welcome')
// }else{
//     console.log('error')
// }   
    
// })

