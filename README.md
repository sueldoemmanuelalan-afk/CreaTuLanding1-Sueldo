# 🎮 The Last Player

Ecommerce desarrollado en React para la venta de videojuegos.

La aplicación permite visualizar una lista de juegos obtenidos desde una base de datos en Firebase, filtrarlos por categorías, acceder al detalle individual de cada producto, gestionar un carrito de compras y finalizar la orden mediante un checkout.

---

## 🚀 Funcionalidades

- 📦 Listado dinámico de productos desde Firebase
- 🔎 Filtrado por categorías
- 📄 Vista de detalle del producto
- 🛒 Carrito de compras con:
  - Agregar productos
  - Aumentar / disminuir cantidad
  - Eliminar productos
  - Validación de stock
- 🧾 Checkout con validación de datos
- ☁️ Creación de órdenes en Firebase
- 📱 Diseño responsive
- 🎨 Estilizado con TailwindCSS

---

## 🧱 Tecnologías utilizadas

### ⚛️ React
Biblioteca principal para la construcción de la interfaz de usuario.

Documentación oficial:  
https://react.dev/

---

### 🔥 Firebase
Se utiliza Firestore como base de datos para:
- Obtener productos
- Guardar órdenes de compra
- Registrar timestamps del servidor

Documentación oficial:  
https://firebase.google.com/docs

---

### 🧭 React Router
Se utiliza para el manejo de rutas:
- `/` → listado de productos
- `/category/:id` → filtrado por categoría
- `/item/:id` → detalle del producto
- `/cart` → carrito
- `/checkout` → finalizar compra

Documentación oficial:  
https://reactrouter.com/

---

### 🎨 Tailwind CSS
Framework de estilos utilitario para el diseño responsive y moderno de la aplicación.

Documentación oficial:  
https://tailwindcss.com/docs

---

### ⚡ @tailwindcss/vite
Plugin oficial para integrar TailwindCSS con Vite.

Documentación oficial:  
https://tailwindcss.com/docs/guides/vite

---

## 📂 Estructura del Proyecto

```
src/
│
├── components/
│   ├── Navbar/
│   ├── CartWidget/
│   ├── ItemList/
│   ├── ItemDetail/
│   ├── Checkout/
│   └── ...
│
├── context/
│   └── CartContext.jsx
│
├── firebase/
│   └── config.js
│
└── App.jsx
```


---

## 🛠 Instalación y ejecución

```bash

1. Clonar el repositorio:

git clone <url-del-repositorio>


2. Instalar dependencias:

npm install


3. Ejecutar el proyecto:

npm run dev
```


📌 Notas

*El carrito valida que no se exceda el stock disponible.

*El checkout valida los datos antes de crear la orden.

*Las órdenes se almacenan en Firebase con timestamp del servidor.

*El diseño está optimizado para desktop y mobile.

👨‍💻 Autor

Desarrollado por Alan Sueldo
