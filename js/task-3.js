const inputName = document.querySelector("#name-input");
const greet = document.querySelector("#name-output");

const onInputListener = () => {
  const userName = inputName.value.trim();
  if (userName === "") {
    greet.textContent = "anonimus";
  } else {
    greet.textContent = userName;
  }
};

inputName.addEventListener("input", onInputListener);
