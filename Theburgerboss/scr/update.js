const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const regexs = {
    description:/^[a-zA-Z0-9\_\-]{4,16}$/,
    name:/^[a-zA-ZÀ-ÿ\s]{3,30}$/,
    price:/^\d{1,4}$/,

}


const camps = {
    category:false,
    description:false,
    name:false,
    price:false,
    img:false,
}

const validateForms = (e) => {

   switch (e.target.name) {

        case "category":
            validateCamps(e.target.value !== "", e.target, 'category');
            break;
        case "name":
                validateCamps(regexs.name, e.target, 'name');
            break;
        case "description":
                validateCamps(regexs.description, e.target, 'description');
            break;
        case "price":
                validateCamps(regexs.price, e.target, 'price');
            break;
        case "img":
            
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
