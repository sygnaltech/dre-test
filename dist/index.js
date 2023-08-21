(() => {
  // src/index.ts
  var init = () => {
    console.log("loaded");
    const inputs = document.querySelectorAll("input[dre-id]");
    inputs.forEach((input) => {
      const dreIdValue = input.getAttribute("dre-id");
      if (dreIdValue) {
        input.value = dreIdValue;
      }
    });
    const forms = document.querySelectorAll("[dre-form] > form");
    forms.forEach((form) => {
      console.log("installing listener on form", form);
      form.addEventListener("submit", (event) => {
        console.log("submitting");
        event.preventDefault();
        const action = form.getAttribute("action") || "";
        console.log(action);
        const formData = new FormData(form);
        let dreId = [];
        const checkboxes = form.querySelectorAll('input[type="checkbox"][dre-id]');
        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            const dreIdValue = checkbox.getAttribute("dre-id");
            if (dreIdValue) {
              dreId.push(dreIdValue);
            }
          }
        });
        var formDataObject = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });
        formDataObject["dre_ID"] = dreId;
        console.log(JSON.stringify(formDataObject));
        fetch(action, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formDataObject)
        }).then(async (response) => {
          console.log("SERVER RESPONDED", await response.text());
        }).then((data) => {
          console.log(data);
        }).catch((error) => {
          console.error("Error:", error);
        });
      });
    });
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=index.js.map
