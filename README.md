# YoSmokeo  🧨

Una herramienta web simple y rápida para consultar smokes en Counter-Strike 2. Ideal para usar durante el warmup o entre rondas. 📺💨

![cover](./public/images/dust2.jpg)

## 🚀 Características

- Elección rápida de mapa, lado (CT o T) y zona (A, Medio, B).
- Visualización de smokes por zona con video e instrucciones.
- Estilo oscuro minimalista.
- Carga de smokes desde un archivo `.json`.
- Optimizado para usar desde el navegador mobile o PC.

## 🧱 Estructura
- Public/
─ data/smokes.json ← Base de datos de smokes
─ images/ ← Imágenes de mapas y zonas

src/
├── components/ ← Componentes reutilizables
├── App.jsx ← App principal
├── index.css ← Tailwind

## 📦 Instalación local

```bash
git clone 
cd yosmokeo
npm install
npm run dev