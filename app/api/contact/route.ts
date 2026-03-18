import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  console.log("--- [DEBUG] Inizio procedura POST /api/contact ---");

  try {
    // Estraiamo i campi corretti che arrivano dal frontend
    const { firstName, lastName, email, phone, message, area } = await request.json();
    
    // Creiamo il nome completo per l'oggetto della mail
    const fullName = `${firstName} ${lastName}`;
    
    console.log("--- [DEBUG] Dati ricevuti:", { fullName, email, area });

    if (!process.env.EMAIL_PASS) {
      console.error("--- [DEBUG] ERRORE: EMAIL_PASS non trovata in .env.local");
      return NextResponse.json({ error: "Configurazione server mancante" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ass.legale@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("--- [DEBUG] Tentativo di invio mail in corso...");

    const info = await transporter.sendMail({
      from: `"Sito Web Studio Fusco" <ass.legale@gmail.com>`,
      to: "ass.legale@gmail.com",
      replyTo: email,
      subject: `🔴 Nuova richiesta consulenza - ${fullName}`,
      html: `
        <div style="background-color: #fdfaf5; padding: 40px 20px; font-family: 'serif', 'Georgia', 'Times New Roman', serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5d5c5; border-radius: 8px; overflow: hidden;">
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
                Gentile Avvocato, ha ricevuto una nuova richiesta di contatto:
              </p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #800020; width: 35%;">Nominativo:</td>
                  <td style="padding: 10px 0; color: #444;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #800020;">Area Legale:</td>
                  <td style="padding: 10px 0; color: #444; text-transform: capitalize;">${area?.replace(/-/g, " ")}</td>
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
                Operatività territoriale: <strong>Terracina | Latina | Roma</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("--- [DEBUG] EMAIL INVIATA CON SUCCESSO:", info.messageId);

    return NextResponse.json({ message: "Email inviata con successo" }, { status: 200 });

  } catch (error: unknown) {
    console.error("--- [DEBUG] ERRORE CATTURATO:");
    if (error instanceof Error) {
      console.error("Messaggio:", error.message);
      return NextResponse.json({ error: `Errore nell'invio: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ error: "Errore imprevisto" }, { status: 500 });
  }
}