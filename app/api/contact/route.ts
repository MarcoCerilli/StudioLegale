import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone, message, location, area } = await request.json();

  // Configurazione Trasporto Aruba
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ass.legale@gmail.com", // Inseriscilo direttamente qui per sicurezza o usa process.env.EMAIL_USER
      pass: process.env.EMAIL_PASS, // La tua password 'elkc gszu gsll wuyd'
    },
  });

  try {
    await transporter.sendMail({
      from: "ass.legale@gmail.com", // Deve essere lo stesso dell'auth user
      to: "ass.legale@gmail.com", // La mail arriva alla cliente
      replyTo: email,
      subject: `Nuovo contatto da ${location} - ${name}`,
      text: message,
      html: `
  <div style="background-color: #fdfaf5; padding: 40px 20px; font-family: 'serif', 'Georgia', 'Times New Roman', serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5d5c5; border-radius: 8px; overflow: hidden; shadow: 0 4px 6px rgba(0,0,0,0.05);">
      
      <div style="background-color: #800020; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 2px; text-transform: uppercase;">
          Nuova Richiesta Consulenza
        </h1>
        <p style="color: #e5d5c5; margin: 10px 0 0 0; font-size: 14px; font-style: italic;">
          Ricevuta da portale web ufficiale
        </p>
      </div>

      <div style="padding: 40px; color: #333333; line-height: 1.6;">
        <p style="font-size: 16px; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 25px;">
          Gentile Avvocato, ha ricevuto una nuova richiesta di contatto con i seguenti dettagli:
        </p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #800020; width: 35%;">Nominativo:</td>
            <td style="padding: 10px 0; color: #444;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #800020;">Area Legale:</td>
            <td style="padding: 10px 0; color: #444; text-transform: capitalize;">${area.replace(/-/g, " ")}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #800020;">Sede / Zona:</td>
            <td style="padding: 10px 0; color: #444;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #800020;">Telefono:</td>
            <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #800020; text-decoration: none; font-weight: bold;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #800020;">Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #800020; text-decoration: none;">${email}</a></td>
          </tr>
        </table>

        <div style="margin-top: 30px; padding: 20px; background-color: #fdfaf5; border-left: 4px solid #800020; font-style: italic;">
          <p style="margin: 0; font-weight: bold; color: #800020; margin-bottom: 5px;">Messaggio dell'utente:</p>
          <p style="margin: 0; color: #555; white-space: pre-wrap;">"${message}"</p>
        </div>
      </div>

      <div style="background-color: #f9f6f2; padding: 20px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          Questo messaggio è stato generato automaticamente dal sito web.<br>
          Operatività territoriale: <strong>Terracina | Latina | Roma</strong>
        </p>
      </div>
    </div>
  </div>
`,
    });

    return NextResponse.json(
      { message: "Email inviata con successo" },
      { status: 200 },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Errore nell'invio" }, { status: 500 });
  }
}
