import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from './componentes/sidenav';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clima App",
  description: "Proyecto React + NextJS",
};
// #e7f7a6 var(--tw-gradient-from-position);
// --tw-gradient-to: rgb(255 255 255 / 0%)
export default function RootLayout({ children }) {
  return (
    <html lang="en">          
        <body className="bg-gradient-to-br via-90% from-[#fbdaae] ">
        <div className="flex  justify-center w-full">
        <div className='flex-col lg:w-5/6 w-full'>
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
