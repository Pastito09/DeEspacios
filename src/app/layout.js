import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import 'animate.css';

export const metadata = {
  title: 'DeEspacios',
  description:
    'DeEspacios es un centro de acompañamiento terapueutico',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
