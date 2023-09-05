const largura = 20;
const altura = 20;

const renderizarCenario = () => {
    try {
        const cenario = document.getElementById("cenario");

        for (let index = 0; index < largura; index++) {
            document.getElementById("cenario").innerHTML += "<h3>This is the text which has been inserted by JS</h3>";
            
        }
    } catch (error) {
        console.log(error)
    }

}

window.onload = renderizarCenario();