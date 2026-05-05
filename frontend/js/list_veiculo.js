let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e) => {
    e.preventDefault()

    // Rota correta que configuramos no Express
    fetch('http://localhost:3000/veiculos')
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        resposta.innerHTML = '' 
        resposta.innerHTML += `
            <table>
                ${thead()}
                ${tbody(dados)}
            </table>
        `
    })
    .catch((err) => {
        console.error('Erro ao listar os veículos', err)
        resposta.innerHTML = "Erro ao carregar dados."
    })
})

function thead() {
    return `
    <thead>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Ano</th>
            <th>Preço Fábrica</th>
            <th>Preço Venda</th>
        </tr>
    </thead>    
    `
}

function tbody(dados) {
    let tabela = `<tbody>`
    dados.forEach(el => {
        tabela += `
        <tr>        
            <td>${el.codVeiculo}</td>
            <td>${el.nome}</td>
            <td>${el.marca}</td>
            <td>${el.categoria}</td>
            <td>${el.ano}</td>
            <td>R$ ${Number(el.precoFabrica).toFixed(2)}</td>
            <td style="color: #00FF00;">R$ ${Number(el.precoVenda).toFixed(2)}</td>
        </tr>
        `
    })
    tabela += `</tbody>`
    return tabela
}