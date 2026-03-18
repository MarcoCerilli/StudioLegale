import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message, location } = await request.json();

  // Configurazione Trasporto Aruba
  const transporter = nodemailer.createTransport({
    host: "smtps.aruba.it",
    port: 465,
    secure: true, // true per porta 465
    auth: {
      user: "ass.legale@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // La mail arriva alla cliente
      replyTo: email, // Se la cliente risponde, scrive all'utente
      subject: `Nuovo contatto da ${location} - ${name}`,
      text: message,
      html: `
        <h3>Nuovo messaggio dal sito web</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Zona di interesse:</strong> ${location}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email inviata con successo" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Errore nell'invio" }, { status: 500 });
  }
}