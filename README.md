## 🎮 The Last Player

E-commerce desarrollado en React + Vite + TailwindCSS para la venta de videojuegos, con integración a Firebase Firestore para productos y órdenes, gestión de carrito, checkout y navegación por categorías.

## 🚀 Proyecto SPA moderno con arquitectura escalable, separación de lógica y presentación, búsqueda en tiempo real y experiencia visual dinámica con video de fondo.

### 📌 Demo en vivo

👉 https://sueldoemmanuelalan-afk.github.io/CreaTuLanding1-Sueldo/

## 💡 Funcionalidades
### 🛍 Catálogo

✔ Listado dinámico de productos desde Firebase

✔ Filtrado por categorías

✔ Detalle individual de productos

✔ Navegación dentro de categorías

✔ Orden dinámico desde Firestore

### 🛒 Carrito de compras

✔ Agregar productos

✔ Incrementar / Disminuir cantidad

✔ Eliminar productos

✔ Validación automática de stock

✔ Toast de advertencia si se supera el stock

✔ Prevención de checkout con carrito vacío

### 🔍 Sistema de búsqueda avanzado (NUEVO)

✔ Ruta independiente /search

✔ Lupa en Navbar como widget

✔ Input de búsqueda en vista dedicada

✔ Filtrado en tiempo real

✔ SweetAlert2 si el juego no es encontrado

✔ Video dinámico que se oculta al mostrar resultados

✔ Arquitectura separada (Container + Presentación)

### 🎥 Experiencia visual

✔ Video dinámico en página de búsqueda

✔ Diseño gamer moderno

✔ Responsive completo

✔ UI optimizada con TailwindCSS

### 🧾 Checkout

✔ Validación de campos

✔ Creación de órdenes en Firebase

✔ SweetAlert con ID de orden generado

✔ Limpieza automática del carrito tras compra

## 🧠 Arquitectura del proyecto

El proyecto sigue buenas prácticas de escalabilidad:

### 🧱 Separación de responsabilidades

Containers → Manejo de lógica, estado y efectos

Components (Presentacionales) → UI pura y reutilizable

Context API → Estado global del carrito

Firebase layer → Separación de consultas en firebase/db.js

## 🛠 Tecnologías utilizadas
### ⚛ React

Biblioteca principal para interfaces dinámicas.
https://react.dev/

### 🗺 React Router DOM

Navegación SPA sin recarga de página.
https://reactrouter.com/

### ☁ Firebase Firestore

Base de datos NoSQL para productos y órdenes.
https://firebase.google.com/docs/firestore

### 🎨 Tailwind CSS

Framework utilitario para estilos rápidos y modernos.
https://tailwindcss.com/docs

### 🔔 React Hot Toast

Notificaciones dinámicas (control de stock).

### 🚫 SweetAlert2

Alertas personalizadas (checkout y búsqueda).

## 📂 Estructura del proyecto
```
src/
│
├── components/
│   ├── Navbar/
│   ├── CartWidget/
│   ├── SearchWidget/
│   ├── SearchResults/
│   ├── ItemList/
│   ├── ItemDetail/
│   ├── Checkout/
│   └── ...
│
├── containers/
│   ├── ItemListContainer.jsx
│   ├── ItemDetailContainer.jsx
│   ├── SearchResultsContainer.jsx
│
├── context/
│   └── CartContext.jsx
│
├── firebase/
│   └── db.js
│
└── App.jsx
```

## 🛠 Instalación y ejecución

1️⃣ Clonar repositorio
```
git clone https://github.com/sueldoemmanuelalan-afk/CreaTuLanding1-Sueldo.git
```

2️⃣ Instalar dependencias
```
npm install
```

3️⃣ Configurar Firebase

Crear src/firebase/config.js con tu configuración personal.

4️⃣ Ejecutar en local
```
npm run dev
```

## 🗺 Rutas principales
```
Ruta                               Descripción

/                                  Listado general
/category/:categoryId              Filtrado por categoría
/item/:id                          Detalle de producto
/category/:categoryId/item/:id     Detalle dentro de categoría
/search                            Página de búsqueda dinámica
/cart                              Carrito
/checkout                          Finalización de compra
```

## ⭐ Buenas prácticas implementadas

✔ Separación Container / Presentational

✔ Context API para estado global

✔ Validaciones de stock en múltiples niveles

✔ Protección contra renderizados undefined

✔ Control visual + lógico en búsqueda

✔ Firestore con índices apropiados

✔ UX mejorada con video dinámico


## 📦 Dependencias principales
```
"@tailwindcss/vite": "^4.1.18",
"firebase": "^12.9.0",
"react": "^19.2.0",
"react-dom": "^19.2.0",
"react-hot-toast": "^2.6.0",
"react-router": "^7.13.0",
"react-router-dom": "^7.12.0",
"sweetalert2": "^11.26.21",
"tailwindcss": "^4.1.18"
```
## 📌 Notas importantes

🔹 Firestore requiere índices compuestos para filtros combinados

🔹 El video de fondo usa muted + autoplay para compatibilidad

🔹 El sistema de búsqueda filtra en tiempo real desde memoria

🔹 Listo para integrar pasarelas de pago (Stripe / Mercado Pago)

🧑‍💻 Autor

Alan Sueldo
GitHub: https://github.com/sueldoemmanuelalan-afk

