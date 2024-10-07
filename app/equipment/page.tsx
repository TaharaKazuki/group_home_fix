import ScheduleSection from '@/components/sections/Schedule';
import { FeeItem } from '@/components/ui/feeItem';
import { FEE_ITEMS } from '@/constant';
import { div, span, main } from 'framer-motion/client';

const EquipmentPage = () => {
  return (
    <main className="container mx-auto">
      <ScheduleSection />
      <div className="container mx-auto flex flex-row justify-center pt-[10vw]">
        <div className="flex-shrink-0 w-[16vw] font-semibold">
          Fee
          <span className="block text-xs font-normal">料金</span>
        </div>
        <div className="w-full">
          {FEE_ITEMS.map((item, i) => (
            <FeeItem
              key={i}
              title={item.title}
              description={item.desc}
              subDescription={item.subDesc}
            />
          ))}
        </div>
      </div>

      <div className="border border-red-300 p-10 rounded-lg mt-6 bg-red-300 text-white shadow-md">
        <p className="text-2xl font-bold">家賃補助の一例</p>
        <div className="flex flex-row mt-4 gap-5">
          <span className="block">特定障がい者特別給付費支援対象者</span>
          <span className="block font-semibold">-10,000円</span>
        </div>
        <div className="flex flex-row mt-4 gap-5">
          <span className="block">補助を受けた場合の合計負担額</span>
          <span className="block font-semibold">67,500円〜71,500円</span>
        </div>
      </div>
    </main>
  );
};

export default EquipmentPage;
