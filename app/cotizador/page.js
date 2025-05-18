"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import Image from "next/image";

// Constants
const IVA = 0.16;
const TASA = 0.24;
const DIGITOS_DECIMALES = 2;

// Utility functions
const formatoDinero = (num) => {
  const signo = num < 0 ? "-" : "";
  const numConDecimales =
    parseInt(Math.abs(+num || 0).toFixed(DIGITOS_DECIMALES)) + "";
  const posicionComa =
    numConDecimales.length > 3 ? numConDecimales.length % 3 : 0;

  return (
    "$" +
    signo +
    (posicionComa ? numConDecimales.substr(0, posicionComa) + "," : "") +
    numConDecimales.substr(posicionComa).replace(/(\d{3})(?=\d)/g, "$1" + ",") +
    (DIGITOS_DECIMALES
      ? "." +
        Math.abs(num - numConDecimales)
          .toFixed(DIGITOS_DECIMALES)
          .slice(2)
      : "")
  );
};

const removeFormatoDinero = (num) => {
  return num.toString().replace("$", "").replace(/,/g, "");
};

const getPorcentajeResidual = (tipo, meses) => {
  switch (tipo) {
    case "vehiculo":
      if (meses < 18) return 0.6;
      if (meses <= 24) return 0.5;
      if (meses <= 30) return 0.4;
      if (meses <= 36) return 0.35;
      if (meses <= 42) return 0.3;
      if (meses <= 48) return 0.25;
      return 0.2;
    case "maquinaria":
      if (meses < 18) return 0.5;
      if (meses <= 24) return 0.4;
      if (meses <= 30) return 0.3;
      if (meses <= 36) return 0.2;
      if (meses <= 42) return 0.1;
      if (meses <= 48) return 0.05;
      return 0;
    default:
      if (meses < 18) return 0.3;
      if (meses <= 24) return 0.2;
      if (meses <= 30) return 0.1;
      if (meses <= 36) return 0.05;
      return 0;
  }
};

