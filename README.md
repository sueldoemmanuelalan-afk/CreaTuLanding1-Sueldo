# 🎮 The Last Player

E-commerce desarrollado en **React + Vite + TailwindCSS** para la venta de videojuegos, con integración a **Firebase Firestore** para productos y órdenes, gestión de carrito, checkout y navegación por categorías.

🚀 Este proyecto está pensado como un ejemplo real de tienda online SPA con manejo de rutas, validación de formularios, y arquitectura escalable.

---

##  📌 Demo en vivo

👉 https://sueldoemmanuelalan-afk.github.io/CreaTuLanding1-Sueldo/ 

---

## 💡 Funcionalidades

✔ Listado dinámico de productos desde Firebase  
✔ Filtrado por categorías  
✔ Detalle individual de productos  
✔ Navegación dentro de categorías   
✔ Checkout con validación de campos  
✔ Creación de órdenes en Firebase  
✔ SweetAlerts personalizadas  
✔ Diseño responsive y moderno  
✔ Manejo de estados global con Context API

✔ Carrito de compras con:

  - Agregar productos
  - Incrementar/Disminuir cantidad
  - Eliminar productos
  - Validación de stock

---

## 🧠 Tecnologías utilizadas

### 🛠 Lenguaje / Framework Principal
**React** – Biblioteca para interfaces dinámicas.  
👉 https://react.dev/ 

### 🗺 Rutas
**React Router DOM** – Navegación SPA.  
👉 https://reactrouter.com/ 

### ☁ Base de Datos
**Firebase Firestore** – DB NoSQL para productos y órdenes.  
👉 https://firebase.google.com/docs/firestore 

### 🎨 Estilos
**Tailwind CSS** y **@tailwindcss/vite** – Estilos utilitarios con Vite plugin.  
👉 https://tailwindcss.com/docs 

---

## 📂 Estructura del proyecto

```
src/
│
├── components/
│ ├── Navbar/
│ ├── CartWidget/
│ ├── ItemList/
│ ├── ItemDetail/
│ ├── Checkout/
│ └── ...
│
├── context/
│ └── CartContext.jsx
│
├── firebase/
│ └── db.js
│
└── App.jsx

```


---

## 🛠 Instalación y ejecución

1. **Clonar el repositorio**

```bash
git clone https://github.com/sueldoemmanuelalan-afk/CreaTuLanding1-Sueldo.git
```

2. Instalar dependencias
```
npm install
```

3. Configurar Firebase

 *Copiar tu configuración de Firebase en src/firebase/config.js.

4. Correr el proyecto en local
```
npm run dev
```

### 🗺 Rutas principales
```
    Ruta                              	Descripción

/	                               Listado general de productos
/category/:categoryId	           Filtrado por categoría
/item/:id	                       Detalle de producto
/category/:categoryId/item/:id	   Detalle dentro de categoría
/cart	                           Carrito de compras
/checkout	                       Formulario de finalización

```

### ⭐ Buenas prácticas incluidas

✔ Carrito persistente con contexto

✔ Prevención de checkout con carrito vacío

✔ SweetAlert con ID de orden generado

✔ Validación de campos en checkout

✔ Navegación lateral en detalle ajustada por categoría

✔ Orden y consulta de Firestore con índices apropiados


### 📌 Dependencias principales

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


### 📎 Documentación oficial

🔗 React Docs: https://react.dev/

🔗 Firebase Firestore: https://firebase.google.com/docs/firestore

🔗 React Router DOM: https://reactrouter.com/

🔗 Tailwind CSS: https://tailwindcss.com/docs

### 📌 Notas

🔹 Firestore requiere índices compuestos si usás filtros + orderBy

🔹 La navegación dentro de categorías respeta el orden de los datos

🔹 Puedes vincular medios de pago (Mercado Pago, Stripe, etc.) en producción


🧑‍💻 Autor

Alan Sueldo
Portfolio / GitHub: https://github.com/sueldoemmanuelalan-afk

