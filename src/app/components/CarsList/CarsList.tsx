"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import CarComp from "@/app/components/Car";
import Select from "@/app/components/Select";

import type { Car } from "@/app/types/car";

type Props = {
  cars: Car[];
};

export default function CarsList({ cars }: Props) {
  const { filteredCars, setFilteredCars } = useFilterCars(cars);

  const handleSelectType = (value: string) => {
    return value !== ""
      ? setFilteredCars(cars.filter((car) => car.vehicleType === value))
      : setFilteredCars(cars);
  };

  return (
    <>
      {cars.length ? (
        <section className="flex flex-col gap-8">
          <div>
            <Select onChange={handleSelectType} />
          </div>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredCars?.map((car) => <CarComp key={car.id} car={car} />)}
          </section>
        </section>
      ) : (
        <>
          <p className="text-center">
            <strong>
              No cars available. Make sure to run &quot;npm run app:dev&quot;
              and check if server is up on port 5000.
            </strong>
          </p>
          <p className="text-center">
            <a
              href={`${process.env.NEXT_PUBLIC_API_URL}/cars`}
              target="_blank"
              className="text-blue-700"
            >
              Server test
            </a>
          </p>
        </>
      )}
    </>
  );
}

function useFilterCars(cars: Car[]) {
  const [filteredCars, setFilteredCars] = useState(cars || []);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("filter")) {
      setFilteredCars(
        cars.filter((car) => car.vehicleType === params.get("filter")),
      );
    } else {
      setFilteredCars(cars);
    }
  }, [cars, searchParams, setFilteredCars]);

  return {
    filteredCars,
    setFilteredCars,
  };
}