const calculaRentaMensual = (
  tasaMensual,
  plazo,
  montoFinanciar,
  valorResidual
) => {
  if (!valorResidual) valorResidual = 0;
  return (
    (tasaMensual *
      (montoFinanciar * -1 * Math.pow(1 + tasaMensual, plazo) +
        valorResidual)) /
    (1 - Math.pow(1 + tasaMensual, plazo))
  );
};

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

  // Step navigation
  const [step, setStep] = useState(1);

  // Step 2 fields
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [compania, setCompania] = useState("");
  const [email, setEmail] = useState("");

  // Calculate values whenever dependencies change
  useEffect(() => {
    if (!valorTotal) return;

    const valorTotalNum = parseFloat(removeFormatoDinero(valorTotal));
    if (isNaN(valorTotalNum)) return;

    // Calculate IVA and valor factura
    const valorFacturaNum = valorTotalNum / (1 + IVA);
    const ivaNum = valorTotalNum - valorFacturaNum;

    // Calculate pago inicial
    const pagoInicial = (porcentajeEnganche / 100) * valorFacturaNum;

    // Calculate monto a financiar
    const montoFinanciarNum = valorFacturaNum - pagoInicial;

    // Calculate renta mensual
    const tasaMensual = TASA / 12;
    const valorResidual =
      valorFacturaNum * getPorcentajeResidual(tipo, plazoMeses);
    const rentaMensualNum =
      calculaRentaMensual(
        tasaMensual,
        plazoMeses,
        montoFinanciarNum,
        valorResidual
      ) *
      (1 + IVA);

    // Update state with formatted values
    setIva(formatoDinero(ivaNum));
    setValorFactura(formatoDinero(valorFacturaNum));
    setMontoFinanciar(formatoDinero(montoFinanciarNum));
    setRentaMensual(formatoDinero(rentaMensualNum));
  }, [valorTotal, plazoMeses, porcentajeEnganche, tipo]);

  // Handle valor total input
  const handleValorTotalChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (!/^\d*\.?\d*$/.test(value) && value !== "") return;
    setValorTotal(value);
  };

  // Format valor total on blur
  const handleValorTotalBlur = () => {
    if (valorTotal) {
      setValorTotal(formatoDinero(parseFloat(valorTotal)));
    }
  };

  // PDF generation handler
  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    let y = 10;
    doc.setFontSize(18);
    doc.text("Cotización Beta Leasing", 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.text("Datos del bien a cotizar:", 10, y);
    y += 8;
    doc.text(`Tipo: ${tipo}`, 10, y);
    y += 7;
    doc.text(`Marca: ${marca}`, 10, y);
    y += 7;
    doc.text(`Modelo: ${modelo}`, 10, y);
    y += 7;
    doc.text(`Año: ${ano}`, 10, y);
    y += 7;
    doc.text(`Valor total: ${valorTotal}`, 10, y);
    y += 7;
    doc.text(`IVA: ${iva}`, 10, y);
    y += 7;
    doc.text(`Valor factura (sin IVA): ${valorFactura}`, 10, y);
    y += 7;
    doc.text(`Plazo en meses: ${plazoMeses}`, 10, y);
    y += 7;
    doc.text(`Porcentaje de pago inicial: ${porcentajeEnganche}%`, 10, y);
    y += 7;
    doc.text(`Monto total a financiar: ${montoFinanciar}`, 10, y);
    y += 7;
    doc.text(`Renta mensual: ${rentaMensual}`, 10, y);
    y += 12;
    doc.text("Datos del solicitante:", 10, y);
    y += 8;
    doc.text(`Nombre completo: ${nombre}`, 10, y);
    y += 7;
    doc.text(`Teléfono: ${telefono}`, 10, y);
    y += 7;
    doc.text(`Compañía: ${compania}`, 10, y);
    y += 7;
    doc.text(`Correo electrónico: ${email}`, 10, y);
    y += 12;
    doc.setFontSize(10);
    doc.text(
      "* Los importes de seguros, impuestos, comisiones y costos de accesorios no están incluidos en esta cotización.",
      10,
      y
    );
    y += 5;
    doc.text(
      "La presente cotización se emite únicamente con fines informativos y podrá ser objeto de modificaciones.",
      10,
      y
    );
    y += 5;
    doc.text(
      "La celebración de cualquier contrato está sujeta a la aprobación de la solicitud de arrendamiento respectiva.",
      10,
      y
    );
    doc.save("cotizacion-beta-leasing.pdf");
  };

  return (
    <div
      className="bg-[#222c36] min-h-screen flex flex-col relative p-4"
      style={{
        backgroundImage: "url('/cotizador-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-[200px] mb-2">
          <Image
            src="/logo.png"
            alt="Beta Leasing"
            width={200}
            height={60}
            priority
          />
        </div>
        <div className="bg-[rgba(0,0,0,0.6)] rounded-lg p-8 w-full max-w-3xl mx-auto mt-2 mb-8 ">
          <h2 className="text-2xl text-white text-center mb-2 font-semibold">
            Cotizador
          </h2>
          {step === 1 && (
            <form className="w-full">
              <h3 className="text-lg text-white text-center mb-4">
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
                <p className="text-center text-white text-sm mb-1">
                  Valor total
                </p>
                <input
                  type="text"
                  className="bg-black text-white rounded px-3 py-2 w-full text-center"
                  placeholder="0.00"
                  value={valorTotal}
                  onChange={handleValorTotalChange}
                  onBlur={handleValorTotalBlur}
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
                  onChange={(e) =>
                    setPorcentajeEnganche(Number(e.target.value))
                  }
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
              <div className="flex flex-col items-center mt-6">
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mb-2"
                  onClick={() => setStep(2)}
                  disabled={
                    !valorTotal ||
                    isNaN(parseFloat(removeFormatoDinero(valorTotal))) ||
                    parseFloat(removeFormatoDinero(valorTotal)) <= 0
                  }
                >
                  Siguiente
                </button>
                <p className="text-white text-sm">Paso 1 de 2</p>
              </div>
            </form>
          )}
          {step === 2 && (
            <div className="w-full">
              <h3 className="text-xl text-white text-center mb-6">
                Confirmar información
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: User info form */}
                <div>
                  <input
                    type="text"
                    className="bg-black text-white rounded px-3 py-3 w-full mb-4"
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <input
                    type="text"
                    className="bg-black text-white rounded px-3 py-3 w-full mb-4"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    maxLength={10}
                  />
                  <input
                    type="text"
                    className="bg-black text-white rounded px-3 py-3 w-full mb-4"
                    placeholder="Compañía"
                    value={compania}
                    onChange={(e) => setCompania(e.target.value)}
                  />
                  <input
                    type="email"
                    className="bg-black text-white rounded px-3 py-3 w-full mb-4"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Right: PDF info and button */}
                <div className="flex flex-col justify-center items-center">
                  <p className="text-white text-lg mb-6 text-center">
                    Genera tu archivo <span className="font-bold">PDF</span>{" "}
                    para ver todos los detalles
                    <br />
                    de tu cotización arrendamiento
                  </p>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded mb-8"
                    onClick={handleGeneratePDF}
                  >
                    GENERAR PDF
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center mt-6">
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mb-2"
                  onClick={() => setStep(1)}
                >
                  ATRAS
                </button>
                <p className="text-white text-sm">Paso 2 de 2</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
