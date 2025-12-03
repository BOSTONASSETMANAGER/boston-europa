import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Configuración SMTP de Hostinger
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true para puerto 465, false para otros puertos
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email de destino para recibir los formularios
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contacto@bostonassetmanager.com';
const FROM_EMAIL = process.env.SMTP_USER || 'noreply@bostonam.eu';

interface ContactFormData {
  type: 'contact' | 'exterior' | 'ue';
  nombre: string;
  email: string;
  telefono: string;
  pais?: string;
  asunto?: string;
  mensaje: string;
}

function getEmailSubject(data: ContactFormData): string {
  switch (data.type) {
    case 'contact':
      return `[Contacto] ${data.asunto || 'Nueva consulta'} - ${data.nombre}`;
    case 'exterior':
      return `[Inversión Exterior] Nueva solicitud de ${data.nombre}`;
    case 'ue':
      return `[Inversión UE] Nueva solicitud de ${data.nombre}`;
    default:
      return `Nueva consulta de ${data.nombre}`;
  }
}

function getEmailHtml(data: ContactFormData): string {
  const baseStyles = `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  `;

  const headerColor = data.type === 'exterior' ? '#059669' : '#1d3969';
  const typeLabel = data.type === 'contact' 
    ? 'Formulario de Contacto' 
    : data.type === 'exterior' 
      ? 'Inversión Exterior' 
      : 'Inversión Unión Europea';

  return `
    <div style="${baseStyles}">
      <div style="background: linear-gradient(135deg, ${headerColor}, #2563eb); padding: 30px; border-radius: 16px 16px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Boston Asset Manager</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">${typeLabel}</p>
      </div>
      
      <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
        <h2 style="color: #1d3969; margin-top: 0;">Datos del contacto</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 120px;">Nombre:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1d3969; font-weight: 600;">${data.nombre}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1d3969; font-weight: 600;">
              <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Teléfono:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1d3969; font-weight: 600;">${data.telefono}</td>
          </tr>
          ${data.pais ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">País:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1d3969; font-weight: 600;">${data.pais}</td>
          </tr>
          ` : ''}
          ${data.asunto ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Asunto:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1d3969; font-weight: 600;">${data.asunto}</td>
          </tr>
          ` : ''}
        </table>
        
        <h3 style="color: #1d3969; margin-top: 24px;">Mensaje</h3>
        <div style="background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <p style="color: #374151; margin: 0; white-space: pre-wrap;">${data.mensaje || 'Sin mensaje adicional'}</p>
        </div>
        
        <p style="color: #94a3b8; font-size: 12px; margin-top: 24px; text-align: center;">
          Este email fue enviado automáticamente desde el sitio web de Boston Asset Manager
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validación básica
    if (!data.nombre || !data.email || !data.telefono) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `Boston Asset Manager <${FROM_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: getEmailSubject(data),
      html: getEmailHtml(data),
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, id: info.messageId });
  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
