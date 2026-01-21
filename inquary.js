
// Accessing the value of each input fields
const fullName = document.getElementById('fullname')
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
            fullNameValue: fullName.value,    
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
    function savetoLocalStorage(formData) {
    try {
        // Convert the form data object into a JSON string
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log("Data saved to localStorage.");
    } catch (error) {
        console.error("Could not save to localStorage:", error);
    }
}
    
document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.getElementById('myform')

    myForm.addEventListener('submit', function(event){
    event.preventDefault();
        
  

        console.log("Form submitted")
        collectFormData()
        showAlert()
        // savetoLocalStorage()
         const collectedData = collectFormData();
    savetoLocalStorage(collectedData)
        
    })
    function showAlert() {
    Swal.fire({
    title: 'Success!',
    text: 'You successfully used SweetAlert2 in your project!',
    icon: 'success',
    confirmButtonText: 'Cool'
  });
}
// const user = {fullName, emailAddress, phoneNumber,companyS , courseStudy,messageInput,inquaryType,dateTime,attactmentData,checkBox}
// function savetoLocalStorage(newUsers){
//     const users = JSON.parse(localStorage.getItem("users")) ||[]
//     if(!Array.isArray(users)){
//         users = []
//     }
//     users.push(newUsers)
//     localStorage.setItem("users", JSON.stringify(users))

// }
   

})








