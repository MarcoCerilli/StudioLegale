import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: "Studio Legale Fusco <onboarding@resend.dev>",
      to: ["ass.legale@gmail.com"],
      replyTo: email,
      subject: `Richiesta Consulenza - ${name}`,
      html: `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { margin: 0; padding: 0; background-color: #fcfaf8; }
      /* Container molto arrotondato */
      .container { font-family: 'Times New Roman', serif; max-width: 600px; margin: 30px auto; background-color: #ffffff; border: 1px solid #e5e0d9; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
      
      .header { padding: 40px 20px; text-align: center; background-color: #ffffff; border-bottom: 1px solid #f2ede8; }
      /* Logo arrotondato */
      .logo-img { width: 90px; height: 90px; object-fit: cover; border-radius: 15px; margin-bottom: 15px; }
      .header h1 { color: #2d2424; margin: 0; font-size: 18px; font-weight: 400; letter-spacing: 5px; text-transform: uppercase; }
      .header-line { width: 40px; height: 2px; background-color: #c5a5a5; margin: 15px auto 0; border-radius: 10px; }
      
      .content { padding: 40px 50px; color: #4a3434; line-height: 1.8; }
      .section-title { font-size: 13px; color: #8b5e5e; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 30px; text-align: center; }
      
      .info-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
      .info-table td { padding: 15px 0; font-family: sans-serif; border-bottom: 1px solid #f8f5f2; }
      .label { font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 1px; width: 100px; }
      .value { font-size: 15px; color: #2d2424; }
      
      /* Box messaggio arrotondato */
      .message-box { background-color: #fdfcfb; padding: 25px; border: 1px solid #f2ede8; border-radius: 15px; margin: 20px 0; font-style: italic; color: #5a4a4a; font-family: serif; font-size: 16px; line-height: 1.6; }
      
      .cta-container { text-align: center; margin-top: 30px; }
      /* Bottone arrotondato (Pill) */
      .btn-call { display: inline-block; padding: 14px 35px; background-color: #8b5e5e; color: #ffffff !important; text-decoration: none; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; border-radius: 50px; box-shadow: 0 4px 12px rgba(139, 94, 94, 0.2); }
      
      .footer { background-color: #ffffff; padding: 30px; text-align: center; border-top: 1px solid #f2ede8; }
      .footer p { font-size: 9px; color: #bcafaf; margin: 0; letter-spacing: 1px; text-transform: uppercase; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://www.avvocatoannafusco.it/images/logo-fusco.png" alt="Logo" class="logo-img">
        <h1>Studio Legale Fusco</h1>
        <div class="header-line"></div>
      </div>
      
      <div class="content">
        <div class="section-title">Nuova Richiesta Ricevuta</div>
        
        <table class="info-table">
          <tr>
            <td class="label">Mittente</td>
            <td class="value"><strong>${name}</strong></td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td class="value">${email}</td>
          </tr>
          <tr>
            <td class="label">Telefono</td>
            <td class="value">${phone}</td>
          </tr>
        </table>

        <div class="label" style="margin-top: 20px;">Messaggio:</div>
        <div class="message-box">
          "${message}"
        </div>

        <div class="cta-container">
          <a href="tel:${phone}" class="btn-call">Chiama Cliente</a>
        </div>
      </div>
      
      <div class="footer">
        <p>© 2026 Studio Legale Fusco | Terracina</p>
      </div>
    </div>
  </body>
  </html>
`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Errore invio mail:", error);
    return NextResponse.json({ error: "Errore nell'invio" }, { status: 500 });
  }
}