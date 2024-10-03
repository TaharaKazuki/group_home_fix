'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constant';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 text-center capitalize">
      {NAV_LINKS.map((link, i) => (
        <Link
          href={link.href}
          key={i}
          className={`${pathname === link.href && 'border-b-2'}`}
        >
          {link.name}
          <span className="text-[10px]">{link.subText}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
