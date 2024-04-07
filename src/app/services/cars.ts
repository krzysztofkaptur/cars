import { Car } from "@/app/types/car";

export async function fetchCars() {
  try {
    const carsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`);
    const cars: Car[] = await carsResponse.json();

    return cars;
  } catch (err) {
    // handle error
    return [];
  }
}

export async function fetchCarById(id: string) {
  try {
    const carResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
    );
    const car: Car = await carResponse.json();

    return car;
  } catch (err) {
    // handle error
    return {
      id: "string",
      link: {
        href: "string",
        title: "string",
      },
      title: "",
      brand: "",
      vehicleType: "",
    };
  }
}
