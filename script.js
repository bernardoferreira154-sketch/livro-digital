// Passo 8: variáveis, arrays e objetos
const contos = [
    {
      id: 0,
      titulo: "O Conto dos Três Irmãos",
      resumo: "Muito filho mesmo"
    },
    {
      id: 1,
      titulo: "O Conto Dos Dois Irmãos",
      resumo: "Eles são gêmeos"
    },
    {
      id: 2,
      titulo: "O Conto Do Um Irmão",
      resumo: "Ele é filho unico"
    }
  ];
  
  // Passo 10: troca de Skins atualizando o body
  function mudarCasa(nomeDaSkin) {
    document.body.className = nomeDaSkin;
  }
  
  // Passo 9: alterando o display dos containers
  function abrirLivro() {
    document.getElementById("tela-capa").style.display = "none";
    document.getElementById("tela-livro").style.display = "block";
  }
  
  // Passo 11: document.createElement e appendChild
  function carregarMenu() {
    const menuContainer = document.getElementById("lista-botoes");
  
    contos.forEach(conto => {
      const botao = document.createElement("button");
      botao.innerText = conto.titulo;


      botao.onclick = () => selecionarConto(conto.id, botao);
      menuContainer.appendChild(botao);
    });
  }
  
  function selecionarConto(id, botaoSelecionado) {
    // Passo 12: array find()
    const conto = contos.find(c => c.id === id);
  
    // Passo 9: innerText e style.display
    document.getElementById("contoTitulo").innerText = conto.titulo;
    document.getElementById("contoResumo").innerText = conto.resumo;
    document.getElementById("contoNota").style.display = "block";
  
    // Passo 12 e 14: forEach para remover a classe active e adicionar ao botão selecionado
    const botoes = document.querySelectorAll("#lista-botoes button");
    botoes.forEach(b => b.classList.remove("active"));
  
    botaoSelecionado.classList.add("active");
  }
  
  // Passo 13: window.onload
  window.onload = function() {
    carregarMenu();
  };