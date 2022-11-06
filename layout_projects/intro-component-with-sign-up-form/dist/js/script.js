function checkName(firstname) {
    if (!firstname) return;
    const onlyLetters = firstname.split('').some(str => /\d/.test(str));
    const firstLetterUpperCase = (firstname[0] === firstname[0].toUpperCase());

    if (!onlyLetters) {
        return 'Name can only include letters';
    } else if(!firstLetterUpperCase) {
        return 'First letter of name must be uppercase';
    }
}

function checkEmail(email) {
    
    const firstPart = email.split('@');
    console.log('firstpart =', firstPart);
    if (firstPart.some(str => str.length < 4)) {
        return 'Your email is too short';
    }
}

function checkPassword(password) {
    console.log('password =' , password);
    if (password.length < 8) {
        return 'Your password must be >= 8 symbols';
    }
}

function appendList(messages) {
    
    let ul = document.getElementById("error-messages");
    ul.innerHTML = '';
    messages.forEach(message => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(message));
        ul.appendChild(li);
    });
}

const firstName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


form.addEventListener('submit', e => {
    
    let v1 = checkName(firstName.value);
    let v2 = checkEmail(email.value);
    let v3 = checkPassword(password.value);
    console.log('vars = ', v1,v2,v3)
    let errorMessages = [
        v1,v2,v3
    ];
    console.log(errorMessages)

    let validatingMessages = errorMessages.filter(i => i);
    
    if (validatingMessages.length > 0) {
        appendList(validatingMessages);
        e.preventDefault();
    }
    
})