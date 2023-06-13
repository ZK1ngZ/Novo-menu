
let login = document.querySelector("#login");
let senha = document.querySelector("#senha");
let btn = document.querySelector(".botn");
let restrita = document.querySelector("#btn-restrita")
btn.addEventListener("click", () => {
    if (login.value =="login"&& senha.value == "senha")
    {
        window.open("restrita.html");
    }

    else{
        window.alert("Usuario incorreto")
    }
});






let btnEsqueceu = document.querySelector(".esqueceu-senha")

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Email de recuperação enviado com sucesso!', 'success')
    btnEsqueceu.style.display = "none"
  })
}





