document.addEventListener("DOMContentLoaded", () => {
  const botoesAdicionar = document.querySelectorAll(".btn-add-carrinho");
  const contador = document.getElementById("contador-carrinho");

  function atualizarContador() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    contador.textContent = carrinho.length;
  }

  botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
      const nome = botao.getAttribute("data-nome");
      const preco = parseFloat(botao.getAttribute("data-preco"));
      const img = botao.getAttribute("data-img");

      const novoItem = { nome, preco, img };
      const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      carrinho.push(novoItem);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      atualizarContador();

      alert(`"${nome}" foi adicionado ao carrinho! 🛒`);
    });
  });

  atualizarContador();
});

function finalizarCompra() {
  if (confirm("Deseja realmente finalizar a compra?")) {
    localStorage.removeItem("carrinho");

    const nome = localStorage.getItem("nomeUsuario") || "cliente";
    alert(`Obrigado pela sua compra, ${nome}! 🧡`);

    setTimeout(() => {
      alert("Compra finalizada com sucesso! 🧡 Obrigado pela preferência.");
      window.location.href = "index.html";
    }, 300);
  }
}
