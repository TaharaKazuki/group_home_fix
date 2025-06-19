import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { LINKS } from '@/constant';

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-center py-14 ">
      <div className="flex flex-col items-center justify-center">
        <div className="h-28 w-48 bg-red-300" />
        {/* address */}
        <div className="mt-10 flex flex-col items-center text-xs">
          <p>〒123-1234 埼玉県草加市〇〇〇〇〇〇-1234567</p>
          <p>Tel. 090-0000-0000</p>
        </div>
        {/* social */}
        <ul className="mt-5 flex flex-row gap-3">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
        {/* links */}
        <ul className="flex flex-col gap-3 py-12 text-center lg:flex-row lg:gap-9 lg:py-16">
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <span className="relative cursor-pointer text-xs underline-offset-4 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-0 before:bg-red-300 before:transition-all before:duration-300 before:content-[''] hover:underline-offset-0 hover:before:w-full">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-[2vw] lg:text-[10px]">© 2024 IXIA group home</p>
      </div>
    </footer>
  );
};

export default Footer;
