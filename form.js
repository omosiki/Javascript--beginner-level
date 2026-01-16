const myform = document.getElementById('myform')
const container = document.getElementById('container')
 const age = document.getElementById('age')
const btn = document.getElementById('btn');

  // create aform data
      // Create a FormData object from the for
      const formData = new formData(myform)
      const ages = formData.get('age')
      console.log(ages)
                    

const x = 18
const m = 20
myform.addEventListener('submit', function(e){
    e.preventDefault()

  
if  (age < x ){
    console.log('still a child')
}else if (age > m ){
    console.log('Welcome')
}else{
    console.log('error')
}   
    
})

