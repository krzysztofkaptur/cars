import CarsList from "@/app/components/CarsList";
import { fetchCars } from "@/app/services/cars";

export const vehicleType = ["PB", "SU"] as const;

export type VehicleType = (typeof vehicleType)[number];

export default async function Home() {
  const cars = await fetchCars();

  return (
    <main className="m-auto max-w-screen-lg p-8">
      <section className="align-center width m-auto mb-4 flex max-w-screen-md flex-col">
        <h1 className="text-center text-4xl">Text lorem ipsum</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, iure
          quidem molestiae aperiam accusamus officiis nemo, quisquam quasi
          omnis, rerum libero maxime deleniti nisi sequi. Eligendi aliquam
          obcaecati aut voluptate atque saepe, deleniti et provident voluptates
          totam beatae culpa repudiandae sapiente nisi assumenda accusamus
          voluptatibus!
        </p>
      </section>

      <CarsList cars={cars} />
    </main>
  );
}
