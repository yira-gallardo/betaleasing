import Image from "next/image";

export default function Steps() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-40 gap-8 bg-[url('/img-2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex-1 flex flex-col gap-4 max-w-lg bg-[#051C2C]/95 rounded-lg p-10 shadow-lg">
        {/* Mobile version */}
        <h3 className="text-3xl font-bold mb-4 text-white block sm:hidden">
          Solicita tu <span className="text-[#FF914D]">arrendamiento</span>{" "}
          <span className="relative inline-block">
            <span className="text-[#FF914D] relative z-10">puro</span>
            <Image
              src="/brochazo.png"
              alt="brochazo"
              fill
              className="absolute left-0 bottom-0 w-full h-[0.6em] z-0 pointer-events-none select-none"
              style={{ objectFit: "contain", transform: "translateY(60%)" }}
            />
          </span>
        </h3>

        {/* Desktop version */}
        <h3 className="text-3xl font-bold mb-4 text-white hidden sm:block">
          Solicita tu{" "}
          <span className="text-[#FF914D] relative inline-block">
            arrendamiento puro
            <Image
              src="/brochazo.png"
              alt="brochazo"
              width={230}
              height={12}
              className="absolute top-8 left-0 right-0 mx-auto bottom-0 w-full h-4 z-0 pointer-events-none select-none"
              style={{ transform: "translateY(60%)" }}
            />
          </span>
        </h3>
        <ol className="list-none text-xl mb-6 text-white">
          <li className="mb-4 flex items-center">
            <span className="font-bold text-[#FF914D] text-4xl mr-4">01</span>
            <span>Llena el formulario online</span>
          </li>
          <li className="mb-4 flex items-center">
            <span className="font-bold text-[#FF914D] text-4xl mr-4">02</span>
            <span>Un asesor te contactará</span>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-[#FF914D] text-4xl mr-4">03</span>
            <span>Recibe una cotización preliminar</span>
          </li>
        </ol>
        <a
          href="#contacto"
          className="inline-flex items-center w-max bg-gradient-to-r from-[#EC3A35] to-[#F6A340] text-white px-5 py-2 rounded font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
        >
          Llenar el formulario
          <span className="ml-2 text-xl">→</span>
        </a>
      </div>
    </section>
  );
}
