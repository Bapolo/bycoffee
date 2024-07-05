document.addEventListener("DOMContentLoaded", () =>
{
    const preco = document.querySelector("#spanPreco")
    const quantidade = document.querySelector("#spanQuantidade")
    const inputRange = document.querySelector("#inputRange")
    const botaoComprar = document.querySelector("#botaoComprar")
    const nomeDoComprador = document.querySelector("#nomeDoComprador")
    const valorPagoNaCompra = document.querySelector("#valorPagoNaCompra")
    const quantidaSolicitada = document.querySelector("#quantidaSolicitada")
    const comprarNovamente = document.querySelector("#comprarNovamente")
    const compraComSucesso = document.querySelector(".compraComSucesso")

    preco.innerHTML = "3 000"
    quantidade.innerHTML = inputRange.value

    inputRange.addEventListener("input", () =>
    {
        quantidade.innerHTML = inputRange.value
        let precoAtual = Number(inputRange.value) * 3000
        precoAtual = precoAtual.toLocaleString('en-US').replace(/,/g, ' ') 
        preco.innerHTML = precoAtual

    })

    botaoComprar.addEventListener("click", () =>
    {
        if (document.querySelector("#nome").value != "" && document.querySelector("#contacto").value != "")
        {
            compraComSucesso.style.display = "flex"
            nomeDoComprador.innerHTML = document.querySelector("#nome").value
            valorPagoNaCompra.innerHTML = Number(inputRange.value) * 3000 + ''
            quantidaSolicitada.innerHTML = inputRange.value
        }        
    }) 

    comprarNovamente.addEventListener("click", () =>
    {
        compraComSucesso.style.display = "none"
    })

})