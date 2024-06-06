import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from './componentes/sidenav';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clima App",
  description: "Proyecto React + NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className="bg-gradient-to-br via-90% from-yellow-200 to-orange-600">
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64 ">
          <SideNav />
        </div>
        {children}
        </div>       
      </body>
    </html>
  );
}
