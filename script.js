/*
  Aplica o tema salvo imediatamente para evitar
  que a página apareça rapidamente com o tema errado.
*/
(function () {
  var tema = localStorage.getItem("theme");

  if (
    tema === "dark" ||
    (
      !tema &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  ) {
    document.body.classList.add("dark");
  }
})();

document.addEventListener("DOMContentLoaded", function () {

  /*
    Elementos de acessibilidade
  */
  var htmlElement = document.documentElement;

  var tamanhoAtual = parseInt(
    localStorage.getItem("fontSize") || "100"
  );

  htmlElement.style.fontSize = tamanhoAtual + "%";

  var mensagens = document.getElementById(
    "mensagens-acessibilidade"
  );

  var btnDiminuir = document.getElementById(
    "btn-decrease-font"
  );

  var btnAumentar = document.getElementById(
    "btn-increase-font"
  );

  /*
    Atualiza os estados dos botões A- e A+
  */
  function atualizarBotoesFonte() {
    btnDiminuir.disabled = tamanhoAtual <= 80;
    btnAumentar.disabled = tamanhoAtual >= 150;

    btnDiminuir.setAttribute(
      "aria-label",
      "Diminuir tamanho da fonte. Tamanho atual: " +
      tamanhoAtual +
      " por cento."
    );

    btnAumentar.setAttribute(
      "aria-label",
      "Aumentar tamanho da fonte. Tamanho atual: " +
      tamanhoAtual +
      " por cento."
    );
  }

  /*
    Altera o tamanho da fonte
  */
  function atualizarTamanho(novoTamanho) {
    if (
      novoTamanho >= 80 &&
      novoTamanho <= 150
    ) {
      tamanhoAtual = novoTamanho;

      htmlElement.style.fontSize =
        tamanhoAtual + "%";

      localStorage.setItem(
        "fontSize",
        tamanhoAtual.toString()
      );

      atualizarBotoesFonte();

      mensagens.textContent =
        "Tamanho da fonte alterado para " +
        tamanhoAtual +
        " por cento.";
    }
  }

  atualizarBotoesFonte();

  btnDiminuir.addEventListener(
    "click",
    function () {
      atualizarTamanho(tamanhoAtual - 10);
    }
  );

  btnAumentar.addEventListener(
    "click",
    function () {
      atualizarTamanho(tamanhoAtual + 10);
    }
  );

  /*
    Alternância entre modo claro e modo escuro
  */
  var btnTema = document.getElementById(
    "btn-toggle-theme"
  );

  function atualizarIconeTema() {
    var sol = btnTema.querySelector(
      ".icon-sun"
    );

    var lua = btnTema.querySelector(
      ".icon-moon"
    );

    var modoEscuro =
      document.body.classList.contains("dark");

    if (modoEscuro) {
      sol.style.display = "inline-block";
      lua.style.display = "none";
    } else {
      sol.style.display = "none";
      lua.style.display = "inline-block";
    }

    var modoAtual = modoEscuro
      ? "escuro"
      : "claro";

    var proximoModo = modoEscuro
      ? "claro"
      : "escuro";

    btnTema.setAttribute(
      "aria-label",
      "Ativar modo " +
      proximoModo +
      ". Modo atual: " +
      modoAtual + **…**

_Esta resposta é muito longa para ser exibida na íntegra._
