// BANCO DE DADOS DAS RAÇAS

const racas = [

    {
        nome: "Humano",
        icone: "⚔️",
        categoria: "Clássicas",
        resumo: "Versáteis, determinados e presentes em diferentes regiões de Arton.",
        descricao: "Os humanos são um dos povos mais numerosos e diversificados de Arton. Sua capacidade de adaptação permite que sigam praticamente qualquer caminho, desde guerreiros e ladinos até magos e clérigos."
    },

    {
        nome: "Anão",
        icone: "🪓",
        categoria: "Clássicas",
        resumo: "Resistentes e conhecidos por suas tradições e habilidades com a forja.",
        descricao: "Os anões são conhecidos por sua resistência, determinação e ligação com o trabalho em pedra e metal. Possuem uma longa história de fortalezas, tradições e comunidades subterrâneas."
    },

    {
        nome: "Elfo",
        icone: "🏹",
        categoria: "Clássicas",
        resumo: "Um povo longevo com grande ligação com a magia e o conhecimento.",
        descricao: "Os elfos são conhecidos por sua longevidade e afinidade com a magia. Em Arton, carregam uma história marcada por grandes acontecimentos, perdas e transformações."
    },

    {
        nome: "Goblin",
        icone: "🔧",
        categoria: "Clássicas",
        resumo: "Criaturas engenhosas que sobrevivem utilizando criatividade e improvisação.",
        descricao: "Os goblins são pequenos humanoides conhecidos pela agilidade e criatividade. Sua capacidade de improvisar ferramentas e encontrar soluções inesperadas faz deles aventureiros bastante interessantes."
    },

    {
        nome: "Dahllan",
        icone: "🌿",
        categoria: "Fantásticas",
        resumo: "Seres com uma profunda conexão com a natureza.",
        descricao: "As dahllan possuem uma forte ligação com a natureza e seus ciclos. Seus traços vegetais e sua relação com o mundo natural oferecem possibilidades interessantes para personagens ligados às florestas."
    },

    {
        nome: "Minotauro",
        icone: "🐂",
        categoria: "Fantásticas",
        resumo: "Humanoides taurinos conhecidos por sua força e presença imponente.",
        descricao: "Os minotauros são seres humanoides que possuem características de touros. Sua força física e sua complexa herança cultural podem fazer parte de histórias sobre tradição e identidade."
    },

    {
        nome: "Qareen",
        icone: "🔮",
        categoria: "Fantásticas",
        resumo: "Descendentes de gênios que possuem uma ligação natural com a magia.",
        descricao: "Os qareen possuem uma herança mágica relacionada aos gênios. São personagens interessantes para histórias que envolvem magia, desejos e descobertas."
    },

    {
        nome: "Hynne",
        icone: "🍀",
        categoria: "Fantásticas",
        resumo: "Pequenos aventureiros conhecidos por sua agilidade e esperteza.",
        descricao: "Os hynne são pequenos humanoides que podem utilizar sua agilidade e esperteza para superar obstáculos. São excelentes inspirações para personagens curiosos e aventureiros."
    },

    {
        nome: "Medusa",
        icone: "🐍",
        categoria: "Fantásticas",
        resumo: "Seres de aparência marcante, associados a serpentes e poderes especiais.",
        descricao: "As medusas possuem características serpentinas e uma aparência bastante reconhecível. Sua presença permite criar histórias sobre identidade, reputação e poder."
    },

    {
        nome: "Sereia / Tritão",
        icone: "🌊",
        categoria: "Fantásticas",
        resumo: "Habitantes dos mares que possuem características aquáticas.",
        descricao: "Sereias e tritões são povos ligados aos oceanos de Arton. Suas histórias podem envolver reinos submarinos, exploração e o contato entre o mundo aquático e a superfície."
    },

    {
        nome: "Sílfide",
        icone: "🧚",
        categoria: "Fantásticas",
        resumo: "Pequenos seres feéricos que possuem uma ligação natural com a magia.",
        descricao: "As sílfides são pequenas criaturas feéricas, frequentemente associadas à magia e ao mundo natural. Sua aparência e suas capacidades mágicas permitem criar personagens bastante diferentes dos aventureiros tradicionais."
    },

    {
        nome: "Suraggel",
        icone: "✨",
        categoria: "Incomuns",
        resumo: "Seres marcados pela influência de forças extraplanares.",
        descricao: "Os suraggel possuem uma herança relacionada a seres de outros planos de existência. Essa origem pode se manifestar em sua aparência, capacidades e na maneira como são percebidos pelos habitantes de Arton."
    },

    {
        nome: "Osteon",
        icone: "💀",
        categoria: "Incomuns",
        resumo: "Esqueletos conscientes que continuam sua jornada após a morte.",
        descricao: "Os osteon são mortos-vivos inteligentes que possuem corpos esqueléticos. Apesar de sua condição incomum, podem conservar lembranças, personalidade e objetivos, tornando-se aventureiros com histórias singulares."
    },

    {
        nome: "Golem",
        icone: "⚙️",
        categoria: "Incomuns",
        resumo: "Construtos artificiais que adquiriram consciência e vontade própria.",
        descricao: "Os golens são seres artificiais animados por forças mágicas. Sua existência permite explorar questões sobre identidade, consciência, liberdade e o significado de estar vivo."
    },

    {
        nome: "Trog",
        icone: "🦎",
        categoria: "Incomuns",
        resumo: "Humanoides reptilianos conhecidos por sua resistência e instintos.",
        descricao: "Os trogs são humanoides reptilianos com características físicas marcantes. Sua natureza e seus costumes oferecem possibilidades para personagens de personalidade forte e histórias de sobrevivência."
    },

    {
        nome: "Kliren",
        icone: "🧠",
        categoria: "Incomuns",
        resumo: "Inventores que combinam conhecimento, criatividade e tecnologia.",
        descricao: "Os kliren possuem uma grande afinidade com invenções e conhecimento técnico. São uma opção interessante para personagens que procuram resolver problemas utilizando inteligência, ferramentas e criatividade."
    },

    {
        nome: "Lefou",
        icone: "🩸",
        categoria: "Incomuns",
        resumo: "Seres tocados pela influência sobrenatural da Tormenta.",
        descricao: "Os lefou são indivíduos marcados pela influência da Tormenta, uma das forças mais perigosas de Arton. Suas características incomuns podem gerar conflitos pessoais e histórias envolvendo transformação e aceitação."
    }

];


