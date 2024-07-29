import Link from 'next/link';
import NavLinks from './navLinks';
import {fecha, dia} from '../funciones/fechas'

export default function SideNav() {
  return (
    <div className="flex h-full flex-row px-3 py-4 px-4">      
      <div className="flex grow flex-row items-center gap-2">
        <NavLinks />
        <p className='text-[#4f5a6f] diaclima my-1 mx-3'>Buenos Aires, {dia()}, {fecha()}</p>
      </div>
    </div>
  );
}
