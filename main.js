// all elements
const username  =document.querySelector("#username");
const email  =document.querySelector("#email");
const password  =document.querySelector("#password");
const confirmPassword  =document.querySelector("#confirmPassword");
const form  =document.querySelector("#form");
const ShowError = (input, message)=>{
    let parentElement = input.parentElement;
    parentElement.classList ='form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility ='visible';
    small.innerText = message;
    successIcon.style.visibility= 'hidden';
    
}
const ShowSuccess = (input)=>{
    let parentElement = input.parentElement;
    parentElement.classList ='form-control success';
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility ='hidden';
    successIcon.style.visibility= 'visible';
    
}
const checkEmpty = (elements)=>{
    elements.forEach( (element)=>{
        if(element.value === ''){
            ShowError(element, "input required!")
        }
        else{
            ShowSuccess(element);
        }
        
    })
}
const checkEmail = (email)=>{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email.value)){
        ShowSuccess(email)
    }
    else{
        ShowError(email,'invalid Email')
    }
}
const checkPassword = (input , min , max)=> {
    if (input.value.length < min){
        ShowError(input, `password at least ${min} character`)
    }
    else if(input.value.length > max){
        ShowError(input,`password reaches out of range ${max} `)
    }
    else{
        ShowSuccess(input)
    }
}
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    checkEmpty([username,email,password,confirmPassword])
    checkEmail(email);
    checkPassword(password, 6 ,10);
    checkPassword(confirmPassword,6,10);
    
})