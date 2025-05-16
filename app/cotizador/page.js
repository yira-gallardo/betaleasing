"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Cotizador() {
  // State for form fields
  const [tipo, setTipo] = useState("vehiculo");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [iva, setIva] = useState("-");
  const [valorFactura, setValorFactura] = useState("-");
  const [plazoMeses, setPlazoMeses] = useState(24);
  const [porcentajeEnganche, setPorcentajeEnganche] = useState(24);
  const [montoFinanciar, setMontoFinanciar] = useState("-");
  const [rentaMensual, setRentaMensual] = useState("-");

  return (
    <div className="bg-[#222c36] min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-black bg-opacity-60 rounded-lg p-8 w-full max-w-3xl mx-auto mt-8">
          <h2 className="text-3xl text-white text-center mb-6 font-semibold">
            Cotizador
          </h2>
          <form className="w-full">
            <h3 className="text-xl text-white text-center mb-4">
              Quiero cotizar:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <select
                className="bg-black text-white rounded px-3 py-2"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="vehiculo">Vehículo</option>
                <option value="maquinaria">Maquinaria pesada</option>
                <option value="otros">Otros</option>
              </select>
              <input
                type="text"
                className="bg-black text-white rounded px-3 py-2"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
              <input
                type="text"
                className="bg-black text-white rounded px-3 py-2"
                placeholder="Modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
              />
              <input
                type="text"
                className="bg-black text-white rounded px-3 py-2"
                placeholder="Año"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p className="text-center text-white text-sm mb-1">Valor total</p>
              <input
                type="text"
                className="bg-black text-white rounded px-3 py-2 w-full text-center"
                placeholder="0.00"
                value={valorTotal}
                onChange={(e) => setValorTotal(e.target.value)}
                name="valor_total"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-center text-white text-sm mb-1">IVA</p>
                <input
                  type="text"
                  className="bg-blue-600 text-white rounded px-3 py-2 w-full text-center"
                  value={iva}
                  disabled
                  name="iva"
                />
              </div>
              <div>
                <p className="text-center text-white text-sm mb-1">
                  Valor factura (sin IVA)
                </p>
                <input
                  type="text"
                  className="bg-blue-600 text-white rounded px-3 py-2 w-full text-center"
                  value={valorFactura}
                  disabled
                  name="valor_factura"
                />
              </div>
            </div>
            <div className="mb-4">
              <p className="text-center text-white text-sm mb-1">
                Plazo en meses
              </p>
              <input
                type="range"
                min={12}
                max={60}
                step={1}
                value={plazoMeses}
                onChange={(e) => setPlazoMeses(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-white text-sm mt-1">
                <span>{plazoMeses} meses</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-center text-white text-sm mb-1">
                Porcentaje (%) de pago inicial
              </p>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={porcentajeEnganche}
                onChange={(e) => setPorcentajeEnganche(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-white text-sm mt-1">
                <span>{porcentajeEnganche}%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-center text-white text-sm mb-1">
                  Monto total a financiar
                </p>
                <input
                  type="text"
                  className="bg-blue-600 text-white rounded px-3 py-2 w-full text-center"
                  value={montoFinanciar}
                  disabled
                  name="monto_financiar"
                />
              </div>
              <div>
                <p className="text-center text-white text-sm mb-1">
                  Renta mensual
                </p>
                <input
                  type="text"
                  className="bg-blue-600 text-white rounded px-3 py-2 w-full text-center"
                  value={rentaMensual}
                  disabled
                  name="renta_mensual"
                />
              </div>
            </div>
            {/* Step navigation and info can be added here */}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
