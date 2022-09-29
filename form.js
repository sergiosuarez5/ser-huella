// form para recibir mails

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_buoty3j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire(
        'MAIL',
        'Enviado correctamente!',
        'success'
      )
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});