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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const data = await response.json();

        if (data.success) {
          alert("Formulario enviado correctamente");
          // Limpiar el formulario
          setForm({
            nombre: "",
            apellido: "",
            email: "",
            celular: "",
            arrendatario: "",
            empresa: "",
            factura: "",
          });
        } else {
          alert(
            "Error al enviar el formulario. Por favor, intente nuevamente."
          );
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error al enviar el formulario. Por favor, intente nuevamente.");
      }
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
              ¿Buscas opciones de arrendamiento puro? Déjanos tus datos y te
              contactaremos pronto.
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
              <a href="tel:5586630720" className="hover:underline">
                55 8663 0720
              </a>
            </div>
            <div className="flex items-center gap-2 text-base">
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </span>
              <a
                href="https://wa.me/525660594172"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                56 6059 4172
              </a>
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
              <a
                href="mailto:contacto@betaleasing.com"
                className="hover:underline"
              >
                contacto@betaleasing.com
              </a>
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
