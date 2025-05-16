export default function Hero() {
  return (
    <section
      className="relative w-full bg-[#0A1A23] text-white flex items-center justify-center px- pt-50 pb-50 min-h-[400px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative flex flex-col items-center gap-4 z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          Simple y ágil asd
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Beta Leasing brinda soluciones de arrendamiento en todo el país, con
          atención personalizada y tiempos de respuesta rápidos.
        </p>
        <a
          href="#contacto"
          className="bg-gradient-to-r from-[#EC3A35] to-[#F6A340] text-white px-6 py-3 rounded font-semibold text-base transition w-max"
        >
          ¡Cotiza ahora!
        </a>
      </div>
    </section>
  );
}
