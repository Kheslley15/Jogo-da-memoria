// Array de emojis com dois de cada tipo, para formar pares correspondentes no jogo
const emojis = [
  "👽",
  "👽",
  "💀",
  "💀",
  "🫀",
  "🫀",
  "🤖",
  "🤖",
  "☠️",
  "☠️",
  "💵",
  "💵",
  "🔱",
  "🔱",
  "🏎️",
  "🏎️",
];

// Array que armazena as cartas abertas (clicadas) pelo jogador
let openCards = [];

// Embaralha o array de emojis para que eles apareçam em uma ordem aleatória
let mixEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Adiciona cada div de emoji ao container ".game" no HTML, onde o jogo será exibido
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item"; // Define a classe CSS "item" para estilização
  box.innerHTML = mixEmojis[i]; // Define o emoji embaralhado como o conteúdo da div
  box.onclick = handleClick; // Define a função handleClick para ser executada quando o elemento for clicado
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen"); // Adiciona uma classe para estilizar as cartas abertas
    openCards.push(this); // Adiciona a carta clicada ao array openCards
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500); // Após abrir duas cartas, espera 500ms e executa checkMatch
  }

  console.log(openCards); // Mostra o array openCards no console para visualização
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch"); // Marca as cartas como "boxMatch" se formarem um par
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen"); // Reverte a abertura das cartas se não formarem um par
    openCards[1].classList.remove("boxOpen");
  }

  openCards = []; // Limpa o array openCards para uma nova tentativa de combinação

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu !"); // Exibe uma mensagem de vitória quando todos os pares forem encontrados
  }
}
