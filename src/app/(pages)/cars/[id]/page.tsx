import { fetchCarById } from "@/app/services/cars";

type Props = {
  params: {
    id: string;
  };
};

export default async function CarDetailsPage({ params }: Props) {
  const car = await fetchCarById(params.id);

  return <h1>{car?.title}</h1>;
}
