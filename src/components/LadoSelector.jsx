const sides = ['CT', 'Terrorista']

export default function LadoSelector({ onSelect, onBack }) {
  return (
    <div className="relative h-full flex flex-col items-center justify-center gap-6">
      <h2 className="text-lg font-semibold text-center mt-4">Elegi tu bando</h2>
      <div className="flex flex-col gap-4 w-full px-4">
        {sides.map((s) => (
          <button
            key={s}
            onClick={() => onSelect(s)}
            className="bg-blue-800 text-white rounded-xl py-4 text-xl font-bold shadow hover:scale-105 transition"
          >
            {s}
          </button>
        ))}
      </div>
      <button onClick={onBack} className="fixed bottom-4 left-4 bg-zinc-700 text-white px-4 py-2 rounded-full shadow">Volver</button>
    </div>
  )
}
