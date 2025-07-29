export default function SmokeList({ mapa, lado, zona, smokes, onSelect, onBack }) {
  return (
    <div className="relative h-full flex flex-col gap-4 items-center justify-start">
      <h2 className="text-center text-lg font-semibold mt-4">
        Smokes para {mapa} ({lado}) - Site {zona}
      </h2>

        {smokes.length === 0 ? (
          <p className="text-gray-400 mt-8">No hay smokes cargadas aún para esta zona.</p>
        ) : (
          <>
            <div className="flex flex-col gap-4 w-full px-4">
              {smokes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => onSelect(s)}
                  className="bg-zinc-800 rounded-xl p-4 text-left shadow hover:scale-105 transition"
                >
                  <h3 className="font-bold text-white text-base mb-1">{s.nombre}</h3>
                  <p className="text-sm text-gray-300">Dificultad: {s.dificultad}</p>
                </button>
              ))}
            </div>
            <button onClick={onBack} className="fixed bottom-4 left-4 bg-zinc-700 text-white px-4 py-2 rounded-full shadow">Volver</button>
          </>
  )}
    </div> 
)}
