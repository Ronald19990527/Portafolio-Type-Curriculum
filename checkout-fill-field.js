export default function checkoutFillField(name, email, comments) {
  if (document.getElementById(name).value === "") {
    document.getElementById(name).focus();
  }
  else if (document.getElementById(email).value === "") {
    document.getElementById(email).focus();
  }
  else if (document.getElementById(comments).value === "") {
    document.getElementById(comments).focus();
  }
}