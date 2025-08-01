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
  return num.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
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
  const [isGenerating, setIsGenerating] = useState(false);

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
  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    const doc = new jsPDF();
    let y = 20; // Set y to be below the logo
    const pageWidth = doc.internal.pageSize.getWidth();
    // Logo
    doc.addImage("/logo-azul.png", "PNG", 10, -6, 40, 38);
    // Add a dividing line
    doc.setDrawColor(200, 200, 200); // Light gray color
    doc.line(10, y, pageWidth - 10, y);
    y += 10;
    // Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Cotización de Arrendamiento Puro", pageWidth / 2, y, {
      align: "center",
    });
    y += 8;
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Bien: Vehículo", pageWidth / 2, y, { align: "center" });
    // Reference and date
    doc.setFontSize(8);
    const reference = Math.floor(Math.random() * 100000000);
    doc.text(`Clave de referencia: ${reference}`, 10, 44);
    const today = new Date();
    const fecha = today.toLocaleDateString("es-MX");
    doc.text(`Fecha: ${fecha}`, pageWidth - 50, 44);
    // Información del cliente
    y += 16;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Información del cliente", pageWidth / 2, y, { align: "center" });
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.rect(10, y, pageWidth - 20, 30);
    y += 8;
    doc.text(`Empresa: ${compania || "-"}`, 14, y);
    y += 6;
    doc.text(`Contacto: ${nombre || "-"}`, 14, y);
    y += 6;
    doc.text(`Teléfono: ${telefono || "-"}`, 14, y);
    y += 6;
    doc.text(`Correo electrónico: ${email || "-"}`, 14, y);
    y += 12;
    // Información del vehículo
    doc.setFont("helvetica", "bold");
    doc.text("Información del vehículo", pageWidth / 2, y, { align: "center" });
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.rect(10, y, pageWidth - 20, 30);
    y += 8;
    doc.text(`Marca: ${marca || "-"}`, 14, y);
    y += 6;
    doc.text(`Modelo: ${modelo || "-"}`, 14, y);
    y += 6;
    doc.text(`Año: ${ano || "-"}`, 14, y);
    y += 6;
    doc.text(`Valor Factura: ${valorTotal}`, 14, y);
    y += 12;
    // Información del arrendamiento
    doc.setFont("helvetica", "bold");
    doc.text("Información del arrendamiento", pageWidth / 2, y, {
      align: "center",
    });
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.rect(10, y, pageWidth - 20, 58);
    y += 6;
    // Cálculos ajustados a la fórmula de la imagen
    const valorFacturaNum = Math.round(
      parseFloat(removeFormatoDinero(valorFactura))
    );
    const valorTotalNum = Math.round(valorFacturaNum * (1 + IVA));
    const rentaMensualNum = Math.round(
      parseFloat(removeFormatoDinero(rentaMensual))
    );
    const pagoInicial = Math.round(
      (porcentajeEnganche / 100) * valorFacturaNum
    );
    const comision = Math.round(valorTotalNum * 0.03);
    const subtotalPagoInicial = Math.round(pagoInicial + comision);
    const ivaSubtotal = Math.round(subtotalPagoInicial * IVA);
    const rentaDeposito = Math.round(rentaMensualNum / (1 + IVA));
    const totalPagoInicial = Math.round(
      subtotalPagoInicial + ivaSubtotal + rentaDeposito
    );
    const valorResidual = Math.round(
      valorFacturaNum * getPorcentajeResidual(tipo, plazoMeses)
    );
    // Calcular la renta mensual sin IVA
    const rentaMensualSinIVA = Math.round(rentaMensualNum / (1 + IVA));
    // Total renta (sin IVA) durante el plazo
    const totalRenta = Math.round(rentaMensualSinIVA * plazoMeses);
    // Total renta + Pago inicial

    const totalRentaPagoInicial = Math.round(
      rentaDeposito * plazoMeses + subtotalPagoInicial
    );
    // Ahorro Fiscal ISR 35%
    const ahorroISR = Math.round(totalRentaPagoInicial * -1 * 0.35);
    // Ahorro Fiscal PTU 10%
    const ahorroPTU = Math.round(totalRentaPagoInicial * -1 * 0.1);
    // Ahorro Fiscal IVA
    const pagoMensualConIVA = Math.round(rentaMensualNum);
    // const ahorroIVA =
    //  -1 * (ivaSubtotal + plazoMeses * pagoMensualConIVA - rentaDeposito);
    const ahorroIVA = Math.round(
      -1 * (ivaSubtotal + plazoMeses * (pagoMensualConIVA - rentaDeposito))
    );
    // Costo real
    //const costoReal = totalRentaPagoInicial + ahorroISR + ahorroPTU + ahorroIVA;
    const costoReal = Math.round(
      totalRentaPagoInicial + ahorroISR + ahorroPTU + ahorroIVA + valorResidual
    );

    // Calcular el centro de la caja
    const boxLeft = 10;
    const boxWidth = pageWidth - 20;
    const boxCenter = boxLeft + boxWidth / 2;
    doc.setFont("helvetica", "bold");
    doc.text("Plazo", boxCenter - 2, y, { align: "right" });
    doc.text(plazoMeses.toString(), boxCenter + 2, y, { align: "left" });
    y += 6;
    doc.text("Renta mensual", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(rentaMensualNum), boxCenter + 2, y, {
      align: "left",
    });
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.text("Pago inicial", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(pagoInicial), boxCenter + 2, y, { align: "left" });
    y += 6;
    doc.text("Comisión 3%", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(comision), boxCenter + 2, y, { align: "left" });
    y += 6;
    doc.text("Subtotal", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(subtotalPagoInicial), boxCenter + 2, y, {
      align: "left",
    });
    y += 6;
    doc.text("IVA (16%)", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(ivaSubtotal), boxCenter + 2, y, { align: "left" });
    y += 6;
    doc.text("Renta en depósito", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(rentaDeposito), boxCenter + 2, y, { align: "left" });
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.text("Total pago inicial", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(totalPagoInicial), boxCenter + 2, y, {
      align: "left",
    });
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.text("Valor residual (sin IVA)", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(valorResidual), boxCenter + 2, y, { align: "left" });
    y += 12;
    doc.setFont("helvetica", "bold");
    doc.text("Beneficio Fiscal y Costo Real Estimado", pageWidth / 2, y, {
      align: "center",
    });
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.rect(10, y, pageWidth - 20, 40);
    y += 6;
    // Fiscal calculations (ajustados)
    doc.setFont("helvetica", "bold");
    doc.text("Total renta + Pago inicial", boxCenter - 2, y, {
      align: "right",
    });
    doc.text(formatoDinero(totalRentaPagoInicial), boxCenter + 2, y, {
      align: "left",
    });
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.text("Ahorro fiscal I.S.R. 35%", boxCenter - 2, y, { align: "right" });
    doc.setTextColor(255, 0, 0);
    doc.text(formatoDinero(ahorroISR), boxCenter + 2, y, { align: "left" });
    doc.setTextColor(0, 0, 0);
    y += 6;
    doc.text("Ahorro fiscal P.T.U. 10%", boxCenter - 2, y, { align: "right" });
    doc.setTextColor(255, 0, 0);
    doc.text(formatoDinero(ahorroPTU), boxCenter + 2, y, { align: "left" });
    doc.setTextColor(0, 0, 0);
    y += 6;
    doc.text("Ahorro fiscal I.V.A.", boxCenter - 2, y, { align: "right" });
    doc.setTextColor(255, 0, 0);
    doc.text(formatoDinero(ahorroIVA), boxCenter + 2, y, { align: "left" });
    doc.setTextColor(0, 0, 0);
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.text("Valor residual", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(valorResidual), boxCenter + 2, y, { align: "left" });
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.text("Costo real", boxCenter - 2, y, { align: "right" });
    doc.text(formatoDinero(costoReal), boxCenter + 2, y, { align: "left" });
    y += 12;
    // Notas
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Notas: Los importes de seguros, impuestos, comisiones y costos de accesorios no están incluidos en esta cotización. La presente cotización se emite únicamente con fines informativos y podrá ser objeto de modificaciones. La celebración de cualquier contrato está sujeta a la aprobación de la solicitud de arrendamiento respectiva. El beneficio fiscal y costo real esta sujeto a la situación particular de cada cliente.",
      10,
      y,
      { maxWidth: pageWidth - 20 }
    );

    // Save PDF
    doc.save(`cotizacion-beta-leasing-${reference}.pdf`);

    // Send email with cotization details
    try {
      const emailData = {
        nombre,
        email,
        telefono,
        compania,
        tipo,
        marca,
        modelo,
        ano,
        valorTotal,
        valorFactura,
        plazoMeses,
        porcentajeEnganche,
        rentaMensual,
        reference,
        fecha,
      };

      const response = await fetch("/api/cotizador", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (result.success) {
        alert("PDF generado y correo enviado correctamente");
      } else {
        alert("PDF generado pero hubo un error al enviar el correo");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("PDF generado pero hubo un error al enviar el correo");
    } finally {
      setIsGenerating(false);
    }
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
                    className={`font-bold py-3 px-8 rounded mb-8 ${
                      isGenerating
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
                    onClick={handleGeneratePDF}
                    disabled={isGenerating}
                  >
                    {isGenerating ? "GENERANDO..." : "GENERAR PDF"}
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
