


/**
 * DRE Test
 * /test
 * 
 */

export class DreTest {

    constructor() {

    }

    init() {

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
        const forms: NodeListOf<HTMLFormElement> | null = document.querySelectorAll('[dre-form] > form');
        forms.forEach((form: HTMLFormElement) => {
            console.log("installing listener on form", form); 
            form.addEventListener('submit', (event: Event) => {

                // Prevent default form submission
                event.preventDefault();

                // Get the action attribute value
                const action: string = form.getAttribute('action') || '';

                console.debug("submitting", action); 

                // Construct the form data as an object
                const formData: FormData = new FormData(form);

                // Aggregate the checkbox-selected items into an array

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

                var formDataObject: { [key: string]: any } = {};
                formData.forEach((value, key) => {
                    formDataObject[key] = value;
                });

                formDataObject['dre_ID'] = dreId;
                // Add our array
                // formDataObject.append('dre_ID', dreId);

                // Log the JSON data
                console.log(JSON.stringify(formDataObject));

                // POST the form data to the webhook
                // defined in form[action] 

                // Convert formDataObject to JSON and send it via a POST request
                fetch(action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataObject)
                })
                //.then(response => response.json()) 
                .then(async response => {

                    // TODO: do something with the response? 
                    // TODO: change response to JSON? 

                    console.debug("SERVER RESPONDED", await response.text()); 

                })  // assuming server responds with json
                .then(data => {
                    console.debug(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            });
        }); 



    // capture action
    // prefent default 

    }

}