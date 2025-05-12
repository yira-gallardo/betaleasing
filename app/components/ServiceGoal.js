import Image from "next/image";

export default function ServiceGoal() {
  return (
    <section className="w-full bg-[#051C2C] text-white flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-8">
      {/* Columna izquierda: Imagen con decorativos */}
      <div className="flex-1 flex justify-end items-center pr-0 md:pr-8 relative min-w-[420px] max-w-[480px]">
        {/* Imagen principal */}
        <div className="w-[420px] h-[500px] relative rounded-lg overflow-visible z-20 flex items-center justify-center">
          <Image
            src="/img-1.png"
            alt="Servicio de leasing"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* Columna derecha: Texto y beneficios */}
      <div className="flex-1 flex flex-col gap-6 max-w-2xl items-start justify-center">
        <h2 className="text-xl md:text-2xl font-bold mb-0 leading-tight text-left">
          Nuestra meta es brindar una experiencia de servicio
        </h2>
        <div className="relative w-max mb-2 mt-0">
          <span className="text-[#FF914D] font-bold text-2xl md:text-2xl relative z-10 block text-left">
            inigualable
          </span>
          <Image
            src="/brochazo.png"
            alt="brochazo"
            width={230}
            height={12}
            className="absolute left-0 right-0 mx-auto bottom-0 w-full h-4 z-0 pointer-events-none select-none"
            style={{ transform: "translateY(60%)" }}
          />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-lg mb-4 w-full">
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FF914D] flex items-center justify-center text-white font-bold">
              ✔
            </span>
            Asesoría especializada
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FF914D] flex items-center justify-center text-white font-bold">
              ✔
            </span>
            Soluciones a la medida
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FF914D] flex items-center justify-center text-white font-bold">
              ✔
            </span>
            100% deducible
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FF914D] flex items-center justify-center text-white font-bold">
              ✔
            </span>
            Elige entre comprar y refinanciar
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FF914D] flex items-center justify-center text-white font-bold">
              ✔
            </span>
            Aprobación en 48 horas
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FF914D] flex items-center justify-center text-white font-bold">
              ✔
            </span>
            Monitoreo en tiempo real (GPS)
          </li>
        </ul>
        <a
          href="#contacto"
          className="bg-gradient-to-r from-[#EC3A35] to-[#F6A340] text-white px-8 py-4 rounded font-semibold text-lg transition w-max shadow-md"
        >
          ¡Cotiza ahora!
        </a>
      </div>
    </section>
  );
}