// VARIÁVEIS PRINCIPAIS

let categoriaAtual = "Todas";

let apenasFavoritos = false;

let favoritos = JSON.parse(localStorage.getItem("favoritosArton")) || [];


// ELEMENTOS DO HTML

const containerRacas = document.getElementById("containerRacas");

const campoPesquisa = document.getElementById("pesquisa");

const mensagemSemResultados = document.getElementById("semResultados");

const modal = document.getElementById("modal");

const modalTitulo = document.getElementById("modalTitulo");

const modalDescricao = document.getElementById("modalDescricao");


// FUNÇÃO PARA EXIBIR AS RAÇAS

function exibirRacas() {

    containerRacas.innerHTML = "";

    const pesquisa = campoPesquisa.value.toLowerCase().trim();

    const racasFiltradas = racas.filter(function(raca) {

        const correspondePesquisa =
            raca.nome.toLowerCase().includes(pesquisa) ||
            raca.resumo.toLowerCase().includes(pesquisa);

        const correspondeCategoria =
            categoriaAtual === "Todas" ||
            raca.categoria === categoriaAtual;

        const correspondeFavoritos =
            !apenasFavoritos ||
            favoritos.includes(raca.nome);

        return correspondePesquisa &&
               correspondeCategoria &&
               correspondeFavoritos;

    });


    // VERIFICA SE EXISTEM RESULTADOS

    if (racasFiltradas.length === 0) {

        mensagemSemResultados.style.display = "block";

    } else {

        mensagemSemResultados.style.display = "none";

    }


    // CRIA OS CARDS

    racasFiltradas.forEach(function(raca) {

        const card = document.createElement("div");

        card.classList.add("card");


        // VERIFICA SE A RAÇA É FAVORITA

        const favorito = favoritos.includes(raca.nome);

        const simboloFavorito = favorito ? "★" : "☆";


        // CONTEÚDO DO CARD

        card.innerHTML = `

            <div class="card-imagem">

                ${raca.icone}

            </div>

            <div class="card-conteudo">

                <span class="categoria">

                    ${raca.categoria}

                </span>

                <h3>

                    ${raca.nome}

                </h3>

                <p>

                    ${raca.resumo}

                </p>

                <button onclick="abrirModal('${raca.nome}')">

                    CONHECER RAÇA →

                </button>

                <button
                    class="favorito ${favorito ? "ativo" : ""}"
                    onclick="alternarFavorito('${raca.nome}')"
                >

                    ${simboloFavorito} Favorito

                </button>

            </div>

        `;


        containerRacas.appendChild(card);

    });

}


