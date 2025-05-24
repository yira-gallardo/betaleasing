"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
    arrendatario: "",
    empresa: "",
    factura: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.nombre) newErrors.nombre = "*Campo obligatorio";
    if (!form.apellido) newErrors.apellido = "*Campo obligatorio";
    if (!form.email) newErrors.email = "*Campo obligatorio";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "*Correo inválido";
    if (!form.celular) newErrors.celular = "*Campo obligatorio";
    else {
      const phoneDigits = form.celular.replace(/\D/g, "");
      if (phoneDigits.length !== 10) {
        newErrors.celular = "*Debe tener 10 dígitos";
      } else if (!/^[1-9][0-9]{9}$/.test(phoneDigits)) {
        newErrors.celular = "*Número inválido";
      }
    }
    if (form.arrendatario === "Persona Moral" && !form.empresa)
      newErrors.empresa = "*Campo condicional a la variable Persona Moral";
    if (!form.factura) newErrors.factura = "*Campo $";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí va la lógica de envío
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <section
      id="contacto"
      className="w-full bg-[#0A1A23] text-white flex flex-col md:flex-row items-start justify-start px-4 md:px-12 py-8 md:py-16 gap-4 md:gap-8"
    >
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex flex-col w-full md:min-w-[320px] md:max-w-[400px] gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex flex-col">
              Contáctanos
            </h2>
            <img
              src="/brochazo.png"
              alt="decorativo"
              className="w-40 md:w-48 h-4 object-contain mt-[-8px] ml-1 select-none pointer-events-none"
            />
            <p className="text-sm md:text-base text-[#e0e0e0] mt-4">
              Llena el siguiente formulario y nos pondremos en contacto
            </p>
          </div>
          <div className="bg-[#FF914D] rounded-lg p-4 md:p-6 flex flex-col gap-2 text-white shadow-md">
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
        <div className="w-full flex-1">
          <form
            onSubmit={handleSubmit}
            className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F5F6F8] rounded-lg p-4 md:p-8 text-[#0A1A23] shadow-lg md:ml-auto"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="arrendatario" className="font-medium text-sm">
                Arrendatario
              </label>
              <select
                id="arrendatario"
                name="arrendatario"
                className="border border-gray-200 rounded px-3 py-2 bg-white"
                value={form.arrendatario}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Persona Moral</option>
                <option>PFAE</option>
              </select>
            </div>
            {form.arrendatario === "Persona Moral" ? (
              <div className="flex flex-col gap-1">
                <label htmlFor="empresa" className="font-medium text-sm">
                  Nombre empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  className={`border border-gray-200 rounded px-3 py-2 bg-white ${
                    errors.empresa ? "border-red-400" : ""
                  }`}
                  value={form.empresa}
                  onChange={handleChange}
                />
                {errors.empresa && (
                  <span className="text-xs text-red-500">{errors.empresa}</span>
                )}
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="nombre" className="font-medium text-sm">
                *Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className={`border border-gray-200 rounded px-3 py-2 bg-white ${
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
                className={`border border-gray-200 rounded px-3 py-2 bg-white ${
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
              <label htmlFor="email" className="font-medium text-sm">
                *Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`border border-gray-200 rounded px-3 py-2 bg-white ${
                  errors.email ? "border-red-400" : ""
                }`}
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email}</span>
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
                className={`border border-gray-200 rounded px-3 py-2 bg-white ${
                  errors.celular ? "border-red-400" : ""
                }`}
                value={form.celular}
                onChange={(e) => {
                  // Remove all non-digit characters
                  const value = e.target.value.replace(/\D/g, "");
                  // Format as Mexican phone number
                  let formattedValue = value;
                  if (value.length > 0) {
                    // Always show area code in parentheses
                    formattedValue = `(${value.slice(0, 2)}${
                      value.length > 2 ? ") " : ""
                    }`;
                    // Add the rest of the number
                    if (value.length > 2) {
                      formattedValue += `${value.slice(2, 6)}${
                        value.length > 6 ? "-" : ""
                      }${value.slice(6, 10)}`;
                    }
                  }
                  handleChange({
                    target: { name: "celular", value: formattedValue },
                  });
                }}
                placeholder="(55) 2342-3423"
                maxLength="14"
                required
              />
              {errors.celular && (
                <span className="text-xs text-red-500">{errors.celular}</span>
              )}
            </div>
            <div className="flex flex-col gap-1 md:col-span-2">
              <label htmlFor="factura" className="font-medium text-sm">
                Valor factura (IVA incluido)
              </label>
              <input
                id="factura"
                name="factura"
                type="text"
                className={`border border-gray-200 rounded px-3 py-2 bg-white ${
                  errors.factura ? "border-red-400" : ""
                }`}
                value={form.factura}
                onChange={(e) => {
                  // Remove all non-digit characters
                  const value = e.target.value.replace(/[^\d]/g, "");
                  // Format as currency
                  const formattedValue = value
                    ? `$${Number(value).toLocaleString("es-MX")}`
                    : "";
                  handleChange({
                    target: { name: "factura", value: formattedValue },
                  });
                }}
                placeholder="$0.00"
              />
              {errors.factura && (
                <span className="text-xs text-red-500">{errors.factura}</span>
              )}
            </div>
            <div className="flex flex-col gap-1 md:col-span-2 mt-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#EC3A35] to-[#F6A340] text-white px-6 md:px-8 py-3 rounded font-semibold text-sm md:text-base transition w-full md:w-max flex items-center justify-center md:justify-start gap-2 shadow-md hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer"
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
            <div className="text-xs text-[#6B7280] md:col-span-2 mt-2">
              *Campos obligatorios
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
