export default function Clients() {
  return (
    <section className="w-full bg-white text-[#051C2C] py-16 px-8 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-10 text-center">
        Nuestros Clientes
      </h3>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        {/* Testimonio 1 */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col items-center">
          <div className="w-24 h-10 bg-gray-200 rounded mb-4 flex items-center justify-center">
            Logo
          </div>
          <p className="text-sm text-gray-700 mb-4">
            “Beta Leasing es un socio estratégico para Galdisa, permitiéndonos
            crecer en flota y activos sin descapitalizarnos. Su apoyo ha sido
            clave para ofrecer vehículos a colaboradores, fortaleciendo
            competitividad y eficiencia. Su profesionalismo y atención hacen que
            trabajar con ellos sea una excelente experiencia.”
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#FF6B2C] font-bold">★★★★★</span>
          </div>
        </div>
        {/* Testimonio 2 */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col items-center">
          <div className="w-24 h-10 bg-gray-200 rounded mb-4 flex items-center justify-center">
            Logo
          </div>
          <p className="text-sm text-gray-700 mb-4">
            “Beta Leasing quiero agradecer las atenciones que prestan para con
            la empresa, servicio muy profesional y altamente calificado, todo en
            tiempo con gran calidad, profesionalismo, atención personalizada, un
            servicio muy recomendable.”
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#FF6B2C] font-bold">★★★★★</span>
          </div>
        </div>
      </div>
      {/* Paginación (simulada) */}
      <div className="flex gap-2 mt-8">
        <span className="w-3 h-3 bg-[#FF6B2C] rounded-full inline-block" />
        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block" />
        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block" />
      </div>
    </section>
  );
}
