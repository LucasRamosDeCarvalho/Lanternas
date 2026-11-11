const caminhosEmblema = {
  verde: '<circle cx="16" cy="16" r="7"/><path d="M7 9h18M7 23h18"/>',
  azul: '<circle cx="16" cy="16" r="3"/><path d="M5 9c4 0 7 2 8 5M27 9c-4 0-7 2-8 5M5 23c4 0 7-2 8-5m14 5c-4 0-7-2-8-5"/>',
  amarela: '<circle cx="16" cy="16" r="4"/><path d="m7 7 4 5m14-5-4 5M6 16h5m10 0h5M7 25l4-5m14 5-4-5"/>',
  vermelha: '<path d="M6 7v9l5 4 5 6 5-6 5-4V7l-6 5h-8z"/><path d="m11 20 5-4 5 4"/>',
  laranja: '<circle cx="16" cy="16" r="4"/><path d="M7 8c1 3 3 5 5 6m13-6c-1 3-3 5-5 6M7 24c1-3 3-5 5-6m13 6c-1-3-3-5-5-6"/>',
  indigo: '<path d="m16 5 9 11-9 11-9-11zM8 16h16m-8-7v14"/>',
  violeta: '<path d="m16 5 3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/>',
  preta: '<path d="m7 7 9 16 9-16H7zm5 18 4 3 4-3M10 12h12"/>',
  branca: '<circle cx="16" cy="16" r="5"/><path d="M16 5v6m0 10v6M5 16h6m10 0h6M8 8l4 4m8 8 4 4m0-16-4 4m-8 8-4 4"/>'
};

function emblema(tropa) {
  return `<span class="emblem" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${caminhosEmblema[tropa.id]}</svg></span>`;
}

function urlTropa(id, fragmento = "") {
  return `tropa.html?tropa=${id}${fragmento}`;
}

function ilustracao(tropa, classe = "portrait") {
  return `<div class="${classe}" data-portrait="${tropa.id}" aria-hidden="true"></div>`;
}

function montarInicio() {
  document.querySelector("#grade-tropas").innerHTML = tropas.map(tropa => `
    <a class="card troop-card" data-area="${tropa.id}" href="${urlTropa(tropa.id)}">
      <div class="troop-card-top">
        ${emblema(tropa)}
        <p class="card-kicker">${tropa.cor} <span aria-hidden="true">·</span> ${tropa.forca}</p>
      </div>
      <h3>${tropa.nome}</h3>
      <p class="card-description">${tropa.resumo}</p>
      <span class="card-link">Explorar <span aria-hidden="true">↗</span></span>
    </a>
  `).join("");

  document.querySelector("#grade-entidades").innerHTML = tropas.map(tropa => `
    <a class="card entity-card" data-area="${tropa.id}" href="${urlTropa(tropa.id, "#entidade")}">
      ${ilustracao(tropa, "portrait entity-art")}
      <div>
        <p class="card-kicker">${tropa.cor} <span aria-hidden="true">·</span> ${tropa.forca}</p>
        <h3>${tropa.entidade}</h3>
        <p class="card-description">${tropa.sobreEntidade}</p>
        <span class="card-link">Ver entidade <span aria-hidden="true">↗</span></span>
      </div>
    </a>
  `).join("");

  document.querySelector("#grade-personagens").innerHTML = tropas.filter(tropa => tropa.destaque).map(tropa => `
    <a class="card character-card" data-area="${tropa.id}" href="${urlTropa(tropa.id, "#integrantes")}">
      ${ilustracao(tropa)}
      <div class="character-copy">
        <p class="card-kicker">${tropa.nome}</p>
        <h3>${tropa.personagem}</h3>
        <p class="card-description">${tropa.destaque}</p>
        <span class="card-link">Ver integrantes <span aria-hidden="true">↗</span></span>
      </div>
    </a>
  `).join("");

  document.querySelector("#grade-historias").innerHTML = historias.map(historia => `
    <a class="card story-card" href="${urlTropa(historia.id, "#historia")}">
      <h3>${historia.titulo}</h3>
      <p class="card-description">${historia.resumo}</p>
      <span class="card-link">Ver história relacionada <span aria-hidden="true">↗</span></span>
    </a>
  `).join("");
}

