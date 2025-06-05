export default function Features() {
  return (
    <section
      id="features"
      className="w-full flex flex-col md:flex-row gap-0  py-0 md:py-12 bg-white relative z-10"
    >
      <div className="flex-1 bg-[#051C2C] text-white  p-12 flex flex-col gap-2 min-w-[220px]">
        <div className="mb-2 flex items-center gap-4">
          <img src="/icon.png" alt="icono activos" className="w-12 h-12" />
          <h3 className="font-bold text-2xl mb-0 flex items-center">Activos</h3>
        </div>
        <ul className="text-sm flex flex-col gap-1">
          <li>→ Equipo de transporte</li>
          <li>→ Maquinaria</li>
          <li>→ Equipo especializado</li>
          <li>→ Equipo tecnológico</li>
          <li>→ Mobiliario</li>
          <li>→ Equipo médico</li>
        </ul>
      </div>
      <div className="flex-1 bg-[#FF914D] text-white  p-12 flex flex-col gap-2 min-w-[220px]">
        <div className="mb-2 flex items-center gap-4">
          <img
            src="/icon-2.png"
            alt="icono servicios adicionales"
            className="w-12 h-12"
          />
          <h3 className="font-bold text-2xl mb-0 flex items-center">
            Servicios adicionales
          </h3>
        </div>
        <ul className="text-sm flex flex-col gap-1">
          <li>→ Administración de flotilla vía APP</li>
          <li>→ Asistencia legal</li>
          <li>→ Auto sustituto</li>
          <li>→ Gestoría</li>
          <li>→ GPS vía APP</li>
        </ul>
      </div>

      <div className="flex-1 bg-white text-[#0A1A23]  p-12 flex flex-col gap-2 min-w-[220px] ">
        <h3 className="font-bold text-lg mb-0 p-0 text-black">
          Soluciones inteligentes<br></br>para tu{" "}
          <span className="relative inline-block align-bottom ml-1">
            <span className="text-[#FF914D] font-bold relative z-10">
              negocio
            </span>
            <img
              src="/brochazo.png"
              alt="brochazo"
              className="absolute left-0 right-0 mx-auto bottom-0 w-full h-[10px] z-0"
              style={{ transform: "translateY(60%)" }}
            />
          </span>
        </h3>
        <h3 className="font-bold text-lg mb-2 text-black flex items-end gap-0"></h3>
        <p className="text-sm mb-2">
          Con el arrendamiento puro de Beta Leasing puedes adquirir activos
          productivos sin descapitalizarte y con los mejores beneficios
          fiscales.
        </p>
        <div className="text-xs text-gray-500 mt-auto">
          Ideal para impulsar tu negocio
          <br />
          <span className="font-semibold text-[#0A1A23]">
            Persona Moral
          </span> | <span className="font-semibold text-[#0A1A23]">PFAE</span>
        </div>
      </div>
    </section>
  );
}
