let resposta = document.getElementById('resposta')
let btn_cad_veiculo = document.getElementById('btn_cad_veiculo') // Ajuste o ID no HTML se necessário

btn_cad_veiculo.addEventListener('click', (e) => {
    e.preventDefault()

    // Capturando os dados conforme o desafio
    const nome = document.getElementById('nome').value
    const marca = document.getElementById('marca').value
    const categoria = document.getElementById('categoria').value // Deve ser um <select>
    const ano = Number(document.getElementById('ano').value)
    const precoFabrica = Number(document.getElementById('precoFabrica').value)


    let margem = 0
    if (categoria === 'popular') margem = 0.15
    else if (categoria === 'sedan') margem = 0.20
    else if (categoria === 'luxo') margem = 0.25

    const precoVenda = precoFabrica * (1 + margem)

    // Montando o objeto para o Back-end
    const valores = {
        nome: nome,
        marca: marca,
        categoria: categoria,
        ano: ano,
        precoFabrica: precoFabrica,
        precoVenda: precoVenda
    }

    // Enviando para a rota correta: /veiculos
    fetch('http://localhost:3000/veiculo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)

        resposta.innerHTML = ''
        resposta.style.color = "white" // Mantendo o padrão visual
        resposta.innerHTML = dados.message
        
        // Limpa o formulário após o sucesso
        if (dados.message.includes("sucesso")) {
            document.querySelector('form').reset()
        }
    })
    .catch(err => {
        console.error("Erro na requisição:", err)
        resposta.innerHTML = "Erro ao conectar com o servidor."
    })
})