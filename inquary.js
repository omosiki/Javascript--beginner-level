
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
    event.preventDefault(event);
        
  

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
    text: 'You successfully submited your data!',
    icon: 'success',
    confirmButtonText: 'Cool'
  });
}
})
// function display data on a table
function displayData(){
    const tableData = document.querySelector("#dataTable")
    // get data from local storage
    const alreadySaveData = localStorage.getItem("formData")
    if(!alreadySaveData){
        console.log("No data found")
        return;
    }
    const data = JSON.parse(alreadySaveData)
    // creat table row
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${data.fullNameValue}</td>
        <td>${data.emailValue}</td>
        <td>${data.phoneValue}</td>
        <td>${data.companySValue}</td>
        <td>${data.courseValue}</td>
        <td>${data.messageValue}</td>
        <td>${data.inquaryValue}</td>
        <td>${data.datetimeValue}</td>
         <td>${data.firstAttachment}</td>
         <td>${data.checkboxValue}</td>`
         

    tableData.appendChild(row)
         
}
displayData()


// function save to firebase
function saveToFireBase(){
    const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

}






