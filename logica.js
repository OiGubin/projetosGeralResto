//função que será executada quando o bbotão for clicado

function adicionandogiria(){
    // pegando o valor inserido no input
    giria = document.getElementById("giriaInput").value
    // selecionando a div onde os resultados (girias) serão exibidas
    resultadoDiv = document.getElementById("resultado")
    // verificando se o campo de texto não esta vazio
    if(giria){

        //criando um novo element <p> que contera a giria adicionada
        novagiria = document.createElement("p")

        //definindo o conteudo de texto <p>
        novagiria.textComentent = `giria adicionada: ${giria}`

        // adicionar o <p> dentro da div de resultados
        resultadoDiv.appendChild(novagiria)

        //Limpando o campo de texto, após a Gíria ser adicionada
        document.getElementById("giriaInput").value = ''

    } else{
        // Alertando o usuario caso o campo esteja vazio
        alert("por obsequio,insira uma giria!")
    }
   
}