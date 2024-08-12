const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda com o alarme tocando de manhã cedo. No entanto, você se sente muito cansado e tenta decidir o que fazer. ",
        alternativas: [
            {
                texto: "Levantar da cama imediatamente e começar o dia.",
                afirmacao: "Você começa o dia com energia, mas chega cedo demais ao trabalho, o que pode ser visto como ambição omo escesso de zelo pelos colegas. "
            },
            {
                texto: "Adiar o alarme e dormir mais alguns minutos.",
                afirmacao: "Você se sente mais descansado, mas acaba saindo de casa apressado, o que pode levar a contratempos durante o dia. "
            }
        ]
    },
    {
    enunciado: "Você está com pressa, mas sabe que o café da manhã é importante. Você tem que se decidir se vai tomar café em casa ou pegar algo no caminho. ",
        alternativas: [
            {
                texto: "Tomar café em casa. ",
                afirmacao: "Você começa o dia bem alimentado e com calma, mas pode perder um ônibus ou pegar trânsito, chegando atrasado ao trabalho.  "
            },
            {
                texto: " Pegar um café rápido na rua. ",
                afirmacao: "Você ganha tempo, mas a escolha rápida pode não ser a mais saudável e te deixa com fome logo cedo. "
            }
        ]
    },
    {
        enunciado: "No caminho para o trabalho, um colega te liga pedindo ajuda urgente para terminar um relatório. ",
        alternativas: [
            {
                texto: "Ajudar o colega e adiar suas próprias tarefas. ",
                afirmacao: "Seu colega fica muito grato e pode te ajudar no futuro, mas você corre o risco de atrasar suas próprias responsabilidades. "
            },
            {
                texto: "Recusar e focar nas suas próprias tarefas. ",
                afirmacao: "Você mantém o foco e consegue terminar suas tarefas a tempo, mas pode ser visto como egoísta e individualista. "
            } 
        ]
    },
    {
        enunciado: "Na hora do almoço, você encontra um velho amigo que não vê há anos e ele te convida para almoçar juntos ",
        alternativas: [
            {
                texto: "Aceitar o convite e ir almoçar com o amigo. ",
                afirmacao: "Vocês relembram bons momentos e ele te oferece uma oportunidade inesperada de trabalho ou projeto, mas você pode perder tempo e atrasar suas tarefas. "
            },
            {
                texto: "Recusar educadamente e almoçar sozinho para continuar produtivo.",
                afirmacao: "Você mantém o foco no trabalho, mas pode perder uma importante e se sentir isolado. "
            }
        ]
    },
    {
        enunciado: "No final do dia, seu chefe te chama para uma conversa e faz uma proposta: uma promoção que exigiria mais tempo e responsabilidade. ",
        alternativas: [
            {
                texto: "Aceitar a promoção. ",
                afirmacao: "Sua carreira dá um grande salto, mas isso pode impactar negativamente sua vida pessoal e aumentar o estresse. "
            },
            {
                texto: "Recusar a promoção para manter o equilíbrio entre vida pessoal e trabalho. ",
                afirmacao: "Você mantém sua vida equilibrada, mas pode perder uma chance única de crescer na carreira. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();