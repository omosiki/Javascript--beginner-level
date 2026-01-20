
// Accessing the value of each input fields
  const emailAddress = document.getElementById('email')
    const phoneNumber = document.getElementById('phone')
    const companyS = document.getElementById('company')
    const courseStudy = document.getElementById('subject')
    const messageInput = document.getElementById('message')
    const inquaryType = document.getElementById('inquiry-type')
    const dateTime = document.getElementById('preferred-contact')
    const attactmentData = document.getElementById('attachment')
    const checkBox = document.getElementById('consentCheckbox')

    function collectFormData (){

        const  attachmentFiles = attactmentData.files;
        const data = {
            emailValue: emailAddress.value,
            phoneValue : phoneNumber.value,
            companySValue : companyS.value,
            courseValue : courseStudy.value,
            messageValue : messageInput.value,
            inquaryValue : inquaryType.value,
            datetimeValue : dateTime.value,
            attachmentValue : attachmentFiles,
            firstAttachment : attachmentFiles[0],
            checkboxValue : checkBox.checked
     
        }
        console.log(data)
        return data
    }

    
document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.getElementById('myform')

    myForm.addEventListener('submit', function(event){
    event.preventDefault();
        
  

        console.log("Form submitted")
        collectFormData()
        showAlert()
        
    })
    function showAlert() {
    Swal.fire({
    title: 'Success!',
    text: 'You successfully used SweetAlert2 in your project!',
    icon: 'success',
    confirmButtonText: 'Cool'
  });
}

})








