import nodemailer from "nodemailer";

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Escapa para evitar inyección muy básica en el cuerpo HTML
const escape = (str) =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function post({ request }) {
  try {
    const data = await request.json();
    const { name, email, subject, message, honey } = data;

    // Honeypot anti-spam
    if (honey) {
      return new Response(
        JSON.stringify({ success: false, message: "Spam detectado." }),
        { status: 400 },
      );
    }

    // Validaciones básicas
    if (
      !name ||
      !email ||
      !message ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !validateEmail(email)
    ) {
      return new Response(
        JSON.stringify({ success: false, message: "Campos inválidos." }),
        { status: 400 },
      );
    }

    // Configurar transporter SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Formulario web" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: subject
        ? `Contacto: ${subject} (de ${name})`
        : `Nuevo mensaje de ${name}`,
      text: `
Has recibido un mensaje desde el formulario de contacto:

Nombre: ${name}
Email del remitente: ${email}
Asunto: ${subject || "(sin asunto)"}
Mensaje:
${message}
      `,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${escape(name)}</p>
        <p><strong>Email del remitente:</strong> <a href="mailto:${escape(
          email,
        )}">${escape(email)}</a></p>
        <p><strong>Asunto:</strong> ${escape(subject || "(sin asunto)")}</p>
        <p><strong>Mensaje:</strong><br/>${escape(message).replace(
          /\n/g,
          "<br/>",
        )}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Correo enviado correctamente.",
      }),
      { status: 200 },
    );
  } catch (err) {
    console.error("Error en /api/contact:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Ocurrió un error interno. Intenta más tarde.",
      }),
      { status: 500 },
    );
  }
}