// FUNÇÃO DE PESQUISA

function pesquisarRacas() {

    exibirRacas();

}


// FUNÇÃO DOS FILTROS

function filtrarRacas(categoria, botao) {

    categoriaAtual = categoria;

    apenasFavoritos = false;


    // REMOVE A CLASSE ATIVO DOS OUTROS BOTÕES

    const botoes = document.querySelectorAll(".filtro");

    botoes.forEach(function(item) {

        item.classList.remove("ativo");

    });


    // ATIVA O BOTÃO SELECIONADO

    botao.classList.add("ativo");


    // ATUALIZA OS CARDS

    exibirRacas();

}


// FUNÇÃO PARA ABRIR O MODAL

function abrirModal(nome) {

    const raca = racas.find(function(item) {

        return item.nome === nome;

    });


    if (raca) {

        modalTitulo.textContent = raca.nome;

        modalDescricao.textContent = raca.descricao;

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


// FUNÇÃO PARA FECHAR O MODAL

function fecharModal() {

    modal.style.display = "none";

    document.body.style.overflow = "auto";

}


// FECHAR MODAL CLICANDO FORA DELE

modal.addEventListener("click", function(evento) {

    if (evento.target === modal) {

        fecharModal();

    }

});


// FECHAR MODAL COM A TECLA ESC

document.addEventListener("keydown", function(evento) {

    if (evento.key === "Escape") {

        fecharModal();

    }

});


// FUNÇÃO PARA FAVORITAR UMA RAÇA

function alternarFavorito(nome) {

    if (favoritos.includes(nome)) {

        favoritos = favoritos.filter(function(item) {

            return item !== nome;

        });

    } else {

        favoritos.push(nome);

    }


    // SALVA OS FAVORITOS NO NAVEGADOR

    localStorage.setItem(
        "favoritosArton",
        JSON.stringify(favoritos)
    );


    // ATUALIZA OS CARDS

    exibirRacas();

}


// FUNÇÃO PARA MOSTRAR FAVORITOS

function mostrarFavoritos() {

    apenasFavoritos = !apenasFavoritos;

    categoriaAtual = "Todas";


    // LIMPA A PESQUISA

    campoPesquisa.value = "";


    // ATUALIZA OS BOTÕES DE FILTRO

    const botoes = document.querySelectorAll(".filtro");

    botoes.forEach(function(botao) {

        botao.classList.remove("ativo");

    });


    // ATIVA O FILTRO TODAS

    botoes[0].classList.add("ativo");


    // ALTERA O TEXTO DO BOTÃO

    const botaoFavoritos = document.querySelector(".botao-favoritos");

    if (apenasFavoritos) {

        botaoFavoritos.textContent = "★ Mostrar todas";

    } else {

        botaoFavoritos.textContent = "★ Meus favoritos";

    }


    exibirRacas();

}


// FUNÇÃO PARA SORTEAR UMA RAÇA

function sortearRaca() {

    const numeroAleatorio = Math.floor(
        Math.random() * racas.length
    );

    const racaSorteada = racas[numeroAleatorio];


    // ABRE AS INFORMAÇÕES DA RAÇA SORTEADA

    abrirModal(racaSorteada.nome);

}


// EVENTO DA BARRA DE PESQUISA

campoPesquisa.addEventListener("input", pesquisarRacas);


// EXIBE TODAS AS RAÇAS QUANDO A PÁGINA É ABERTA

exibirRacas();