export default function ZonaSelector({ onSelect, onBack }) {
const zonas = [
  { nombre: 'A', imagen: '/images/sitea.webp' },
  { nombre: 'Medio', imagen: '/images/mid.webp' },
  { nombre: 'B', imagen: '/images/siteb.webp' }
]


  return (
    <div className="relative h-full flex flex-col items-center justify-start gap-4">
      <h2 className="text-lg font-semibold text-center mt-4">¿A qué site?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
        {zonas.map((z) => (
          <button
            key={z.nombre}
            onClick={() => onSelect(z)}
            className="bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
          >
            <img src={z.imagen} alt={z.nombre} loading="lazy" className="w-full h-40 object-cover" />
            <span>{z.nombre}</span>
          </button>
        ))}
      </div>
      <button onClick={onBack} className="fixed bottom-4 left-4 bg-zinc-700 text-white px-4 py-2 rounded-full shadow">Volver</button>
    </div>
  )
}
