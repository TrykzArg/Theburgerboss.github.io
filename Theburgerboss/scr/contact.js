const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const regexs = {
    name:/^[a-zA-Z0-9\_\-]{3,16}$/,
    lastname:/^[a-zA-ZÀ-ÿ\s]{2,16}$/,
    mail:/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    msg:/^[a-zA-ZÀ-ÿ\s]{3,30}$/,

}


const camps = {
    name:false,
    lastname:false,
    mail:false,
    msg:false,
}

const validateForms = (e) => {

   switch (e.target.name) {

        case "name":
            validateCamps(regexs.name, e.target, 'name');
            break;
        case "lastname":
                validateCamps(regexs.lastname, e.target, 'lastname');
            break;
        case "mail":
                validateCamps(regexs.mail, e.target, 'mail');
            break;
        case "msg":
                validateCamps(regexs.msg, e.target, 'msg');
            break;
    }
     
}

let validateCamps = (regex, input, camp) => {


    if(regex.test(input.value)){

        document.getElementById(`${camp}-group`).classList.remove('form-group-incorrect');
        document.getElementById(`${camp}-group`).classList.add('form-group-correct');
        document.querySelector(`#${camp}-group i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#${camp}-group i`).classList.add('fa-circle-check');
       document.querySelector(`#${camp}-group .form-error-warning`).classList.remove('form-error-warning-active');
        camps[camp] = true;
    }
    else{
        document.getElementById(`${camp}-group`).classList.add('form-group-incorrect');
        document.querySelector(`#${camp}-group`).classList.remove('fa-circle-check');
        document.querySelector(`#${camp}-group i`).classList.add('fa-circle-xmark');
        document.querySelector(`#${camp}-group .form-error-warning`).classList.add('form-error-warning-active');
        camps[camp] = false;
    }

}



inputs.forEach((input) => {
    input.addEventListener('keyup', validateForms)
    input.addEventListener('blur', validateForms)
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(camps.name && camps.description && camps.price){
        form.reset();

        document.getElementById('form-msj-successfully').classList.add('form-msj-successfully-active');
        setTimeout(() => {
            document.getElementById('form-msj-successfully').classList.remove('form-msj-successfully-active');
        }, 5000);

        document.querySelectorAll('.form-group-correct').forEach((icon) => {
            icon.classList.remove('form-group-correct');
        });

        document.getElementById('form-warning').classList.remove('form-warning-active');
    }
    else{
    
        document.getElementById('form-warning').classList.add('form-warning-active');
        
    }
    
});
