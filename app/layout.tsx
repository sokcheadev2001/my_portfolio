import "../styles/globals.css";
import Navbar from "../components/navbar/navbar.component";
import LeftBar from "../components/sidebar/leftSide.component";

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
        <LeftBar />
        {children}
      </body>
    </html>
  );
}
