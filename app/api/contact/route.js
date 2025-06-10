import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Crear el contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contacto@betaleasing.com",
      subject: "Nuevo contacto desde el formulario web",
      html: `
        <h2>Nuevo contacto desde el formulario web</h2>
        <p><strong>Nombre:</strong> ${data.nombre} ${data.apellido}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Celular:</strong> ${data.celular}</p>
        <p><strong>Tipo de Arrendatario:</strong> ${data.arrendatario}</p>
        ${
          data.empresa ? `<p><strong>Empresa:</strong> ${data.empresa}</p>` : ""
        }
        <p><strong>Valor Factura:</strong> ${data.factura}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Correo enviado correctamente",
    });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error al enviar el correo",
      },
      { status: 500 }
    );
  }
}
