import Image from "next/image";
import Link from "next/link";

import type { Car } from "@/app/types/car";

type Props = {
  car: Car;
};

export default function Car({ car }: Props) {
  return (
    <article key={car.id} className="shadow-lg">
      <figure className="relative h-[200px] w-full">
        <Image fill={true} src="/images/carimage.jpg" alt="car image" />
      </figure>
      <div className="flex flex-col gap-4 p-4">
        <header>
          <p className="font-bold">{car.brand}</p>
        </header>
        <p>{car.title}</p>
        <footer className="flex justify-between">
          <p>carType: {car.vehicleType}</p>
          <Link
            href={`cars/${car.id}`}
            className="inline-block bg-yellow-500 px-4 py-2"
          >
            {car.link.title}
          </Link>
        </footer>
      </div>
    </article>
  );
}
