// Obtendo os elementos do input.
const item = document.getElementById("btn")
const input = document.getElementById("itens")
const form = document.querySelector("form")

// Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
    event.preventDefault()
}
// Capturando o clique no botão e pegando o valor do input para criar o novo item.
btn.addEventListener("click", () => {
    const value = input.value;
    console.log(value);
    
    // Verificando se o valor do input está vazio antes de prosseguir.
    if ( value === "")  {
        alert('Por favor, adicione um item válido.')
        card.remove
    }

    // cria a div do card
    const card = document.createElement("div")
    card.classList.add("card");

    // cria o checkbox do card
    const checkbox = document.createElement("input")
    checkbox.type = 'checkbox';

    // cria o span do card
    const text = document.createElement("span")
    text.textContent = value

    // Cria o botão para excluir o card e adiciona o evento de remoção.
    const removeButton = document.createElement("button")
    removeButton.addEventListener("click", () => {
        card.remove()

        // exibe o alerta apos excluir o card.
        const alertContainer = document.getElementById('alert');
        if (alertContainer) {
            alertContainer.style.display = "flex";
            
        // define um tempo para o card sumir(2s).
            setTimeout(() => {
                alertContainer.style.display = "none";
            }, 2000);
        }
})


        // junta todos os elementos no card.
        card.appendChild(checkbox)
        card.appendChild(text)
        card.appendChild(removeButton)


    // adiciona o card ao id container.
    document.getElementById('container').appendChild(card)
})