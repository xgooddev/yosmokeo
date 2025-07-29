import { useState, useEffect } from 'react'
import MapaSelector from './components/MapaSelector'
import LadoSelector from './components/LadoSelector'
import ZonaSelector from './components/ZonaSelector'
import SmokeList from './components/SmokeList'
import SmokeDetalle from './components/SmokeDetalle'

export default function App() {
  const [mapa, setMapa] = useState(null)
  const [lado, setLado] = useState(null)
  const [zona, setZona] = useState(null)
  const [smokeSeleccionado, setSmokeSeleccionado] = useState(null)
  const [smokes, setSmokes] = useState([])

  // Cargar smokes desde JSON
  useEffect(() => {
    fetch('/src/data/smokes.json')
      .then((res) => res.json())
      .then((data) => setSmokes(data))
      .catch((err) => console.error('Error cargando smokes.json:', err))
  }, [])

  //  Filtrar por mapa, lado y site seleccionado
  const smokesFiltrados = smokes.filter(
    (s) => s.mapa === mapa?.nombre && s.lado === lado && s.zona === zona?.nombre
  )

  // Resetear todo el flujo
  const resetTodo = () => {
    setMapa(null)
    setLado(null)
    setZona(null)
    setSmokeSeleccionado(null)
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Yo Smokeo💨</h1>
        {(mapa || lado || zona || smokeSeleccionado) && (
          <button onClick={resetTodo} className="text-sm underline">Inicio
          </button>
        )}
      </div>
      <main className="flex-1 w-full px-4 pb-24">
      {/* Flujo de navegación por estado */}
      {smokeSeleccionado ? (
        <SmokeDetalle smoke={smokeSeleccionado} onBack={() => setSmokeSeleccionado(null)} />
      ) : !mapa ? (
        <MapaSelector onSelect={setMapa} />
      ) : !lado ? (
        <LadoSelector onBack={() => setMapa(null)} onSelect={setLado} />
      ) : !zona ? (
        <ZonaSelector onBack={() => setLado(null)} onSelect={setZona} />
      ) : (
        <SmokeList
          mapa={mapa.nombre}
          lado={lado}
          zona={zona.nombre}
          smokes={smokesFiltrados}
          onSelect={setSmokeSeleccionado}
          onBack={() => setZona(null)}
        />
      )}
      </main>
      
      {/* Botón volver centralizado */}
{(lado || zona || smokeSeleccionado) && (
  <button
    onClick={() => {
      if (smokeSeleccionado) setSmokeSeleccionado(null)
      else if (zona) setZona(null)
      else if (lado) setLado(null)
    }}
    className="fixed bottom-4 left-4 bg-zinc-700 text-white px-4 py-2 rounded-full shadow z-50"
  >
    ⬅ Volver
  </button>
)}
      
       <footer className="text-center text-sm text-gray-500 py-4">
      Desarrollado por <span className="text-white font-semibold">goodtripdev</span>
    </footer>
    </div>
  )
}