function montarTropa(main) {
  const id = new URLSearchParams(location.search).get("tropa");
  const tropa = tropas.find(item => item.id === id);

  if (!tropa) {
    document.title = "Área indisponível | Lanternas";
    main.innerHTML = `
      <section class="wrap section">
        <h1>Área indisponível</h1>
        <p>Escolha uma das nove áreas no catálogo.</p>
        <a class="button button-primary" href="index.html#tropas">Voltar ao catálogo</a>
      </section>`;
    return;
  }

  document.title = `${tropa.nome} | Lanternas`;
  main.dataset.area = tropa.id;
  main.innerHTML = `
    <section class="detail-hero" aria-labelledby="titulo">
      <div class="wrap detail-hero-inner">
        <div>
          <nav class="breadcrumb" aria-label="Caminho da página">
            <a href="index.html#tropas">As nove tropas</a><span aria-hidden="true">/</span><span aria-current="page">${tropa.cor}</span>
          </nav>
          <div class="detail-emblem">${emblema(tropa)}<p class="eyebrow">${tropa.forca}</p></div>
          <h1 id="titulo">${tropa.nome}</h1>
          <p class="hero-copy">${tropa.resumo}</p>
          <a class="button button-primary" href="#poderes">Conhecer os poderes <span aria-hidden="true">↓</span></a>
        </div>
        <figure class="detail-portrait">
          ${ilustracao(tropa)}
          <figcaption>${tropa.personagem}<span>${tropa.papel || tropa.nome}</span></figcaption>
        </figure>
      </div>
    </section>
    <div class="wrap section detail-body">
      <div class="detail-layout">
        <section class="detail-intro" aria-labelledby="titulo-origem">
          <h2 id="titulo-origem">Origem</h2>
          <p>${tropa.origem}</p>
        </section>
        <section class="card detail-facts" aria-labelledby="titulo-informacoes">
          <h2 id="titulo-informacoes">Informações principais</h2>
          <dl class="ring-facts">
            <div><dt>Cor</dt><dd>${tropa.cor}</dd></div>
            <div><dt>Força</dt><dd>${tropa.forca}</dd></div>
            <div><dt>Portadores</dt><dd>${tropa.escolha}</dd></div>
          </dl>
        </section>
        <section class="card detail-entity" id="entidade" tabindex="-1" aria-labelledby="titulo-entidade">
          ${ilustracao(tropa, "portrait entity-art")}
          <div>
            <h2 id="titulo-entidade">Entidade associada</h2>
            <p><strong>${tropa.entidade}</strong> · ${tropa.sobreEntidade}</p>
            <p>${tropa.detalheEntidade}</p>
            <a class="text-link" href="index.html#entidades">Ver entidades do espectro <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <section class="card detail-block" id="integrantes" tabindex="-1" aria-labelledby="titulo-integrantes">
          <h2 id="titulo-integrantes">Integrantes e figuras ligadas à tropa</h2>
          <ul class="member-list">${tropa.integrantes.map(nome => `<li>${nome}</li>`).join("")}</ul>
        </section>
        <section class="card detail-block" id="poderes" tabindex="-1" aria-labelledby="titulo-poderes">
          <h2 id="titulo-poderes">Poderes e anel</h2>
          <p>${tropa.poderes}</p>
          <h3>${tropa.notaJuramento ? "Sobre o juramento" : "Sentido do juramento"}</h3>
          <p>${tropa.notaJuramento || tropa.juramento}</p>
          <a class="text-link" href="https://www.dc.com/blog/2022/03/10/ask-the-question-how-many-lantern-oaths-are-there">Consultar juramentos na DC <span aria-hidden="true">↗</span></a>
        </section>
        <section class="card detail-block" id="historia" tabindex="-1" aria-labelledby="titulo-historia">
          <h2 id="titulo-historia">História relacionada</h2>
          <h3>${tropa.historia}</h3>
          <p>${tropa.sobreHistoria}</p>
        </section>
      </div>
      <nav class="area-nav" aria-labelledby="titulo-areas">
        <h2 id="titulo-areas">Navegar pelas áreas</h2>
        <div class="area-links">
          ${tropas.map(item => `<a class="area-link" data-area="${item.id}" href="${urlTropa(item.id)}"${item.id === tropa.id ? ' aria-current="page"' : ""}>${emblema(item)} <span>${item.nome}</span></a>`).join("")}
        </div>
        <a class="button button-secondary" href="index.html#tropas"><span aria-hidden="true">←</span> Voltar ao catálogo</a>
      </nav>
    </div>`;

  const alvo = document.getElementById(location.hash.slice(1));
  if (alvo) alvo.scrollIntoView();
}

const main = document.querySelector("main");
if (main.classList.contains("troop-page")) {
  montarTropa(main);
} else {
  montarInicio();
}

const menu = document.querySelector(".main-nav");
const menuButton = document.querySelector(".menu-toggle");
const linksMenu = [...menu.querySelectorAll("a")];
menuButton.hidden = false;

function abrirMenu(aberto) {
  menuButton.setAttribute("aria-expanded", String(aberto));
  menu.classList.toggle("is-open", aberto);
}

menuButton.addEventListener("click", () => {
  abrirMenu(menuButton.getAttribute("aria-expanded") === "false");
});

document.querySelector(".masthead").addEventListener("keydown", evento => {
  if (evento.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    abrirMenu(false);
    menuButton.focus();
  }
});

for (const link of linksMenu) {
  link.addEventListener("click", () => {
    if (menuButton.getAttribute("aria-expanded") !== "true") return;
    abrirMenu(false);
    if (link.hash && link.pathname === location.pathname) {
      const secao = document.getElementById(link.hash.slice(1));
      if (secao) {
        secao.tabIndex = -1;
        secao.focus({ preventScroll: true });
      }
    }
  });
}

if (!main.classList.contains("troop-page")) {
  function indicarSecao() {
    const atual = linksMenu.find(link => link.hash === location.hash) || linksMenu[0];
    for (const link of linksMenu) link.removeAttribute("aria-current");
    atual.setAttribute("aria-current", "location");
  }

  addEventListener("hashchange", indicarSecao);
  indicarSecao();
}
