import { DreTest } from "./pages/dre-test";

const init = () => { 

    console.log("DRE-lib", 'loaded');

    console.log("DRE-lib", window.location.pathname);

    switch(window.location.pathname) {
        case "/test":

            console.log("DRE-lib", "Init | TEST page");

            (new DreTest()).init(); 

            break;
    }

/*

    // Find all input elements with the custom attribute 'dre-id' 
    // set the value to the dre-id 
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[dre-id]');
    inputs.forEach((input: HTMLInputElement) => {
        const dreIdValue: string | null = input.getAttribute('dre-id');
        if (dreIdValue) {
            input.value = dreIdValue;
        }
    });



// Form [dre-form]
// install submit handler 


    // Find the form element with the custom attribute 'dre-form'
    const forms: NodeListOf<HTMLFormElement> | null = document.querySelectorAll('[dre-form] > form');
    forms.forEach((form: HTMLFormElement) => {
        console.log("installing listener on form", form); 
        form.addEventListener('submit', (event: Event) => {

console.log("submitting"); 

            // Prevent default form submission
            event.preventDefault();
//event.stopPropagation();

            // Get the action attribute value
            const action: string = form.getAttribute('action') || '';
console.log(action);

            // Construct the form data as an object
            const formData: FormData = new FormData(form);



            let dreId: string[] = [];

            // Find all checkboxes with the custom attribute 'dre-id' within the form
            const checkboxes: NodeListOf<HTMLInputElement> = form.querySelectorAll('input[type="checkbox"][dre-id]');
            
            checkboxes.forEach((checkbox: HTMLInputElement) => {
                if (checkbox.checked) {
                    const dreIdValue: string | null = checkbox.getAttribute('dre-id');
                    if (dreIdValue) {
                        dreId.push(dreIdValue);
                    }
                }
            });
            
            // console.log(dreId); // This will log the array of checked dre-id values
            // dreId.forEach((value: string) => {
            //     formData.append('dreId[]', value);
            // });
//            formData.append("dre_ID", dreId);


var formDataObject: { [key: string]: any } = {};
formData.forEach((value, key) => {
    formDataObject[key] = value;
});

formDataObject['dre_ID'] = dreId;
// Add our array
// formDataObject.append('dre_ID', dreId);

// Log the JSON data
console.log(JSON.stringify(formDataObject));


// return; 

// Convert formDataObject to JSON and send it via a POST request
fetch(action, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataObject)
})
//.then(response => response.json())  // assuming server responds with json
.then(async response => {
    console.log("SERVER RESPONDED", await response.text()); 
})  // assuming server responds with json
.then(data => {
    console.log(data);
})
.catch((error) => {
    console.error('Error:', error);
});


//            return false; 
        });
    }); 



// capture action
// prefent default 
*/ 
}

document.addEventListener("DOMContentLoaded", init)