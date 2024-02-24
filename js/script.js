let optionsButtons = document.querySelectorAll(".option-button");

let advancedOptionButton = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName");

let fontSizeRef = document.getElementById("fontSize");

let writingArea = document.getElementById("text-input");

let linkButton = document.getElementById("createLink");

let alignButtons = document.querySelectorAll(".align");

let spacingButtons = document.querySelectorAll(".spacing");

let formatButtons = document.querySelectorAll(".format");

let scriptButtons = document.querySelectorAll(".script");

// Lista das Fontes

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
];

// Configurações iniciais
const initializer = () => {

/* Chamando as funções dos botões de destaque e sem destaque 
para link, unlink, lists, desfazer, refazer, pois são operações únicas */
highlighter(alignButtons, true);
highlighter(spacingButtons, true);
highlighter(formatButtons, false);
highlighter(scriptButtons,true);
};

// Destacando botão clicado
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            /* True significa que apenas um botão deve ser 
            destacado e outro seria normal */
            if(needsRemoval) {
                let alreadyActive = false;

            // Se o botão atualmente clicado já estiver ativo
            if(button.classList.contains("active")) {
                alreadyActive = true;
            }

            //Removendo os destaques(highlighter) de outros botões
            highlighterRemover(className);
            if(!alreadyActive){
                //Destacar botão clicado
                button.classList.add("active"); 
            }
            }
            else{
                //se outros botões podem ser destacados
                button.classList.toggle("active");
            }
        });
    });
};

// Função para remover o destaque
const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active")
    });
}

window.onload = initializer();
