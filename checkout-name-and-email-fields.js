export function checkoutNameField(name) {
  let checkoutCharacters = true;
  const $nameArray = document.getElementById(name).value;

  for (let index = 0; index < $nameArray.length; index++) {
    if (!($nameArray[index] >= 'a' && $nameArray[index] <= 'z') && !($nameArray[index] >= 'A' && $nameArray[index] <= 'Z') && $nameArray[index] != " ") {
      checkoutCharacters = false;
    }
  }

  return checkoutCharacters;
}

export function checkoutEmailField(email) {
  let checkoutCharacters = true;
  const $emailArray = document.getElementById(email).value;

  for (let index = 0; index < $emailArray.length; index++) {
    if (!($emailArray[index] >= 'a' && $emailArray[index] <= 'z') && !($emailArray[index] >= 'A' && $emailArray[index] <= 'Z') && 
    !($emailArray[index] >= '0' && $emailArray[index] <= '9') && 
    $emailArray[index] != '.' && $emailArray[index] != '-' && $emailArray[index] != '_' && $emailArray[index] != '@') {
      checkoutCharacters = false;
    }
  }

  return checkoutCharacters;
}