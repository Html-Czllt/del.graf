

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `
    Você sabia que a população mundial é composta por cerca de <span style="color: ${corAleatoria};">${pessoasNoMundo} bilhões</span> de pessoas? Dentre esses, aproximadamente <span style="color: ${corAleatoria};">${pessoasConectadas} bilhões</span> estão ativas em redes sociais. <br>
    Em média, cada usuário dedica cerca de <span style="color: ${corAleatoria};">${horas} horas</span> e <span style="color: ${corAleatoria};">${minutos} minutos</span> por dia navegando nessas plataformas. <br>
    Isso representa aproximadamente <span style="color: ${corAleatoria};">${porcentagemConectada}%</span> da população global conectada às redes sociais.
`;

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
