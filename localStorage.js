const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const messageInput = document.querySelector('#message');
function updateFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener('input', updateFormData);
});
const savedFormData = JSON.parse(localStorage.getItem('formData'));
if (savedFormData) {
  nameInput.value = savedFormData.name;
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.message;
}
