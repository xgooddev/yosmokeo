export default function SmokeDetalle({ smoke, onBack }) {
  return (
    <div className="relative h-full flex flex-col items-center justify-start px-4 pb-24">
      <h2 className="text-center text-lg  font-semibold mt-4 mb-2">{smoke.nombre}</h2>
      <p className="text-center text-sm text-gray-300 mb-4">{smoke.instrucciones}</p>
      
      <div className="w-full maw-w-md aspect-video mb-8">
      <iframe
        className="w-full h-full rounded-xl shadow"
        src={smoke.video}
        title={smoke.titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
       </div>

      <button onClick={onBack} className="fixed bottom-4 left-4 bg-zinc-700 text-white px-4 py-2 rounded-full shadow"
      >Volver</button>
   </div>
  )
}
