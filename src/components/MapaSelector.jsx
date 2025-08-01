export default function MapaSelector({ onSelect }) {
  const maps = [
  { nombre: 'Dust2', imagen: '/images/dust2.webp' },
  { nombre: 'Mirage', imagen: '/images/mirage.webp' },
  { nombre: 'Inferno', imagen: '/images/inferno.webp' },
  { nombre: 'Overpass', imagen: '/images/overpass.webp' },
  { nombre: 'Nuke', imagen: '/images/nuke.webp' },
  { nombre: 'Ancient', imagen: '/images/ancient.webp' },
  { nombre: 'Train', imagen: '/images/train.webp' },
  { nombre: 'Cache', imagen: '/images/cache.webp' },
]


  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-4 overflow-hidden">
      <h2 className="text-lg font-semibold text-center mt-4">Elegí un mapa</h2>
      <div className="flex-1 w-full px-4 overflow-y-auto pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {maps.map((m) => (
          <button
            key={m.nombre}
            onClick={() => onSelect(m)}
            className="bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition transform duration-200"
          >
            <img src={m.imagen} alt={m.nombre} loading="lazy" className="w-full h-32 object-cover" />
            <span>{m.nombre}</span>
          </button>
        ))}
      </div>
    </div>
    </div>
  )
}
