import { cn } from '@/lib/utils';

type FeeItemProps = {
  title: string;
  description: string;
  subDescription?: string;
  isLast?: boolean;
};

export const FeeItem = ({
  title,
  description,
  subDescription,
  isLast,
}: FeeItemProps) => (
  <dl className={cn('flex gap-8')}>
    <dt
      className={cn(
        'flex-shrink w-[12vw] items-center py-8 border-gray-300 border-t border-dotted',
        isLast && 'border-b'
      )}
    >
      {title}
    </dt>
    <dd
      className={cn(
        'w-full items-center py-8 border-gray-300 border-t border-dotted',
        isLast && 'border-b'
      )}
    >
      {description}
      {subDescription && (
        <span className="block text-xs mt-3">{subDescription}</span>
      )}
    </dd>
  </dl>
);
