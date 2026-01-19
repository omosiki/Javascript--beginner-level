// export default {
//   plugins: {
//     '@tailwindcss/postcss': {},
//   },
// };

// const fullName = document.getElementById('fullname')
// const emailAddress = document.getElementById('email')
// const phoneNumber = document.getElementById('phone')
// const university = document.getElementById('institution')
// const courseStudy = document.getElementById('course')
// const messageInput = document.getElementById('message')
// const inquaryType = document.getElementById('inquiry-type')
// const dateTime = document.getElementById('preferred-contact')
// const attactmentData = document.getElementById('attachment')
// const checkBox = document.getElementById('consentCheckbox')


const submitBtn = document.querySelector('submit-btn')

submitBtn.addEventListener('submit', onSubmit);
function onSubmit(){


const fullName = document.getElementById('fullname')
const emailAddress = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const university = document.getElementById('institution')
const courseStudy = document.getElementById('course')
const messageInput = document.getElementById('message')
const inquaryType = document.getElementById('inquiry-type')
const dateTime = document.getElementById('preferred-contact')
const attactmentData = document.getElementById('attachment')
const checkBox = document.getElementById('consentCheckbox')











const nameValue = fullName.value;
const emailValue = emailAddress.value
const phoneValue = phoneNumber.value
const universityValue = university.value
const courseValue = courseStudy.value
const messageValue = messageInput.value
const inquaryValue = inquaryType.value
const datetimeValue = dateTime.value
const attachmentValue = attactmentData.value
const checkboxValue = checkBox.checked
console.log('Fullname:', nameValue)




}