
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
    showAlert()
    // messageG.textContent = 'Still a child'
    // setTimeout(() => messageG.remove(), 3000)
}else if ( birthYear > m){
    window.location.href = 'inquaryForm.html';
 }else{
    console.log('error')
 }   
     function showAlert() {
    Swal.fire({
    title: 'UnderAge!',
    text: 'Applicant must be above 18 years.',
    icon: 'warning',
    confirmButtonText: 'OK'
  });
}

})

    








