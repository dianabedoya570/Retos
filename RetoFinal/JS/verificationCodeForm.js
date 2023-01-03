window.addEventListener("load", digitsFocus());

const digitVerify = (digit) => {
  if (digit.value.length > 1) {
    digit.value = digit.value.slice(0, 1);
  }
  let digitV = parseInt(digit.value);
  if (!Number.isInteger(digitV)) {
    return false;
  }

  return true;
};

function digitsFocus() {
  pasteDigits(document);
  const containerDigit = document.getElementById("digits-code_div");
  if (containerDigit.hasChildNodes()) {
    const inputDigits = containerDigit.children;
    inputDigits[0].focus();
    for (let element of inputDigits) {
      element.addEventListener("keyup", (evn) => {
        if (!digitVerify(element)) {
          element.value = "";

          return;
        }
        const nextElement = element.nextElementSibling;
        if (nextElement) {
          nextElement.focus();
        } else {
          document.getElementById("verifyButton").focus();
        }
      });
    }
  }
}

function pasteDigits(digits) {
  digits.addEventListener("paste", (event) => {
    if (event.target.type === "number") {
      let data = (event.clipboardData || window.clipboardData).getData("text");
      data = data.split("");

      [].forEach.call(
        document.querySelectorAll("input[type=number]"),
        (element, indexDg) => {
          element.value = data[indexDg];
          digitVerify(element);
          element.focus();
        }
        
      );
      document.getElementById("verifyButton").focus();
    }
  });
}
/*      [].forEach.call(
        document.querySelectorAll("input[type=number]"), Busca todos los elementos input de tipo number que tengo en la pagina, para llenar el array vacio que hace el call
        (element, indexDg) => { // el elemento y el indice del elemento  que se recorre en el for each
          element.value = data[indexDg];
          element.focus();
        }
); */