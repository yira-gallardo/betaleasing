import Image from "next/image";

export default function ServiceGoal() {
  return (
    <section
      id="ServiceGoal"
      className="overflow-x-hidden w-full bg-[#051C2C] text-white flex flex-col md:flex-row items-center justify-center px-8 py-0 md:py-16 gap-8"
    >
      <div className="flex-1 justify-end items-center pr-0 md:pr-8 relative min-w-[420px] max-w-[480px] hidden md:flex">
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
      <div className="flex-1 flex flex-col gap-6 max-w-2xl items-start justify-center p-6 md:p-0">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-bold leading-tight text-left">
            Nuestra meta es brindar una experiencia de
          </h2>
          <div className="relative w-max mb-2 mt-0">
            <span className="text-[#FF914D] font-bold text-xl md:text-2xl relative z-10 block text-left">
              arrendamiento puro inigualable
            </span>
            <Image
              src="/brochazo.png"
              alt="brochazo"
              width={230}
              height={12}
              className="absolute top-6 left-0 right-0 mx-auto bottom-0 w-full h-4 z-0 pointer-events-none select-none"
              style={{ transform: "translateY(60%)" }}
            />
          </div>
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
          href="/cotizador"
          className="bg-gradient-to-r from-[#EC3A35] to-[#F6A340] text-white px-5 py-2 rounded font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
        >
          ¡Cotiza ahora!
        </a>
      </div>
      <div className="flex-1 justify-end items-center pr-0 md:pr-8 relative min-w-[420px] max-w-[480px] flex md:hidden">
        <Image
          src="/img-1.png"
          alt="Servicio de leasing"
          width={420}
          height={500}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
