import ScheduleSection from '@/components/sections/Schedule';
import { FeeItem } from '@/components/ui/feeItem';
import { FEE_ITEMS } from '@/constant';
import { formatYen } from '@/lib/format';

const EquipmentPage = () => {
  return (
    <main className="container mx-auto">
      <ScheduleSection />
      <div className="flex lg:flex-row flex-col justify-center pt-[10vw]">
        <div className="flex-shrink-0 w-[16vw] font-semibold text-2xl">
          Fees
          <span className="block text-xs font-normal mt-2">料金詳細</span>
        </div>
        <div className="w-full mt-3 lg:mt-0">
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

      <div className="border border-red-300 border-dashed lg:p-10 p-3 rounded-lg mt-6 shadow-md">
        <p className="lg:text-2xl font-bold">家賃補助の一例</p>
        <div className="flex flex-row mt-4 gap-5 items-center">
          <span className="block lg:text-base text-xs">
            特定障がい者特別給付費支援対象者
          </span>
          <span className="block font-semibold text-xs lg:text-base">
            -{formatYen(10000)}円
          </span>
        </div>
        <div className="flex flex-row mt-4 gap-5">
          <span className="block lg:text-base text-xs">
            補助を受けた場合の合計負担額
          </span>
          <span className="block font-semibold text-xs lg:text-base">
            {`${formatYen(67500)}円〜${formatYen(71500)}円`}
          </span>
        </div>
      </div>
    </main>
  );
};

export default EquipmentPage;
