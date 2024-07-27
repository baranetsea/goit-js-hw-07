const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };
  if (formData.email === "" || formData.password === "") {
    return alert("All form fields must be filled in");
  }

  form.reset();
  console.log(formData);
};
form.addEventListener("submit", onFormSubmit);
