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
      <body className="bg-gradient-to-br via-90% from-teal-50 ">
      <div className="flex  justify-center w-full">
      <div className='flex-col w-5/6 '>
          <div className="w-full flex-none">
            <SideNav />
          </div>
          {children}
      </div>
      </div>       
      </body>
    </html>
  );
}
