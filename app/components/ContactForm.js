export default function ContactForm() {
  return (
    <section
      id="contacto"
      className="w-full bg-[#0A1A23] text-white flex flex-col md:flex-row items-start justify-between px-8 py-16 gap-8"
    >
      {/* Atención al cliente */}
      <div className="bg-[#FF6B2C] rounded-lg p-6 min-w-[220px] mb-8 md:mb-0">
        <h4 className="font-bold mb-2">Atención al cliente</h4>
        <div className="text-sm mb-2">55 8663 0720</div>
        <div className="text-sm mb-2">56 6059 4172</div>
        <div className="text-sm mb-2">contacto@betaleasing.com</div>
      </div>
      {/* Formulario */}
      <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg p-8 text-[#0A1A23] w-full max-w-3xl">
        <div className="flex flex-col gap-1">
          <label htmlFor="nombre" className="font-semibold">
            *Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="apellido" className="font-semibold">
            *Apellido
          </label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            className="border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="correo" className="font-semibold">
            *Correo electrónico
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            className="border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="celular" className="font-semibold">
            *Celular
          </label>
          <input
            id="celular"
            name="celular"
            type="tel"
            className="border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="arrendatario" className="font-semibold">
            Arrendatario
          </label>
          <select
            id="arrendatario"
            name="arrendatario"
            className="border rounded px-3 py-2"
          >
            <option>Persona Moral</option>
            <option>PFAE</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="empresa" className="font-semibold">
            Nombre empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="valor" className="font-semibold">
            Valor factura (IVA incluido)
          </label>
          <input
            id="valor"
            name="valor"
            type="text"
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col gap-1 md:col-span-2 mt-2">
          <button
            type="submit"
            className="bg-[#FF6B2C] hover:bg-[#ff8c5a] text-white px-6 py-3 rounded font-semibold text-base transition w-max"
          >
            Contactarnos
          </button>
        </div>
        <div className="text-xs text-gray-500 md:col-span-2">
          *Campos obligatorios
        </div>
      </form>
    </section>
  );
}
