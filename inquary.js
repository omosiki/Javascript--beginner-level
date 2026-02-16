  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  import {getDatabase, ref,push} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCgza0d-lKQpGrueF-iNr04_ljQhTHReY0",
    authDomain: "myformapp-69208.firebaseapp.com",
    databaseURL: "myformapp-69208-default-rtdb.firebaseio.com",
    projectId: "myformapp-69208",
    storageBucket: "myformapp-69208.firebasestorage.app",
    messagingSenderId: "72313525026",
    appId: "1:72313525026:web:4cbc8268d3347a9594cb7b",
    measurementId: "G-KKN98E23D3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database =  getDatabase(app)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional







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
    // Create  a function to save to firebse
function saveTofireBase(formData){
    const formRef = ref(database, "submissions")
    push(formRef,{
        fullName: formData.fullNameValue,
        emailAddress: formData.emailValue,
        phoneNumber: formData.phoneValue,
        companyS : formData.companySValue,
        courseStudy: formData.courseValue,
        messageInput : formData.messageValue,
        dateTime: formData.datetimeValue,
        checkBox: formData.checkboxValue,
        createdAt: Date.now()
    })
    .then(( ) => {
        console.log("Data saved to firebase")
    })
    .catch((error) => {
        console.error("Errorsaving to firebase:", error)
    })
}
    
document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.getElementById('myform')

    myForm.addEventListener('submit', function(event){
    event.preventDefault();
        
        console.log("Form submitted")

         const collectedData = collectFormData();
        saveTofireBase(collectedData)
          showAlert()
        
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
