import { cn } from '@/lib/utils';

type FeeItemProps = {
  title: string;
  description: string;
  subDescription?: string;
};

export const FeeItem = ({
  title,
  description,
  subDescription,
}: FeeItemProps) => (
  <dl
    className={cn(
      'flex lg:gap-8 flex-col lg:flex-row lg:border-none border-t border-dotted py-6 lg:py-0'
    )}
  >
    <dt
      className={cn(
        'flex-shrink lg:w-[12vw] items-center lg:py-8 border-red-300 lg:border-t border-dotted w-full text-sm lg:text-base'
      )}
    >
      {title}
    </dt>
    <dd
      className={cn(
        'w-full items-center lg:py-8 border-red-300 lg:border-t border-dotted mt-4 lg:mt-0 text-xs lg:text-base'
      )}
    >
      {description}
      {subDescription && (
        <span className="mt-1 block text-xs lg:mt-3">{subDescription}</span>
      )}
    </dd>
  </dl>
);
