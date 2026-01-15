// ========================================
// BURGER BROTHER - DATOS DEL MENÚ
// ========================================

const menuData = {
  // 🍔 HAMBURGUESAS CLÁSICAS
  hamburguesasClasicas: [
    {
      id: "ham-1",
      nombre: "Carne - Pollo - Cerdo",
      descripcion:
        "Pan brioche, carne de res, queso fundido, tocineta, vegetales, cebolla en grille y papas a la francesa",
      precio: 20000,
      categoria: "clasicas",
    },
    {
      id: "ham-2",
      nombre: "Onion Burger",
      descripcion:
        "Pan brioche, carne de res, queso fundido, tocineta, vegetales, aros de cebolla y papas a la francesa",
      precio: 22000,
      categoria: "clasicas",
    },
    {
      id: "ham-3",
      nombre: "Bacon Burger",
      descripcion:
        "Pan brioche, carne de res, queso cheddar y fundido, tocineta premium, vegetales, cebolla en grille y papas a la francesa",
      precio: 23000,
      categoria: "clasicas",
    },
    {
      id: "ham-4",
      nombre: "Americana",
      descripcion:
        "Pan brioche, carne de res, queso cheddar fundido, tocineta, pepinillos, vegetales, cebolla en grille y papas a la francesa",
      precio: 22000,
      categoria: "clasicas",
    },
    {
      id: "ham-5",
      nombre: "Madurita",
      descripcion:
        "Pan brioche, carne de res, queso fundido, tajadas de maduro, tocineta, vegetales, cebolla en grille, maduro frito y papas a la francesa",
      precio: 23000,
      categoria: "clasicas",
    },
  ],

  // ⭐ HAMBURGUESAS ESPECIALES
  hamburguesasEspeciales: [
    {
      id: "ham-6",
      nombre: "Sister",
      descripcion:
        "Pan brioche, carne de res, pollo desmechado, queso, tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 24000,
      categoria: "especiales",
    },
    {
      id: "ham-7",
      nombre: "Bro Burger",
      descripcion:
        "Pan brioche, carne de res, chorizo especial, queso, tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 24000,
      categoria: "especiales",
    },
    {
      id: "ham-8",
      nombre: "Brother",
      descripcion:
        "Pan brioche, carne de res, pollo desmechado, doble queso fundido, doble tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 26000,
      categoria: "especiales",
    },
    {
      id: "ham-9",
      nombre: "Mixta",
      descripcion:
        "Pan brioche, carne de res, filete de pollo, doble queso, tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 27000,
      categoria: "especiales",
    },
    {
      id: "ham-10",
      nombre: "Ranchera",
      descripcion:
        "Pan brioche, carne de res, pollo desmechado, maíz, cabano, tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 27000,
      categoria: "especiales",
    },
    {
      id: "ham-11",
      nombre: "Desmechada",
      descripcion:
        "Pan brioche, carne de res, queso fundido, carne desmechada, tocineta, vegetales, cebolla en grille y papas a la francesa",
      precio: 27000,
      categoria: "especiales",
    },
    {
      id: "ham-12",
      nombre: "Burger Filete Ahumado",
      descripcion:
        "Pan brioche, carne de res, jamón ahumado de cerdo BBQ, queso fundido, tocineta, queso crema, vegetales, cebolla en grille, papas a la francesa",
      precio: 28000,
      categoria: "especiales",
    },
  ],

  // 👑 HAMBURGUESAS PREMIUM
  hamburguesasPremium: [
    {
      id: "ham-13",
      nombre: "El Jefe",
      descripcion:
        "200gr pan brioche, 200gr carne de res, queso fundido, aros de cebolla, queso crema, vegetales, cebolla en grille, papas a la francesa",
      precio: 27000,
      categoria: "premium",
    },
    {
      id: "ham-14",
      nombre: "Doble Carne",
      descripcion:
        "Pan brioche, doble carne de res, doble queso, doble tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 27000,
      categoria: "premium",
    },
    {
      id: "ham-15",
      nombre: "Americana Especial",
      descripcion:
        "Pan brioche, doble carne de res, doble cheddar fundido, doble tocineta, pepinillos, vegetales, cebolla en grille, papas a la francesa",
      precio: 28000,
      categoria: "premium",
    },
  ],

  // 🔥 HAMBURGUESAS EXTREMAS
  hamburguesasExtremas: [
    {
      id: "ham-16",
      nombre: "Doble Carne Especial",
      descripcion:
        "Pan brioche, doble carne de res, chorizo especial, doble queso fundido, tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 29000,
      categoria: "extremas",
    },
    {
      id: "ham-17",
      nombre: "Master Especial",
      descripcion:
        "Pan brioche, carne de res, filete de pollo o pollo desmechado, chorizo, doble queso fundido, tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 29000,
      categoria: "extremas",
    },
    {
      id: "ham-18",
      nombre: "Brother Burger D La Casa",
      descripcion:
        "Pan brioche, carne de res, filete de pollo, carne de cerdo, doble queso, doble tocineta, vegetales, cebolla en grille, papas a la francesa",
      precio: 32000,
      categoria: "extremas",
    },
    {
      id: "ham-19",
      nombre: "Burger La Mayor",
      descripcion:
        "Pan brioche, triple carne de res, triple tocineta, triple queso, vegetales, cebolla en grille, papas a la francesa",
      precio: 34000,
      categoria: "extremas",
      nuevo: true,
    },
  ],

  // 🌭 PERROS CLÁSICOS
  perrosClasicos: [
    {
      id: "perro-1",
      nombre: "Americano",
      descripcion:
        "Pan brioche, salchicha americana, cebolla en grille, papa ripio, queso fundido, tocineta, papas a la francesa",
      precio: 20000,
      categoria: "perros-clasicos",
    },
    {
      id: "perro-2",
      nombre: "Choriperro",
      descripcion:
        "Pan brioche, chorizo especial, cebolla en grille, papa ripio, queso fundido, tocineta, papas a la francesa",
      precio: 20000,
      categoria: "perros-clasicos",
    },
  ],

  // ⭐ PERROS ESPECIALES
  perrosEspeciales: [
    {
      id: "perro-3",
      nombre: "Salchichoriperro",
      descripcion:
        "Pan brioche, salchicha americana, chorizo especial, cebolla en grille, papa ripio, queso fundido, tocineta, papas a la francesa",
      precio: 21000,
      categoria: "perros-especiales",
    },
    {
      id: "perro-4",
      nombre: "Especial",
      descripcion:
        "Pan brioche, salchicha americana, pollo desmechado, papa ripio, cebolla en grille, queso fundido, tocineta, papas a la francesa",
      precio: 23000,
      categoria: "perros-especiales",
    },
    {
      id: "perro-5",
      nombre: "Perro Ranchero",
      descripcion:
        "Pan brioche, salchicha americana, pollo desmechado, maíz, cabano, tocineta, cebolla en grille, queso, papas a la francesa",
      precio: 24000,
      categoria: "perros-especiales",
      nuevo: true,
    },
    {
      id: "perro-6",
      nombre: "Loco",
      descripcion:
        "Pan brioche, salchicha americana, trozos de carne de res, trozos de filete de pollo, papa ripio, queso fundido, tocineta, cebolla en grille, papas a la francesa",
      precio: 25000,
      categoria: "perros-especiales",
    },
  ],

  // 🍖 PICADAS
  picadas: [
    {
      id: "picada-1",
      nombre: "Picada X2",
      descripcion:
        "Trozos de carne, trozos de pollo, chorizo especial, salchicha, salchicha americana, queso costeño, lechuga romana, papas a la francesa",
      precio: 35000,
      personas: 2,
      categoria: "picadas",
    },
    {
      id: "picada-2",
      nombre: "Picada X3",
      descripcion:
        "Trozos de carne, trozos de pollo, chorizo especial, salchicha, salchicha americana, queso costeño, lechuga romana, papas a la francesa",
      precio: 45000,
      personas: 3,
      categoria: "picadas",
    },
    {
      id: "picada-3",
      nombre: "Picada X4",
      descripcion:
        "Trozos de carne, trozos de pollo, chorizo especial, salchicha, salchicha americana, queso costeño, lechuga romana, papas a la francesa",
      precio: 65000,
      personas: 4,
      categoria: "picadas",
    },
  ],

  // 🥩 CARNES ASADAS
  carnesAsadas: [
    {
      id: "carne-1",
      nombre: "Pechuga a la Plancha",
      descripcion: "Filete de pechuga, ensalada, papas a la francesa",
      precio: 26000,
      categoria: "carnes",
    },
    {
      id: "carne-2",
      nombre: "Pechuga Gratinada",
      descripcion:
        "Filete de pechuga, queso fundido, maíz, ensalada, papas a la francesa",
      precio: 28000,
      categoria: "carnes",
    },
    {
      id: "carne-3",
      nombre: "Carne a la Plancha",
      descripcion: "Filete de carne, ensalada, papas a la francesa",
      precio: 28000,
      categoria: "carnes",
    },
    {
      id: "carne-4",
      nombre: "Carne Mixta",
      descripcion:
        "Filete de carne, filete de pechuga, ensalada, papas a la francesa",
      precio: 30000,
      categoria: "carnes",
    },
  ],

  // 🍟 PAPAS FRITAS
  papasFritas: [
    {
      id: "papas-1",
      nombre: "Salchipapa Tradicional",
      descripcion: "Salchicha, papa ripio, queso costeño, papas a la francesa",
      precio: 16000,
      categoria: "papas",
    },
    {
      id: "papas-2",
      nombre: "Salchipapa Americano",
      descripcion:
        "Salchicha americana, maíz, papa ripio, queso costeño, papas a la francesa",
      precio: 16000,
      categoria: "papas",
    },
    {
      id: "papas-3",
      nombre: "Choripapa",
      descripcion:
        "Chorizo especial, maíz, papa ripio, queso costeño, papas a la francesa",
      precio: 18000,
      categoria: "papas",
    },
    {
      id: "papas-4",
      nombre: "Salchoripapa",
      descripcion:
        "Salchicha americana, chorizo especial, maíz, papa ripio, queso costeño, papas a la francesa",
      precio: 22000,
      categoria: "papas",
    },
    {
      id: "papas-5",
      nombre: "Salchichori Carne o Pollo",
      descripcion:
        "Salchicha americana, chorizo especial, trozos de carne o pollo, queso costeño, maíz, papa ripio, papas a la francesa",
      precio: 26000,
      categoria: "papas",
    },
    {
      id: "papas-6",
      nombre: "Papas Locas",
      descripcion:
        "Chorizo especial, salchicha americana, trozos de carne, trozos de pollo, maíz, queso costeño, papas a la francesa",
      precio: 30000,
      categoria: "papas",
    },
    {
      id: "papas-7",
      nombre: "Desgranado",
      descripcion: "Maíz, pollo desmechado, queso fundido, papas a la francesa",
      precio: 22000,
      categoria: "papas",
    },
    {
      id: "papas-8",
      nombre: "Desgranado Ranchero",
      descripcion:
        "Maíz, pollo desmechado, cabano, queso fundido, tocineta, papas a la francesa",
      precio: 25000,
      categoria: "papas",
    },
    {
      id: "papas-9",
      nombre: "Nuggets",
      descripcion: "Nuggets, maíz, papas a la francesa",
      precio: 18000,
      categoria: "papas",
    },
  ],

  // 🥤 BEBIDAS
  bebidas: [
    {
      id: "bebida-1",
      nombre: "Coca Cola 400ml",
      precio: 4000,
      categoria: "bebidas-gaseosas",
    },
    {
      id: "bebida-2",
      nombre: "Corona",
      precio: 4000,
      categoria: "bebidas-cervezas",
    },
    {
      id: "bebida-3",
      nombre: "Postobón 400ml",
      precio: 4000,
      categoria: "bebidas-gaseosas",
    },
    {
      id: "bebida-4",
      nombre: "Cola y Pola",
      precio: 3500,
      categoria: "bebidas-gaseosas",
    },
    {
      id: "bebida-5",
      nombre: "Cerveza Águila",
      precio: 4000,
      categoria: "bebidas-cervezas",
    },
    {
      id: "bebida-6",
      nombre: "Cerveza Poker",
      precio: 4000,
      categoria: "bebidas-cervezas",
    },
    {
      id: "bebida-7",
      nombre: "Agua",
      precio: 3000,
      categoria: "bebidas-otras",
    },
    {
      id: "bebida-8",
      nombre: "Soda",
      precio: 3500,
      categoria: "bebidas-otras",
    },
    {
      id: "bebida-9",
      nombre: "Soda Bretaña",
      precio: 3500,
      categoria: "bebidas-otras",
    },
    {
      id: "bebida-10",
      nombre: "Jugo Hit",
      precio: 4000,
      categoria: "bebidas-jugos",
    },
    {
      id: "bebida-11",
      nombre: "Jugo Hit Litro",
      precio: 7000,
      categoria: "bebidas-jugos",
    },
    {
      id: "bebida-12",
      nombre: "Coca Cola 1.5L",
      precio: 8000,
      categoria: "bebidas-gaseosas",
    },
    {
      id: "bebida-13",
      nombre: "Postobón 1.5L",
      precio: 7000,
      categoria: "bebidas-gaseosas",
    },
    {
      id: "bebida-14",
      nombre: "Mega",
      precio: 12000,
      categoria: "bebidas-otras",
    },
  ],

  // 🍹 SODAS ARTESANALES
  sodasArtesanales: [
    {
      id: "soda-1",
      nombre: "Maracuyá",
      precio: 8000,
      categoria: "sodas",
    },
    {
      id: "soda-2",
      nombre: "Frutos Rojos",
      precio: 8000,
      categoria: "sodas",
    },
    {
      id: "soda-3",
      nombre: "Frutos Amarillos",
      precio: 8000,
      categoria: "sodas",
    },
  ],
};

// ========================================
// CONFIGURACIÓN GENERAL
// ========================================

const config = {
  restaurante: {
    nombre: "Burger Brother",
    slogan: "La excelencia en el comer!",
    whatsapp: "573153838968", // ⚠️ REEMPLAZAR con el número real del cliente
    mensajeWhatsApp: "¡Hola! Quiero hacer un pedido de Burger Brother 🍔",
  },
  moneda: {
    simbolo: "$",
    separadorMiles: ".",
    separadorDecimal: ",",
  },
};

// ========================================
// FUNCIÓN AUXILIAR - Formatear Precio
// ========================================

function formatearPrecio(precio) {
  return `${config.moneda.simbolo}${precio
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, config.moneda.separadorMiles)}`;
}

