import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import 'animate.css';

import PageFooter from '@/components/footer/PageFooter';
import MiNavbar from '@/components/MiNavbar';
import MyChatBot from '@/components/chatbot/MyChatBot';

export const metadata = {
  title: 'DeEspacios',
  description:
    'DeEspacios es un centro de acompañamiento terapueutico',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MiNavbar />
        {children}
        <MyChatBot />
        <PageFooter />
      </body>
    </html>
  );
}
