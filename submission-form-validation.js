export default function submissionFormValidation(name, email, comments, submit) {
  const createModalWindow = function(inputElement) {
    const $alertForm = document.createElement("aside"),
    $contentAlertForm = document.createElement("div"),
    $titleAlert = document.createElement("h2"),
    $contentDescriptionAlertForm = document.createElement("div"),
    $descriptionAlertForm = document.createElement("p"),
    $closeWindowBtn = document.createElement("button"),
    $alertIcon = document.createElement("div"),
    $contact = document.getElementById("contacto");

    $alertForm.setAttribute("class", "modal-alert-form");
    $alertForm.setAttribute("id", "alert-form");
    $contentAlertForm.style.setProperty("position", "relative");
    $contentAlertForm.style.setProperty("max-width", "20rem");
    $contentAlertForm.style.setProperty("background-color", "var(--white-color)");
    $contentAlertForm.style.setProperty("text-align", "center");
    $alertIcon.style.setProperty("width", "5rem");
    $alertIcon.style.setProperty("height", "5rem");
    $alertIcon.style.setProperty("background-color", "var(--first-color)");
    $alertIcon.style.setProperty("border-radius", "50%");
    $alertIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="var(--white-color)" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
      <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
      <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
    </svg>
    `;
    $alertIcon.style.setProperty("padding-top", "0.6rem");
    $alertIcon.style.setProperty("position", "absolute");
    $alertIcon.style.setProperty("top", "-10%");
    $alertIcon.style.setProperty("left", "38%");
    $titleAlert.style.setProperty("margin", "5rem 0 1.5rem");
    $titleAlert.textContent = "ERROR SUBMIT FORM";
    $contentDescriptionAlertForm.style.setProperty("padding", "1rem");
    $contentDescriptionAlertForm.style.setProperty("border-top", "thin solid var(--gray-color)");
    $descriptionAlertForm.textContent = `You're trying to send a form to my personal e-mail, but you forgot to fill out the ${inputElement} field, please, close this window and digital it`;
    $closeWindowBtn.setAttribute("id", "close-window");
    $closeWindowBtn.setAttribute("class", "btn font-size-family-086rem font-size-family-12rem");
    $closeWindowBtn.textContent = "CLOSE WINDOW";

    $contentAlertForm.appendChild($alertIcon);
    $contentAlertForm.appendChild($titleAlert);
    $contentDescriptionAlertForm.appendChild($descriptionAlertForm);
    $contentDescriptionAlertForm.appendChild($closeWindowBtn);
    $contentAlertForm.appendChild($contentDescriptionAlertForm);
    $alertForm.appendChild($contentAlertForm);
    $alertForm.appendChild($contentAlertForm);
    $contact.appendChild($alertForm);
  }

  function validateForm() {
    var checkoutData = true;

    if (document.getElementById(name).value === "") {
      createModalWindow("name");

      checkoutData = false;
    }
    else if (document.getElementById(email).value === "") {
      createModalWindow("email");

      checkoutData = false;
    }
    else if (document.getElementById(comments).value === "") {
      createModalWindow("comments");

      checkoutData = false;
    }

    return checkoutData;
  }

  document.getElementById(submit).addEventListener("click", (e) => {
    if (!validateForm()) {
      document.getElementById(submit).setAttribute("type", "button");
    }
    else {
      document.getElementById(submit).setAttribute("type", "submit");

      console.log("submit");
    }
  });
}