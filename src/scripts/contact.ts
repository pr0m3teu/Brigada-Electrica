
const form = document.getElementById("contact-form") as HTMLFormElement;

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


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fieldNames = Object.keys(validators);

    const result = fieldNames.map(fieldName => {
        return validateField(fieldName as keyof SignupFormData, form.data);
    });
    console.log(result);

});