import PageFooter from '@/components/footer/PageFooter';
import MiNavbar from '@/components/navbar/MiNavbar';
import MyChatBot from '@/components/chatbot/MyChatBot';

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
