import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  console.log("--- [DEBUG] Inizio procedura POST /api/contact ---");

  try {
    const { firstName, lastName, email, phone, message, area } = await request.json();
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

    console.log("--- [DEBUG] Tentativo di invio mail (Admin + Cliente)...");

    // Definiamo le due email
    const mailToStudio = {
      from: `"Sito Web Studio Fusco" <ass.legale@gmail.com>`,
      to: "ass.legale@gmail.com",
      replyTo: email,
      subject: `⚖️ Nuova richiesta consulenza - ${fullName}`,
      html: `
        <div style="background-color: #fdfaf5; padding: 40px 20px; font-family: serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5d5c5; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #800020; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; text-transform: uppercase;">Nuova Richiesta</h1>
            </div>
            <div style="padding: 40px; color: #333;">
              <p><strong>Nominativo:</strong> ${fullName}</p>
              <p><strong>Area Legale:</strong> ${area?.replace(/-/g, " ")}</p>
              <p><strong>Telefono:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #fdfaf5; border-left: 4px solid #800020;">
                <p><strong>Messaggio:</strong><br/>"${message}"</p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    const mailToClient = {
      from: `"Studio Legale Fusco" <ass.legale@gmail.com>`,
      to: email, // L'email dell'utente
      subject: "Conferma ricezione richiesta di consulenza - Studio Legale Fusco",
      html: `
        <div style="font-family: serif; padding: 30px; color: #333; background-color: #fdfaf5;">
          <h2 style="color: #800020;">Gentile ${firstName},</h2>
          <p>Le confermiamo di aver ricevuto correttamente la Sua richiesta di contatto per l'area <strong>${area?.replace(/-/g, " ")}</strong>.</p>
          <p>Un professionista dello Studio analizzerà i dettagli forniti e La ricontatterà ai recapiti indicati entro 24 ore lavorative.</p>
          <hr style="border: 0; border-top: 1px solid #e5d5c5; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            <strong>Studio Legale Fusco</strong><br>
            Terracina | Latina | Roma
          </p>
        </div>
      `,
    };

    // Eseguiamo entrambi gli invii
    await Promise.all([
      transporter.sendMail(mailToStudio),
      transporter.sendMail(mailToClient)
    ]);

    console.log("--- [DEBUG] ENTRAMBE LE EMAIL INVIATE CON SUCCESSO ---");
    return NextResponse.json({ message: "Email inviate con successo" }, { status: 200 });

  } catch (error: unknown) {
    console.error("--- [DEBUG] ERRORE:");
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Errore imprevisto" }, { status: 500 });
  }
}