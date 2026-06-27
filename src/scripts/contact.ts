
const form = document.getElementById("contact-form") as HTMLFormElement;
const formSucces = document.getElementById("form-success") as HTMLElement;

interface SignupFormData {
  name: string;
  email: string;
  interes: string;
  telefon: string;
  detalii: string;
}

type FieldValidator = (value: string, formData: SignupFormData) => string;

type ValidatorMap = {
  [K in keyof SignupFormData]: FieldValidator;
};


const validators: ValidatorMap = {

    name(value: string) {
        if (!value.trim()) return "Vă rugăm introduceți numele.";
        if (value.trim().length > 50) return "Numele trebuie să aibă mai puțin de 50 de caractere.";
        return '';
    },

    email(value: string) {
        if (!value.trim()) return "";
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value.trim())) return "Introduceți o adresă de email validă.";
        return "";
    },

    interes(value: string) {
        if(!value.trim()) return "Vă rugăm selectați o opțiune.";
        return "";
    },

    telefon(value: string) {
        const number = value.trim(); 
        if (!number) return "Vă rugăm introduceți numărul de telefon.";
        if (number.length < 10 || number.length > 12) return "Vă rugăm introduceți un număr corect de telefon."
        return "";
    },

    detalii(value: string) {
        if (value.trim().length > 2000) return "Textul introdus este prea lung.";
        return "";
    },
};


function validateField(fieldName : keyof SignupFormData, formData: SignupFormData)
{
    const input = document.getElementById(fieldName) as HTMLInputElement;
    const errorText = document.getElementById(fieldName + "Error") as HTMLElement | null;
    const message = validators[fieldName](input.value, formData);

    if (errorText) 
    {
        errorText.textContent = message;
    }

    return message === "";
}   


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const fieldNames = Object.keys(validators);

    const result = fieldNames.map(fieldName => {
        return validateField(fieldName as keyof SignupFormData, form.data);
    });

    const isValid = result.every(Boolean);

    if (!isValid) return;


    const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Se trimite...';
    }
    
    try {
        const result = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
        });

        if (result.ok) {

            console.log(formSucces);
            formSucces?.classList.remove("hidden");
        }
        else {
            throw new Error("Eroare la trimitere");
        }
    } 
    finally {
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Transmiteți solicitarea";
        }
    }
    

});