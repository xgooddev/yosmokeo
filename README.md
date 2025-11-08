# YoSmokeo - Smokes CS2 Guia

**Yo Smokeo** Es una herramienta web minimalista y optimizada para mobile que permite visualizar smokes por mapa, lado y zona en CS2. **Pensada** para jugadores que necesitan acceso rapido durante partidas Premier o competitivas. 

## 🔧 Tecnologías utilizadas

- **React** (con Vite) – Estructura del proyecto SPA rápida y modular
- **Tailwind CSS** – Estilado ágil, mobile-first y con modo oscuro por defecto
- **JSON externo** – Fuente de datos con los smokes, filtrados dinámicamente
- **Vercel** – Hosting gratuito y despliegue instantáneo

## 📁 Estructura del proyecto

```
📦 yosmokeo
├── public/
│   └── logo.svg (opcional)
├── src/
│   ├── components/
│   │   ├── MapaSelector.jsx
│   │   ├── LadoSelector.jsx
│   │   ├── ZonaSelector.jsx
│   │   ├── SmokeList.jsx
│   │   └── SmokeDetalle.jsx
│   ├── data/
│   │   └── smokes.json
│   └── App.jsx
├── package.json
└── tailwind.config.js
```
## ⚙️ Instalación local

1. Cloná el repositorio:
```bash
git clone https://github.com/tuusuario/yosmokeo.git
cd yosmokeo
```

2. Instalá dependencias:
```bash
npm install
```

3. Iniciá el servidor de desarrollo:
```bash
npm run dev
```

4. Abrí en tu navegador:
```
http://localhost:5173
```

---

## 📦 Estructura del archivo `smokes.json`

```json
[
  {
    "mapa": "Dust2",
    "lado": "CT",
    "zona": "Medio",
    "nombre": "Puerta Mid",
    "video": "https://www.youtube.com/embed/XXXXXXX"
  }
]
```

Podés crear y subir tus propios videos de smokes a YouTube y luego agregar el link embed en el JSON.

---

## 💡 Características destacadas

- ✅ Navegación rápida y optimizada para partidas
- 🎯 Filtrado por mapa > lado > zona
- 🎥 Visualización de smokes en video
- 🌗 Estilo oscuro minimalista
- 📱 Diseño responsive enfocado en mobile
- 🔁 Botón flotante para volver entre secciones
- 🔐 Preparado para ser open source

---

## 🧪 En producción

App desplegada: [https://yosmokeo.pro](https://yosmokeo.vercel.app)



## 🤝 Aporte y comunidad

Pull requests y sugerencias son bienvenidas. Si querés sumar smokes o colaborar con el diseño, contactame 





