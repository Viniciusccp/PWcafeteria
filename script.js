function botaoEntrar() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "principal.html";
        });
    } else {
        console.error("Formulário não encontrado!");
    }
}

window.addEventListener("DOMContentLoaded", botaoEntrar);

// Agenda
const horarios = document.querySelectorAll(".horario");
const btnConfirmar = document.getElementById("confirmar-btn");
const mensagem = document.getElementById("mensagem-confirmacao");

let horarioSelecionado = null;

horarios.forEach(horario => {
    horario.addEventListener("click", () => {
        // Remove a classe 'selecionado' de todos os horários antes de adicionar ao clicado
        horarios.forEach(h => h.classList.remove("selecionado"));
        horario.classList.add("selecionado");

        // Define o horário selecionado
        horarioSelecionado = horario.textContent;

        // Exibe o botão de confirmação
        btnConfirmar.style.display = "inline-block";
        mensagem.style.display = "none";  // Esconde a mensagem de confirmação
    });
});

// Evento de clique para confirmar a reserva
btnConfirmar.addEventListener("click", () => {
    if (horarioSelecionado) {
        mensagem.textContent = `✅ Sua reserva para ${horarioSelecionado} foi feita com sucesso!`;
        mensagem.style.display = "block";  // Exibe a mensagem de sucesso
        btnConfirmar.style.display = "none";  // Esconde o botão de confirmação após reserva
    } else {
        mensagem.textContent = "Por favor, selecione um horário primeiro!";
        mensagem.style.display = "block";  // Exibe a mensagem de erro
    }
});
