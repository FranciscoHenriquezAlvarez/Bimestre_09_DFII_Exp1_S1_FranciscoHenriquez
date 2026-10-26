# 🛒 SuperAhorro

## Frontend II — Experiencia 1, Semana 1

**Asignatura:** Frontend II (PFY2202)
**Estudiante:** Francisco Henríquez
**Proyecto:** SuperAhorro
**Bimestre:** 09

---

## 📋 Descripción del proyecto

SuperAhorro es una aplicación web desarrollada con React y Vite que representa un supermercado ficticio.

En esta primera semana, el desarrollo se centra en implementar la navegación entre distintas páginas mediante **React Router DOM v6**, utilizando componentes independientes y un menú de navegación inferior.

El proyecto constituye la base para continuar incorporando funcionalidades durante las siguientes actividades de la asignatura.

## 🎯 Objetivo de la Semana 1

Implementar una aplicación React que permita navegar entre tres páginas mediante React Router, sin recargar completamente el sitio.

## 🛠️ Tecnologías utilizadas

* **React:** desarrollo de la interfaz mediante componentes.
* **Vite:** creación y ejecución del proyecto.
* **JavaScript (JSX):** implementación de componentes y contenido dinámico.
* **React Router DOM v6:** configuración de rutas y navegación.
* **CSS3:** estilos visuales y diseño adaptable.
* **Git y GitHub:** control de versiones y publicación del código.

## 📄 Páginas implementadas

### 🏠 Inicio

Presenta el supermercado y muestra un catálogo demostrativo de seis productos, incluyendo:

* Nombre y categoría.
* Precio expresado en pesos chilenos.
* Stock disponible.
* Ícono representativo.

### 🏪 Quiénes somos

Contiene información institucional del supermercado, incluyendo su misión y visión.

### 📞 Contáctanos

Presenta información ficticia de contacto, como correo electrónico, teléfono y ubicación.

## 🧭 Navegación con React Router

La aplicación utiliza los siguientes elementos:

| Elemento        | Función                                                   |
| --------------- | --------------------------------------------------------- |
| `BrowserRouter` | Habilita la navegación mediante rutas.                    |
| `Routes`        | Agrupa las rutas disponibles.                             |
| `Route`         | Asocia una dirección con un componente.                   |
| `Link`          | Permite navegar sin recargar completamente la página.     |
| `useLocation`   | Identifica la ruta actual para destacar el enlace activo. |

### Rutas configuradas

| Ruta             | Componente         |
| ---------------- | ------------------ |
| `/`              | `Home.jsx`         |
| `/quienes-somos` | `QuienesSomos.jsx` |
| `/contacto`      | `Contacto.jsx`     |

El menú de navegación permanece visible en la parte inferior de la pantalla.

## 📱 Diseño adaptable

La aplicación incorpora estilos CSS y media queries para adaptar el contenido a distintos tamaños de pantalla.

El catálogo utiliza una cuadrícula que presenta tres columnas en pantallas grandes, dos en tablets y una en dispositivos móviles.

## 📁 Estructura principal

```text
supermercado/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── QuienesSomos.jsx
│   │   └── Contacto.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 🚀 Instalación y ejecución

### 1. Instalar las dependencias

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite.

### 3. Generar la versión de producción

```bash
npm run build
```

## ✅ Verificaciones realizadas

Durante el desarrollo se comprobó:

* Funcionamiento de las tres páginas.
* Navegación mediante React Router.
* Cambio de página sin recarga completa.
* Identificación visual del enlace activo.
* Permanencia del menú inferior.
* Visualización adaptable en dispositivos móviles.
* Compilación de producción sin errores.

## 📝 Observaciones

Los productos, precios, existencias y datos de contacto son ficticios y se utilizan exclusivamente con fines académicos.


