// ========================================
// BURGER BROTHER - CARRITO DE COMPRAS
// ========================================

class ShoppingCart {
  constructor() {
    this.items = [];
    this.loadFromStorage();
  }

  // ========================================
  // AGREGAR AL CARRITO
  // ========================================
  addItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.cantidad++;
    } else {
      this.items.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: 1,
        categoria: product.categoria,
      });
    }

    this.saveToStorage();
    this.updateCartUI();
    this.showNotification(`${product.nombre} agregado al carrito`);
  }

  // ========================================
  // ELIMINAR DEL CARRITO
  // ========================================
  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.saveToStorage();
    this.updateCartUI();
  }

  // ========================================
  // ACTUALIZAR CANTIDAD
  // ========================================
  updateQuantity(productId, newQuantity) {
    const item = this.items.find((item) => item.id === productId);

    if (item) {
      if (newQuantity <= 0) {
        this.removeItem(productId);
      } else {
        item.cantidad = newQuantity;
        this.saveToStorage();
        this.updateCartUI();
      }
    }
  }

  // ========================================
  // AUMENTAR CANTIDAD
  // ========================================
  increaseQuantity(productId) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      item.cantidad++;
      this.saveToStorage();
      this.updateCartUI();
    }
  }

  // ========================================
  // DISMINUIR CANTIDAD
  // ========================================
  decreaseQuantity(productId) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      if (item.cantidad > 1) {
        item.cantidad--;
      } else {
        this.removeItem(productId);
      }
      this.saveToStorage();
      this.updateCartUI();
    }
  }

  // ========================================
  // CALCULAR TOTAL
  // ========================================
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.precio * item.cantidad;
    }, 0);
  }

  // ========================================
  // OBTENER CANTIDAD TOTAL DE ITEMS
  // ========================================
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.cantidad, 0);
  }

  // ========================================
  // LIMPIAR CARRITO
  // ========================================
  clear() {
    this.items = [];
    this.saveToStorage();
    this.updateCartUI();
  }

  // ========================================
  // GUARDAR EN LOCALSTORAGE
  // ========================================
  saveToStorage() {
    try {
      localStorage.setItem("burgerBrotherCart", JSON.stringify(this.items));
    } catch (error) {
      console.error("Error al guardar carrito:", error);
    }
  }

  // ========================================
  // CARGAR DESDE LOCALSTORAGE
  // ========================================
  loadFromStorage() {
    try {
      const savedCart = localStorage.getItem("burgerBrotherCart");
      if (savedCart) {
        this.items = JSON.parse(savedCart);
      }
    } catch (error) {
      console.error("Error al cargar carrito:", error);
      this.items = [];
    }
  }

  // ========================================
  // ACTUALIZAR UI DEL CARRITO
  // ========================================
  updateCartUI() {
    // Actualizar badge de cantidad
    const cartBadge = document.querySelector(".cart-badge");
    const totalItems = this.getTotalItems();

    if (cartBadge) {
      cartBadge.textContent = totalItems;
      cartBadge.style.display = totalItems > 0 ? "flex" : "none";
    }

    // Actualizar contenido del carrito
    const cartItemsContainer = document.getElementById("cart-items");
    const cartEmpty = document.getElementById("cart-empty");
    const cartContent = document.getElementById("cart-content");
    const cartTotal = document.getElementById("cart-total");

    if (this.items.length === 0) {
      if (cartEmpty) cartEmpty.style.display = "block";
      if (cartContent) cartContent.style.display = "none";
    } else {
      if (cartEmpty) cartEmpty.style.display = "none";
      if (cartContent) cartContent.style.display = "block";

      // Renderizar items
      if (cartItemsContainer) {
        cartItemsContainer.innerHTML = this.items
          .map(
            (item) => `
          <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-info">
              <h4 class="cart-item-name">${item.nombre}</h4>
              <p class="cart-item-price">${formatearPrecio(item.precio)}</p>
            </div>
            <div class="cart-item-controls">
              <button class="cart-btn-decrease" onclick="cart.decreaseQuantity('${
                item.id
              }')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span class="cart-item-quantity">${item.cantidad}</span>
              <button class="cart-btn-increase" onclick="cart.increaseQuantity('${
                item.id
              }')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <button class="cart-btn-remove" onclick="cart.removeItem('${
                item.id
              }')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            <div class="cart-item-subtotal">
              ${formatearPrecio(item.precio * item.cantidad)}
            </div>
          </div>
        `
          )
          .join("");
      }

      // Actualizar total
      if (cartTotal) {
        cartTotal.textContent = formatearPrecio(this.getTotal());
      }
    }
  }

  // ========================================
  // GENERAR MENSAJE PARA WHATSAPP
  // ========================================
  generateWhatsAppMessage() {
    let message = `🍔 *PEDIDO BURGER BROTHER*\n\n`;
    message += `📋 *Productos:*\n`;

    this.items.forEach((item, index) => {
      message += `${index + 1}. ${item.nombre}\n`;
      message += `   Cantidad: ${item.cantidad}\n`;
      message += `   Precio: ${formatearPrecio(
        item.precio * item.cantidad
      )}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL: ${formatearPrecio(this.getTotal())}*\n\n`;

    return message;
  }

  // ========================================
  // CERRAR CARRITO
  // ========================================
  closeCart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartOverlay = document.getElementById("cart-overlay");

    if (cartSidebar) {
      cartSidebar.classList.remove("active");
      document.body.style.overflow = "";
    }

    if (cartOverlay) {
      cartOverlay.classList.remove("active");
    }
  }

  // ========================================
  // MOSTRAR NOTIFICACIÓN
  // ========================================
  showNotification(message, type = "success") {
    // Crear elemento de notificación
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Agregar al DOM
    document.body.appendChild(notification);

    // Mostrar con animación
    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    // Ocultar y eliminar después de 3 segundos
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
}

// ========================================
// INICIALIZAR CARRITO
// ========================================
const cart = new ShoppingCart();

// ========================================
// FUNCIONES PARA ABRIR/CERRAR CARRITO
// ========================================

function openCart() {
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartOverlay = document.getElementById("cart-overlay");

  if (cartSidebar) {
    cartSidebar.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (cartOverlay) {
    cartOverlay.classList.add("active");
  }
}

function closeCart() {
  cart.closeCart();
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Botón de carrito en header
  const cartButton = document.querySelector(".cart-button");
  if (cartButton) {
    cartButton.addEventListener("click", openCart);
  }

  // Botón cerrar carrito
  const closeButton = document.querySelector(".cart-close");
  if (closeButton) {
    closeButton.addEventListener("click", closeCart);
  }

  // Overlay para cerrar carrito
  const overlay = document.getElementById("cart-overlay");
  if (overlay) {
    overlay.addEventListener("click", closeCart);
  }

  // Botón enviar pedido - AQUÍ ESTÁ LA CORRECCIÓN
  const sendButton = document.getElementById("cart-send-whatsapp");
  if (sendButton) {
    sendButton.addEventListener("click", () => {
      if (cart.items.length === 0) {
        cart.showNotification("El carrito está vacío", "error");
        return;
      }

      const mensaje = cart.generateWhatsAppMessage();

      // Abrir modal de selección de WhatsApp
      if (typeof whatsappModal !== "undefined") {
        whatsappModal.open(mensaje);
      } else {
        console.error("whatsappModal no está definido");
      }
    });
  }

  // Botón limpiar carrito
  const clearButton = document.getElementById("cart-clear");
  if (clearButton) {
    clearButton.addEventListener("click", () => {
      if (confirm("¿Estás seguro de vaciar el carrito?")) {
        cart.clear();
        closeCart();
      }
    });
  }

  // Actualizar UI inicial
  cart.updateCartUI();
});
