export const vehicleTypes = ["PB", "SU"] as const;

export type VehicleType = (typeof vehicleTypes)[number];

export type Car = {
  id: string;
  link: {
    href: string;
    title: string;
  };
  title: string;
  brand: string;
  vehicleType: VehicleType;
};
