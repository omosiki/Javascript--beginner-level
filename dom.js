// Dom maniplation
// const ul = document.querySelector('.items');
// // ul.remove()
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'jolly'
// ul.children[1].innerText ='siki';
// // ul.lastElementChild.innerHTML = '<h2>Bye</h2>'
// // style
// const btn = document.querySelector('.btn');

// btn.style.background = 'red';
// even lister
// btn.addEventListener('moseover', (e) => {
//     e.preventDefault();
//     // console.log(e.target)
//     document.querySelector('#my-form').style.background = '#444'
//     document.querySelector('body').classList.add('#000')
//     document.querySelector('items').lastElementChild.innerHTML = '<h2>hello</h2>'
// })

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailIput= document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if (nameInput.value === '' || emailIput.value === ''){
        // msg.classList.add('error')
        msg.innerHTML = 'please enter alll field';
        setTimeout(() => msg.remove(), 3000)

    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailIput.value}`))

        userList.appendChild(li);

        // clear
        nameInput.value = '';
        emailIput.value = ''
    }
}

