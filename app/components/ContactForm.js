"use client";
import { useState } from "react";

export default function ContactForm() {
  const [arrendatario, setArrendatario] = useState("Persona Moral");
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    empresa: "",
    valor: "",
  });
  const [errors, setErrors] = useState({});

  // Validación simple
  const validate = () => {
    const newErrors = {};
    if (!form.nombre) newErrors.nombre = "Campo obligatorio";
    if (!form.apellido) newErrors.apellido = "Campo obligatorio";
    if (!form.correo) newErrors.correo = "Campo obligatorio";
    if (!form.celular.match(/^\d{10}$/))
      newErrors.celular = "Validación de celular";
    if (arrendatario === "Persona Moral" && !form.empresa)
      newErrors.empresa = "Campo condicional a la variable Persona Moral";
    if (!form.valor) newErrors.valor = "Campo $";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArrendatario = (e) => {
    setArrendatario(e.target.value);
    if (e.target.value !== "Persona Moral") {
      setForm((f) => ({ ...f, empresa: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí iría el envío del formulario
    }
  };

  return (
    <section
      id="contacto"
      className="w-full bg-[#0A1A23] text-white flex flex-col md:flex-row items-start justify-between px-8 py-16 gap-8"
    >
      {/* Izquierda: Título y atención al cliente */}
      <div className="flex flex-col min-w-[320px] max-w-[400px] gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-2 flex flex-col">
            <span>Contáctanos</span>
            <img
              src="/brochazo.png"
              alt="decorativo"
              className="w-48 h-4 object-contain mt-[-8px] ml-1 select-none pointer-events-none"
            />
          </h2>
          <p className="text-base text-[#e0e0e0] mt-4">
            Llena el siguiente formulario y nos pondremos en contacto
          </p>
        </div>
        <div className="bg-[#FF914D] rounded-lg p-6 flex flex-col gap-2 text-white shadow-md">
          <h4 className="font-bold text-xl mb-2">Atención al cliente</h4>
          <div className="flex items-center gap-2 text-base">
            <span className="inline-block">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
                />
              </svg>
            </span>
            55 8663 0720
          </div>
          <div className="flex items-center gap-2 text-base">
            <span className="inline-block">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.21-.242-.58-.487-.501-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.368.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
                />
              </svg>
            </span>
            56 6059 4172
          </div>
          <div className="flex items-center gap-2 text-base">
            <span className="inline-block">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.236l7.293 6.547a1 1 0 001.414 0L20 8.236V20H4z"
                />
              </svg>
            </span>
            contacto@betaleasing.com
          </div>
        </div>
      </div>
      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#ececec] rounded-lg p-8 text-[#0A1A23] w-full max-w-3xl shadow-lg"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="nombre" className="font-medium text-sm">
            *Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className={`border rounded px-3 py-2 ${
              errors.nombre ? "border-red-400" : ""
            }`}
            value={form.nombre}
            onChange={handleChange}
            required
          />
          {errors.nombre && (
            <span className="text-xs text-red-500">{errors.nombre}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="apellido" className="font-medium text-sm">
            *Apellido
          </label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            className={`border rounded px-3 py-2 ${
              errors.apellido ? "border-red-400" : ""
            }`}
            value={form.apellido}
            onChange={handleChange}
            required
          />
          {errors.apellido && (
            <span className="text-xs text-red-500">{errors.apellido}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="correo" className="font-medium text-sm">
            *Correo electrónico
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            className={`border rounded px-3 py-2 ${
              errors.correo ? "border-red-400" : ""
            }`}
            value={form.correo}
            onChange={handleChange}
            required
          />
          {errors.correo && (
            <span className="text-xs text-red-500">{errors.correo}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="celular" className="font-medium text-sm">
            *Celular
          </label>
          <input
            id="celular"
            name="celular"
            type="tel"
            className={`border rounded px-3 py-2 ${
              errors.celular ? "border-red-400" : ""
            }`}
            value={form.celular}
            onChange={handleChange}
            required
          />
          {errors.celular && (
            <span className="text-xs text-red-500">*Validación de celular</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="arrendatario" className="font-medium text-sm">
            Arrendatario
          </label>
          <select
            id="arrendatario"
            name="arrendatario"
            className="border rounded px-3 py-2"
            value={arrendatario}
            onChange={handleArrendatario}
          >
            <option>Persona Moral</option>
            <option>PFAE</option>
          </select>
        </div>
        {arrendatario === "Persona Moral" ? (
          <div className="flex flex-col gap-1">
            <label htmlFor="empresa" className="font-medium text-sm">
              Nombre empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              className={`border rounded px-3 py-2 ${
                errors.empresa ? "border-red-400" : ""
              }`}
              value={form.empresa}
              onChange={handleChange}
            />
            {errors.empresa && (
              <span className="text-xs text-red-500">
                *Campo condicional a la variable Persona Moral
              </span>
            )}
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label htmlFor="valor" className="font-medium text-sm">
            Valor factura (IVA incluido)
          </label>
          <input
            id="valor"
            name="valor"
            type="text"
            className={`border rounded px-3 py-2 ${
              errors.valor ? "border-red-400" : ""
            }`}
            value={form.valor}
            onChange={handleChange}
          />
          {errors.valor && (
            <span className="text-xs text-red-500">*Campo $</span>
          )}
        </div>
        <div className="flex flex-col gap-1 md:col-span-2 mt-2">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#EC3A35] to-[#F6A340] text-white px-8 py-3 rounded font-semibold text-base transition w-max flex items-center gap-2 shadow-md"
          >
            Contáctanos
            <span className="inline-block">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M13.293 17.293a1 1 0 001.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 10-1.414 1.414L16.586 12H4a1 1 0 100 2h12.586l-3.293 3.293z"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="text-xs text-gray-500 md:col-span-2 mt-2">
          *Campos obligatorios
        </div>
      </form>
    </section>
  );
}
