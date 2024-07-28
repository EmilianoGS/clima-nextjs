'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    UserGroupIcon,
    HomeIcon,
    CalendarIcon,
    ClockIcon,
  } from '@heroicons/react/24/outline';
import clsx from 'clsx'

const links = [
  { name: 'Inicio', href: '/', icon: HomeIcon },
  { name: 'Por horas', href:'/horas/hoy',  icon: ClockIcon},
  { name: 'Próximos días', href:'/dias',  icon: CalendarIcon}
];

export default function NavLinks() {
  const pathname=usePathname();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const linkStyle= clsx("flex h-[48px] grow text-metal items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{'bg-sky-100 text-blue-600': pathname === link.href});

        return (
          <Link
            key={link.name}
            href={link.href}
            className={linkStyle}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
