const scriptURL = 'https://script.google.com/macros/s/AKfycby4D_PXgocgomztr36KcEI41pajqNlJXx8Yo-Pjwhoh9fo_tJ6FmKbmo8-9EEii8pX4kA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})