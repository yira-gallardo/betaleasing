import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email using Resend
    const result = await resend.emails.send({
      from: "BetaLeasing <contacto@betaleasing.com>",
      to: ["allancastellanosmx@gmail.com"],
      subject: `Nueva cotización de arrendamiento - ${
        data.nombre || "Cliente"
      }`,
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
