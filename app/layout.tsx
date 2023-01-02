import "../styles/globals.css";
import Navbar from "../components/navbar/navbar.component";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='dark'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
