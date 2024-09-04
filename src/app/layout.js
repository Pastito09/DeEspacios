import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import 'animate.css';

export const metadata = {
  title: 'DeEspacios',
  description:
    'DeEspacios es un centro de acompañamiento terapueutico',
  keywords: [
    'Psicologia',
    'Acompañamiento terapeutico',
    'Banfield',
    'Buenos Aires',
    'De espacios',
    'Espacio psicologico integral',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
