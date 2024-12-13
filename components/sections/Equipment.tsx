/* eslint-disable @next/next/no-img-element */
import { EQUIPMENT_ITEMS } from '@/constant';

const EquipmentSection = () => {
  return (
    <section className="pt-[10vw]">
      <p className="font-semibold text-2xl">
        設備
        <span className="block text-base font-normal mt-2 text-red-300">
          Equipments
        </span>
      </p>
      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        {EQUIPMENT_ITEMS.map((item, i) => (
          <div key={i}>
            <img
              src={item.imageSrc}
              alt="sample"
              className="size-full object-cover aspect-3/2"
            />
            <p className="lg:text-base text-sm text-left mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipmentSection;
