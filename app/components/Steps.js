export default function Steps() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-8 bg-gradient-to-r from-[#e6e6e6] to-[#f7f7f7]">
      {/* Texto y pasos */}
      <div className="flex-1 flex flex-col gap-4 max-w-lg">
        <h3 className="text-2xl font-bold mb-2">
          Solicita tu <span className="text-[#FF6B2C]">arrendamiento</span>
        </h3>
        <ol className="list-decimal list-inside text-lg mb-4 text-[#0A1A23]">
          <li className="mb-2">
            <span className="font-bold text-[#FF6B2C]">01</span> Llena el
            formulario online
          </li>
          <li className="mb-2">
            <span className="font-bold text-[#FF6B2C]">02</span> Recibe una
            cotización preliminar
          </li>
          <li>
            <span className="font-bold text-[#FF6B2C]">03</span> Un asesor te
            contactará
          </li>
        </ol>
        <a
          href="#contacto"
          className="inline-block bg-[#FF6B2C] hover:bg-[#ff8c5a] text-white px-6 py-3 rounded font-semibold text-base transition w-max"
        >
          Llenar el formulario
        </a>
      </div>
      {/* Imagen persona (placeholder) */}
      <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="w-56 h-64 bg-white/40 rounded-lg flex items-center justify-center">
          {/* Imagen real aquí */}
        </div>
      </div>
    </section>
  );
}
