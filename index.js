// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
const clickBtn = (event) => {
  console.log(event);
};

document.querySelector("#btnToClick").addEventListener("click", clickBtn);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const eventoFocus = (event) => {
  console.log(event.target.value);
};

document.querySelector(".focus").addEventListener("focus", eventoFocus);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const eventoInput = (event) => {
  console.log(event.target.value);
};

document.querySelector(".value").addEventListener("input", eventoInput);

// const input = document.createElement("input");
// input.id = "tutu";
// input.type = "number";
// input.addEventListener("input", (event) => {
//   console.log(event);
// });

// const label = document.createElement("label");
// label.htmlFor = "tutu";
// label.innerHTML = "Tutu";

// document.body.appendChild(input);
// document.body.appendChild(label);
