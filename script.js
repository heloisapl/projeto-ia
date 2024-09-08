const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Bem-vindo(a)! Vamos ver como estão os seus conhecimentos sobre o corpo humano com um quiz rápido e divertido. São apenas 5 perguntas simples, mas muito interessantes. Pronto para testar o que você sabe? Vamos começar! Quantos ossos tem o corpo humano adulto?",
        alternativas: [
            { texto: "206", correta: true },
            { texto: "250", correta: false },
            { texto: "300", correta: false },
            { texto: "185", correta: false }
        ]
    },

    {
        enunciado: "Qual é o maior órgão do corpo humano?",
        alternativas: [
            { texto: "Coração", correta: false },
            { texto: "Fígado", correta: false },
            { texto: "Pele", correta: true },
            { texto: "Pulmão", correta: false }
        
        ]
    },
    {
        enunciado: "Quantos dentes permanentes tem um ser humano adulto?",
        alternativas: [
            { texto: "28", correta: false },
            { texto: "32", correta: true },
            { texto: "30", correta: false },
            { texto: "34", correta: false }
        ]
    },
    {
        enunciado: "Qual parte do corpo continua crescendo durante toda a vida?",
        alternativas: [
            { texto: "Nariz e orelhas", correta: true },
            { texto: "Cérebro", correta: false },
            { texto: "Braços", correta: false },
            { texto: "Pés", correta: false }
        ]
    },
    {
        enunciado: "Qual é o músculo mais forte do corpo humano?",
        alternativas: [
            { texto: "Bíceps", correta: false },
            { texto: "Coração", correta: false },
            { texto: "Língua", correta: true },
            { texto: "Glúteos", correta: false }
        ]
    },
];


let atual = 0;
let acertos = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (opcaoSelecionada.correta) {
        acertos++;
    }
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quiz Finalizado!";
    textoResultado.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
    caixaAlternativas.textContent = "";
}

mostraPergunta();