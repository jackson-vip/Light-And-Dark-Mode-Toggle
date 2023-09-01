// Seleção de elementos 
const checkbox = document.getElementById("lightDark");


// EVENTO:

checkbox.addEventListener("click", () => {

    // Verifique o estado atual do checkbox
    if (checkbox.checked) {
        // Faça alguma coisa quando o checkbox estiver marcado
        document.querySelector("body").style.backgroundColor = "#374151";
    } else {
        // Faça alguma coisa quando o checkbox estiver desmarcado
        document.querySelector("body").style.backgroundColor = "";
    }

});

