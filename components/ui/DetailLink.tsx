import Link from 'next/link';

type DetailLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function DetailLink({
  href,
  children,
  className = '',
}: DetailLinkProps) {
  return (
    <Link
      href={href}
      className={`relative underline-offset-4 before:absolute before:bottom-[-4px] before:left-0 before:h-[2px] before:w-full before:bg-red-300 before:transition-none before:content-[''] hover:underline-offset-0 lg:transition-colors lg:duration-300 lg:before:w-0 lg:before:transition-all lg:before:duration-300 lg:hover:text-red-300 lg:hover:before:w-full ${className}`}
    >
      <span className="text-base">{children}</span>
    </Link>
  );
}
