import EquipmentSection from '@/components/sections/Equipment';
import { FeeItem } from '@/components/ui/feeItem';
import { FEE_ITEMS } from '@/constant';
import { formatYen } from '@/lib/format';

const EquipmentPage = () => {
  return (
    <main className="container mx-auto">
      <EquipmentSection />
      <div className="mt-3 flex flex-col justify-center pt-[10vw] lg:mt-0 lg:flex-row">
        <p className="w-[16vw] shrink-0 text-2xl font-semibold">
          Fees
          <span className="mt-2 block text-xs font-normal">料金詳細</span>
        </p>
        <div className="mt-3 w-full lg:mt-0">
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

      <div className="mt-6 rounded-lg border border-dashed border-red-300 p-3 shadow-md lg:p-10">
        <p className="font-bold lg:text-2xl">家賃補助の一例</p>
        <div className="mt-4 flex flex-row items-center gap-5">
          <span className="block text-xs lg:text-base">
            特定障がい者特別給付費支援対象者
          </span>
          <span className="block text-xs font-semibold lg:text-base">
            -{formatYen(10000)}円
          </span>
        </div>
        <div className="mt-4 flex flex-row gap-5">
          <span className="block text-xs lg:text-base">
            補助を受けた場合の合計負担額
          </span>
          <span className="block text-xs font-semibold lg:text-base">
            {`${formatYen(67500)}円〜${formatYen(71500)}円`}
          </span>
        </div>
      </div>
    </main>
  );
};

export default EquipmentPage;
