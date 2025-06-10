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
    let y = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    // Logo
    doc.addImage("/logo-azul.png", "PNG", 10, -6, 40, 38);
    // Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Cotización de Arrendamiento Puro", pageWidth / 2, y, {
      align: "center",
    });
    y += 10;
    doc.setFontSize(13);
    doc.setFont("helvetica", "normal");
    doc.text("Bien: Vehículo", pageWidth / 2, y, { align: "center" });
    // Reference and date
    doc.setFontSize(9);
    doc.text(`Clave de referencia: 1748360356-prueba`, 10, 30);
    const today = new Date();
    const fecha = today.toLocaleDateString("es-MX");
    doc.text(`Fecha: ${fecha}`, pageWidth - 50, 30);
    y = 36;
    // Información del cliente
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Información del cliente", pageWidth / 2, y, { align: "center" });
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.rect(10, y, pageWidth - 20, 14);
    y += 5;
    doc.text(`Empresa: ${compania || "-"}`, 14, y);
    y += 4;
    doc.text(`Contacto: ${nombre || "-"}`, 14, y);
    doc.text(`Teléfono: ${telefono || "-"}`, 80, y);
    y += 4;
    doc.text(`Correo electrónico: ${email || "-"}`, 14, y);
    y += 8;
    // Información del vehículo
    doc.setFont("helvetica", "bold");
    doc.text("Información del vehículo", pageWidth / 2, y, { align: "center" });
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.rect(10, y, pageWidth - 20, 10);
    y += 4;
    doc.text(`Marca: ${marca || "-"}`, 14, y);
    doc.text(`Modelo: ${modelo || "-"}`, 80, y);
    y += 4;
    doc.text(`Año: ${ano || "-"}`, 14, y);
    doc.text(`Valor Factura: ${valorFactura}`, 80, y);
    y += 8;
    // Información del arrendamiento
    doc.setFont("helvetica", "bold");
    doc.text("Información del arrendamiento", pageWidth / 2, y, {
      align: "center",
    });
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.rect(10, y, pageWidth - 20, 38);
    y += 5;
    // Calculations
    const valorFacturaNum = parseFloat(removeFormatoDinero(valorFactura));
    const pagoInicial = (porcentajeEnganche / 100) * valorFacturaNum;
    const comision = valorFacturaNum * 0.03;
    const subtotal = pagoInicial + comision;
    const ivaComision = comision * IVA;
    const ivaSubtotal = subtotal * IVA;
    const rentaDeposito = valorFacturaNum * 0.025;
    const totalPagoInicial = subtotal + ivaSubtotal + rentaDeposito;
    const valorResidual = 0; // As in screenshot
    // Renta mensual
    const rentaMensualNum = parseFloat(removeFormatoDinero(rentaMensual));
    // Table-like layout
    doc.setFont("helvetica", "bold");
    doc.text("Plazo", 14, y);
    doc.text("24", 32, y);
    doc.text("Renta mensual", 60, y);
    doc.text(formatoDinero(rentaMensualNum), 100, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.text("Pago inicial", 14, y);
    doc.text(formatoDinero(pagoInicial), 60, y);
    y += 5;
    doc.text("Comisión 3%", 14, y);
    doc.text(formatoDinero(comision), 60, y);
    y += 5;
    doc.text("Subtotal", 14, y);
    doc.text(formatoDinero(subtotal), 60, y);
    y += 5;
    doc.text("IVA (16%)", 14, y);
    doc.text(formatoDinero(ivaSubtotal), 60, y);
    y += 5;
    doc.text("Renta en depósito", 14, y);
    doc.text(formatoDinero(rentaDeposito), 60, y);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.text("Total pago inicial", 14, y);
    doc.text(formatoDinero(totalPagoInicial), 60, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text("Valor residual (sin IVA)", 14, y);
    doc.text(formatoDinero(valorResidual), 60, y);
    y += 10;
    // Beneficio Fiscal y Costo Real Estimado
    doc.setFont("helvetica", "bold");
    doc.text("Beneficio Fiscal y Costo Real Estimado", pageWidth / 2, y, {
      align: "center",
    });
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.rect(10, y, pageWidth - 20, 22);
    y += 5;
    // Fiscal calculations
    const totalRentaPagoInicial = rentaMensualNum * 24 + totalPagoInicial;
    const ahorroISR = totalRentaPagoInicial * 0.3 * -1;
    const ahorroPTU = totalRentaPagoInicial * 0.1 * -1;
    const ahorroIVA = totalRentaPagoInicial * 0.16 * -1;
    const costoReal = totalRentaPagoInicial + ahorroISR + ahorroPTU + ahorroIVA;
    doc.setFont("helvetica", "bold");
    doc.text("Total renta + Pago inicial", 14, y);
    doc.text(formatoDinero(totalRentaPagoInicial), 80, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text("Ahorro fiscal I.S.R. 30%", 14, y);
    doc.setTextColor(255, 0, 0);
    doc.text(formatoDinero(ahorroISR), 80, y);
    doc.setTextColor(0, 0, 0);
    y += 5;
    doc.text("Ahorro fiscal P.T.U. 10%", 14, y);
    doc.setTextColor(255, 0, 0);
    doc.text(formatoDinero(ahorroPTU), 80, y);
    doc.setTextColor(0, 0, 0);
    y += 5;
    doc.text("Ahorro fiscal I.V.A.", 14, y);
    doc.setTextColor(255, 0, 0);
    doc.text(formatoDinero(ahorroIVA), 80, y);
    doc.setTextColor(0, 0, 0);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.text("Valor residual", 14, y);
    doc.text(formatoDinero(valorResidual), 80, y);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.text("Costo real", 14, y);
    doc.text(formatoDinero(costoReal), 80, y);
    y += 10;
    // Notas
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Notas: Los importes de seguros, impuestos, comisiones y costos de accesorios no están incluidos en esta cotización. La presente cotización se emite únicamente con fines informativos y podrá ser objeto de modificaciones. La celebración de cualquier contrato está sujeta a la aprobación de la solicitud de arrendamiento respectiva. El beneficio fiscal y costo real esta sujeto a la situación particular de cada cliente.",
      10,
      y,
      { maxWidth: pageWidth - 20 }
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
