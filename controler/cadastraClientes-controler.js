import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = event.target.querySelector('[data-nome]').value;
    const email = event.target.querySelector('[data-email]').value;

    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = "../telas/cadastro_concluido.html"
    })

})