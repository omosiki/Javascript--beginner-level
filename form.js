
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
    const messageG = document.getElementById('error')

if  ( birthYear < x ){
    messageG.textContent = 'Still a child'
    setTimeout(() => messageG.remove(), 3000)
}else if ( birthYear > m){
    window.location.href = 'inquaryForm.html';
 }else{
    console.log('error')
 }   

})
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








