const myform = document.getElementById('myform')
const container = document.getElementById('container')
 const age = document.getElementById('age')
const btn = document.getElementById('btn');


                    

const x = 18
    const m = 20
btn.addEventListener('click', function(e){
    e.preventDefault()

    
if  (age < x ){
    console.log('still a child')
}else if (age > m ){
    console.log('Welcome')
}else{
    // console.log('error')
}   
    
})