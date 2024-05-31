import styles from "./page.module.css";
import { IoIosSunny  } from "react-icons/io";
import Link from 'next/link';
import Actual from './actual'
import SideNav from './componentes/sidenav';


export default function Home() {

  const fecha=new Date()
  const dia= `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} `

  return (
    <main className="flex min-h-screen gap-3 p-6 text-midnight p">   
    
      <div className="flex items-center grow text-xl rounded-lg bg-white/40 p-4 relative">
        <IoIosSunny className="size-9" />
        <Actual />
        
      </div>
    </main>
  );
}
