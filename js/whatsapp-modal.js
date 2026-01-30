const whatsappModal = {
  modal: null,
  overlay: null,
  closeBtn: null,
  options: null,
  pendingMessage: null,

  init() {
    this.modal = document.getElementById("whatsapp-modal");
    this.overlay = document.getElementById("modal-overlay");
    this.closeBtn = document.getElementById("modal-close");
    this.options = document.querySelectorAll(".whatsapp-option");

    if (!this.modal) {
      console.error("Modal de WhatsApp no encontrado");
      return;
    }

    this.overlay.addEventListener("click", () => this.close());
    this.closeBtn.addEventListener("click", () => this.close());

    this.options.forEach((option) => {
      option.addEventListener("click", () => {
        const phone = option.getAttribute("data-phone");
        const name = option.getAttribute("data-name");
        this.sendWhatsApp(phone, name);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("active")) {
        this.close();
      }
    });
  },

  open(message = null) {
    if (!this.modal) {
      console.error("No se puede abrir el modal");
      return;
    }

    this.pendingMessage = message;
    this.modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  close() {
    if (!this.modal) return;

    this.modal.classList.remove("active");
    document.body.style.overflow = "";
    this.pendingMessage = null;
  },

  sendWhatsApp(phone, name) {
    let message =
      this.pendingMessage ||
      "¡Hola! Quiero hacer un pedido de Burger Brother 🍔";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    this.close();

    // Cerrar el carrito después de seleccionar el número
    if (typeof cart !== "undefined" && cart.closeCart) {
      setTimeout(() => {
        cart.closeCart();
      }, 300);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  whatsappModal.init();
});
