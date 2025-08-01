import { NextResponse } from "next/server";
import { Resend } from "resend";
import { jsPDF } from "jspdf";

const resend = new Resend(process.env.RESEND_API_KEY);

// Constants
const IVA = 0.16;
const TASA = 0.24;

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

const generatePDF = (data) => {
  const doc = new jsPDF();
  let y = 20;
  const pageWidth = doc.internal.pageSize.getWidth();

  // Logo
  // doc.addImage("https://betaleasing.vercel.app//logo-azul.png", "PNG", 10, -6, 40, 38);

  // Add a dividing line
  doc.setDrawColor(200, 200, 200);
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
  const reference = data.reference || Math.floor(Math.random() * 100000000);
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
  doc.text(`Empresa: ${data.compania || "-"}`, 14, y);
  y += 6;
  doc.text(`Contacto: ${data.nombre || "-"}`, 14, y);
  y += 6;
  doc.text(`Teléfono: ${data.telefono || "-"}`, 14, y);
  y += 6;
  doc.text(`Correo electrónico: ${data.email || "-"}`, 14, y);
  y += 12;

  // Información del vehículo
  doc.setFont("helvetica", "bold");
  doc.text("Información del vehículo", pageWidth / 2, y, { align: "center" });
  y += 4;
  doc.setFont("helvetica", "normal");
  doc.rect(10, y, pageWidth - 20, 30);
  y += 8;
  doc.text(`Marca: ${data.marca || "-"}`, 14, y);
  y += 6;
  doc.text(`Modelo: ${data.modelo || "-"}`, 14, y);
  y += 6;
  doc.text(`Año: ${data.ano || "-"}`, 14, y);
  y += 6;
  doc.text(`Valor Factura: ${data.valorTotal || "-"}`, 14, y);
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

  // Cálculos
  const valorFacturaNum = Math.round(
    parseFloat(removeFormatoDinero(data.valorFactura || "0"))
  );
  const valorTotalNum = Math.round(valorFacturaNum * (1 + IVA));
  const rentaMensualNum = Math.round(
    parseFloat(removeFormatoDinero(data.rentaMensual || "0"))
  );
  const pagoInicial = Math.round(
    (data.porcentajeEnganche / 100) * valorFacturaNum
  );
  const comision = Math.round(valorTotalNum * 0.03);
  const subtotalPagoInicial = Math.round(pagoInicial + comision);
  const ivaSubtotal = Math.round(subtotalPagoInicial * IVA);
  const rentaDeposito = Math.round(rentaMensualNum / (1 + IVA));
  const totalPagoInicial = Math.round(
    subtotalPagoInicial + ivaSubtotal + rentaDeposito
  );
  const valorResidual = Math.round(
    valorFacturaNum * getPorcentajeResidual(data.tipo, data.plazoMeses)
  );
  const rentaMensualSinIVA = Math.round(rentaMensualNum / (1 + IVA));
  const totalRenta = Math.round(rentaMensualSinIVA * data.plazoMeses);
  const totalRentaPagoInicial = Math.round(
    rentaDeposito * data.plazoMeses + subtotalPagoInicial
  );
  const ahorroISR = Math.round(totalRentaPagoInicial * -1 * 0.35);
  const ahorroPTU = Math.round(totalRentaPagoInicial * -1 * 0.1);
  const pagoMensualConIVA = Math.round(rentaMensualNum);
  const ahorroIVA = Math.round(
    -1 * (ivaSubtotal + data.plazoMeses * (pagoMensualConIVA - rentaDeposito))
  );
  const costoReal = Math.round(
    totalRentaPagoInicial + ahorroISR + ahorroPTU + ahorroIVA + valorResidual
  );

  // Calcular el centro de la caja
  const boxLeft = 10;
  const boxWidth = pageWidth - 20;
  const boxCenter = boxLeft + boxWidth / 2;

  doc.setFont("helvetica", "bold");
  doc.text("Plazo", boxCenter - 2, y, { align: "right" });
  doc.text(data.plazoMeses.toString(), boxCenter + 2, y, { align: "left" });
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

  return doc.output("arraybuffer");
};

