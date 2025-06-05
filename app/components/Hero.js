export default function Hero() {
  return (
    <section
      className="relative w-full bg-[#0A1A23] text-white flex items-center justify-center px- pt-50 pb-50 min-h-[400px] overflow-hidden bg-cover bg-[center_right] md:bg-center"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative flex flex-col items-center gap-4 z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">Simple y ágil</h1>
        <p className="text-base md:text-xl max-w-2xl mb-6">
          Beta Leasing brinda{" "}
          <span style={{ color: "#FF914D" }}>
            soluciones de arrendamiento puro
          </span>{" "}
          en México, con atención personalizada y tiempo de respuesta rápidos.
        </p>
        <a
          href="/cotizador"
          className="text-lg bg-gradient-to-r from-[#EC3A35] to-[#F6A340] text-white px-5 py-2 rounded font-semibold  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
        >
          ¡Cotiza ahora!
        </a>
      </div>
    </section>
  );
}
