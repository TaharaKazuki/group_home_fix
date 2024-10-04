import { LINKS } from '@/constant';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-14 flex flex-row items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <div className="h-28 w-48 bg-red-300" />
        {/* address */}
        <div className="mt-10 flex flex-col items-center text-xs">
          <p>〒123-1234 埼玉県草加市〇〇〇〇〇〇-1234567</p>
          <p>Tel. 090-0000-0000</p>
        </div>
        {/* social */}
        <ul className="flex flex-row gap-3 mt-5">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
        {/* links */}
        <ul className="flex flex-row gap-9 py-16">
          {LINKS.map((link, i) => (
            <li key={i}>
              <span className="text-xs">{link.name}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs">© 2024 IXIA group home</p>
      </div>
    </footer>
  );
};

export default Footer;