export async function POST(request) {
  try {
    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured",
        },
        { status: 500 }
      );
    }

    const data = await request.json();
    console.log("Attempting to send cotizador email with data:", {
      nombre: data.nombre,
      email: data.email,
      compania: data.compania,
      // Don't log sensitive data
    });

    // Generate PDF
    const pdfBuffer = generatePDF(data);
    const reference = data.reference || Math.floor(Math.random() * 100000000);
    const fileName = `cotizacion-beta-leasing-${reference}.pdf`;

    // Send email using Resend with PDF attachment
    const result = await resend.emails.send({
      from: "BetaLeasing <contacto@betaleasing.com>",
      to: ["contacto@betaleasing.com"],
      subject: `Nueva cotización de arrendamiento - ${
        data.nombre || "Cliente"
      }`,
      attachments: [
        {
          filename: fileName,
          content: Buffer.from(pdfBuffer),
        },
      ],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0A1A23; margin: 0; font-size: 24px;">Nueva Cotización</h1>
              <p style="color: #FF914D; margin: 5px 0 0 0; font-weight: bold;">BetaLeasing - Cotizador Web</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #0A1A23; margin: 0 0 15px 0; font-size: 18px;">Información del Cliente</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057; width: 40%;">Nombre:</td>
                  <td style="padding: 8px 0; color: #212529;">${
                    data.nombre || "No especificado"
                  }</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Email:</td>
                  <td style="padding: 8px 0; color: #212529;">
                    <a href="mailto:${
                      data.email
                    }" style="color: #FF914D; text-decoration: none;">${
                      data.email || "No especificado"
                    }</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Teléfono:</td>
                  <td style="padding: 8px 0; color: #212529;">
                    <a href="tel:${data.telefono?.replace(
                      /\D/g,
                      ""
                    )}" style="color: #FF914D; text-decoration: none;">${
                      data.telefono || "No especificado"
                    }</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Compañía:</td>
                  <td style="padding: 8px 0; color: #212529;">${
                    data.compania || "No especificado"
                  }</td>
                </tr>
              </table>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #0A1A23; margin: 0 0 15px 0; font-size: 18px;">Información del Bien</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057; width: 40%;">Tipo:</td>
                  <td style="padding: 8px 0; color: #212529;">${
                    data.tipo || "No especificado"
                  }</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Marca:</td>
                  <td style="padding: 8px 0; color: #212529;">${
                    data.marca || "No especificado"
                  }</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Modelo:</td>
                  <td style="padding: 8px 0; color: #212529;">${
                    data.modelo || "No especificado"
                  }</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Año:</td>
                  <td style="padding: 8px 0; color: #212529;">${
                    data.ano || "No especificado"
                  }</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Valor Total:</td>
                  <td style="padding: 8px 0; color: #212529; font-weight: bold; color: #28a745;">${
                    data.valorTotal || "No especificado"
                  }</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Plazo (meses):</td>
                  <td style="padding: 8px 0; color: #212529;">${
                    data.plazoMeses || "No especificado"
                  }</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Pago Inicial (%):</td>
                  <td style="padding: 8px 0; color: #212529;">${
                    data.porcentajeEnganche || "No especificado"
                  }%</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Renta Mensual:</td>
                  <td style="padding: 8px 0; color: #212529; font-weight: bold; color: #28a745;">${
                    data.rentaMensual || "No especificado"
                  }</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin-top: 20px;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>📋 Cotización Generada:</strong> El cliente ha generado una cotización de arrendamiento puro. Revisa los detalles y contacta al cliente para continuar con el proceso.
              </p>
              <p style="margin: 10px 0 0 0; color: #856404; font-size: 14px;">
                <strong>📎 Archivo Adjunto:</strong> La cotización completa en formato PDF se encuentra adjunta a este correo.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #6c757d; font-size: 12px;">
                Este email fue generado automáticamente desde el cotizador web de BetaLeasing
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Cotizador email sent successfully:", result);

    return NextResponse.json({
      success: true,
      message: "Correo enviado correctamente",
      emailId: result.data?.id,
    });
  } catch (error) {
    console.error("Error al enviar el correo del cotizador:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      status: error.status,
      response: error.response,
    });

    return NextResponse.json(
      {
        success: false,
        message: "Error al enviar el correo",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
