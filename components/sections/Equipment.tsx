/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import { EQUIPMENT_ITEMS } from '@/constant';

const EquipmentSection = () => {
  return (
    <section className="pt-[10vw]">
      <p className="text-2xl font-semibold">
        設備
        <span className="mt-2 block text-base font-normal text-red-300">
          Equipments
        </span>
      </p>
      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        {EQUIPMENT_ITEMS.map((item, i) => (
          <div key={i}>
            <Image
              src={item.imageSrc}
              width={425}
              height={315}
              alt="sample"
              className="aspect-3/2 size-full object-cover"
            />
            <p className="mt-2 text-left text-sm lg:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipmentSection;
