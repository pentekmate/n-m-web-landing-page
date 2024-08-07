import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface MailRequest {
  name: string;
  email: string;
  message: string;
  phone: string;
  tier: string;
}

export async function POST(request: NextRequest) {
  console.log("csa");
  
  const { name, email, message, phone, tier } = await request.json() as MailRequest;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // vagy másik email szolgáltatás
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Új megrendelés: ${name}`,
    html: `<h1>Kapcsolat kérés</h1> <br> <p>Név:${name}</p><br> <p>Email: ${email}</p><br> <p>Telefonszám: ${phone}</p><br> <p>Üzenet:${message}</p> <br> <p>Package:${tier}</p>`,
    headers: {
      'X-Priority': '1',
      'Importance': 'high'
    }
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sikeresen elküldve' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Hiba történt az email küldése során' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Metódus nem támogatott' }, { status: 405 });
}
