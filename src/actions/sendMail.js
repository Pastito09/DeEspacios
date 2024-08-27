'use server';

import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_XYYKwmUS_H9bSvY1nBjB27WVrqjssERtR');

export const sendMail = async (formData) => {
  const nombre = formData.get('nombre');
  const email = formData.get('email');
  const telefono = formData.get('telefono');
  const mensaje = formData.get('mensaje');

  try {
    const { data, error } = await resend.emails.send({
      from: 'Formulario Admisiones <onboarding@resend.dev>',
      to: ['deespacios@gmail.com'],
      subject: 'Mensaje de admisiones',
      react: EmailTemplate({ nombre, email, telefono, mensaje }),
    });
    if (error) {
      return error;
    }
    return data;
  } catch (error) {
    return error;
  }
};
