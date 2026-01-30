// ========================================
// BURGER BROTHER - FUNCIONES PRINCIPALES
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initAnimations();
  initScrollEffects();
  initCategoryNavigation();
});

// ========================================
// INICIALIZAR MENÚ
// ========================================

function initMenu() {
  renderMenuSections();
}

// ========================================
// RENDERIZAR TODAS LAS SECCIONES DEL MENÚ
// ========================================

function renderMenuSections() {
  const menuContainer = document.getElementById("menu-container");
  if (!menuContainer) return;

  menuContainer.innerHTML = `
    ${renderSection(
      "Hamburguesas Clásicas",
      menuData.hamburguesasClasicas,
      "hamburguesas-clasicas",
      "🍔"
    )}
    ${renderSection(
      "Hamburguesas Especiales",
      menuData.hamburguesasEspeciales,
      "hamburguesas-especiales",
      "⭐"
    )}
    ${renderSection(
      "Hamburguesas Premium",
      menuData.hamburguesasPremium,
      "hamburguesas-premium",
      "👑"
    )}
    ${renderSection(
      "Hamburguesas Extremas",
      menuData.hamburguesasExtremas,
      "hamburguesas-extremas",
      "🔥"
    )}
    ${renderSection(
      "Perros Clásicos",
      menuData.perrosClasicos,
      "perros-clasicos",
      "🌭"
    )}
    ${renderSection(
      "Perros Especiales",
      menuData.perrosEspeciales,
      "perros-especiales",
      "⭐"
    )}
    ${renderSection("Papas Fritas", menuData.papasFritas, "papas-fritas", "🍟")}
    ${renderSection("Picadas", menuData.picadas, "picadas", "🍖")}
    ${renderSection(
      "Carnes Asadas",
      menuData.carnesAsadas,
      "carnes-asadas",
      "🥩"
    )}
    ${renderBebidasSection()}
  `;

  addCartButtonListeners();
}

// ========================================
// RENDERIZAR UNA SECCIÓN
// ========================================

function renderSection(title, items, sectionId, emoji) {
  return `
    <section class="menu-section" id="${sectionId}">
      <div class="section-header">
        <span class="section-emoji">${emoji}</span>
        <h2 class="section-title">${title}</h2>
      </div>
      <div class="section-divider"></div>
      <div class="menu-grid">
        ${items.map((item) => renderMenuItem(item)).join("")}
      </div>
    </section>
  `;
}

// ========================================
// RENDERIZAR UN ITEM DEL MENÚ
// ========================================

function renderMenuItem(item) {
  const isNuevo = item.nuevo ? '<span class="badge-nuevo">NUEVO</span>' : "";
  const hasDescription = item.descripcion
    ? `<p class="item-description">${item.descripcion}</p>`
    : "";
  const personas = item.personas
    ? `<span class="item-personas">Para ${item.personas} personas</span>`
    : "";

  return `
    <div class="menu-item" data-id="${item.id}">
      <div class="item-header">
        <h3 class="item-name">${item.nombre}</h3>
        ${isNuevo}
      </div>
      ${hasDescription}
      ${personas}
      <div class="item-footer">
        <span class="item-price">${formatearPrecio(item.precio)}</span>
        <button class="btn-add-cart" data-product='${JSON.stringify(item)}'>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Agregar
        </button>
      </div>
    </div>
  `;
}

// ========================================
// RENDERIZAR SECCIÓN DE BEBIDAS
// ========================================

function renderBebidasSection() {
  return `
    <section class="menu-section" id="bebidas">
      <div class="section-header">
        <span class="section-emoji">🥤</span>
        <h2 class="section-title">Bebidas</h2>
      </div>
      <div class="section-divider"></div>
      <div class="bebidas-container">
        <div class="bebidas-grid">
          ${menuData.bebidas.map((item) => renderBebidaItem(item)).join("")}
        </div>
        <div class="sodas-section">
          <h3 class="sodas-title">🍹 Sodas Artesanales</h3>
          <div class="sodas-grid">
            ${menuData.sodasArtesanales
              .map((item) => renderBebidaItem(item))
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

// ========================================
// RENDERIZAR ITEM DE BEBIDA
// ========================================

function renderBebidaItem(item) {
  return `
    <div class="bebida-item" data-id="${item.id}">
      <div class="bebida-info">
        <span class="bebida-name">${item.nombre}</span>
        <span class="bebida-price">${formatearPrecio(item.precio)}</span>
      </div>
      <button class="btn-add-bebida" data-product='${JSON.stringify(item)}'>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  `;
}

// ========================================
// AGREGAR EVENT LISTENERS A BOTONES
// ========================================

function addCartButtonListeners() {
  const addButtons = document.querySelectorAll(
    ".btn-add-cart, .btn-add-bebida"
  );

  addButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const productData = JSON.parse(this.getAttribute("data-product"));
      cart.addItem(productData);

      this.classList.add("added");
      setTimeout(() => {
        this.classList.remove("added");
      }, 600);
    });
  });
}

// ========================================
// NAVEGACIÓN POR CATEGORÍAS
// ========================================

function initCategoryNavigation() {
  const categoryButtons = document.querySelectorAll(".category-btn");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      if (category === "todas") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        scrollToSection(category);
      }
    });
  });

  observeSections();
}

// ========================================
// SCROLL PERFECTO A SECCIÓN
// ========================================

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const header = document.querySelector(".header");
  const categoriesNav = document.querySelector(".categories-nav");

  const headerHeight = header ? header.offsetHeight : 0;
  const categoriesHeight = categoriesNav ? categoriesNav.offsetHeight : 0;
  const totalOffset = headerHeight + categoriesHeight + 20;

  const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = sectionTop - totalOffset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

// ========================================
// OBSERVAR SECCIONES VISIBLES
// ========================================

function observeSections() {
  const sections = document.querySelectorAll(".menu-section");
  const categoryButtons = document.querySelectorAll(".category-btn");

  const observerOptions = {
    root: null,
    rootMargin: "-150px 0px -50% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;

        categoryButtons.forEach((btn) => {
          const btnCategory = btn.getAttribute("data-category");
          if (btnCategory === sectionId) {
            categoryButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            btn.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// ========================================
// ANIMACIONES AL SCROLL
// ========================================

function initScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(".menu-section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  const items = document.querySelectorAll(".menu-item, .bebida-item");
  items.forEach((item) => {
    observer.observe(item);
  });
}

// ========================================
// ANIMACIONES INICIALES
// ========================================

function initAnimations() {
  const header = document.querySelector(".header");
  if (header) {
    setTimeout(() => {
      header.classList.add("loaded");
    }, 100);
  }

  const logo = document.querySelector(".logo-img");
  if (logo) {
    logo.addEventListener("load", function () {
      this.classList.add("loaded");
    });
  }
}

// ========================================
// DETECTAR SCROLL PARA HEADER
// ========================================

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    header.classList.remove("scrolled");
  } else {
    header.classList.add("scrolled");
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (currentScroll < lastScroll) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});
