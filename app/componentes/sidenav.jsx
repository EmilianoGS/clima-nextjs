import Link from 'next/link';
import NavLinks from './navLinks';

export default function SideNav() {
  return (
    <div className="flex h-full flex-row px-3 py-4 px-4">      
      <div className="flex grow flex-row items-center gap-2">
        <NavLinks />
      </div>
    </div>
  );
}
