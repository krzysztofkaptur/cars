"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import type { ChangeEvent } from "react";

type Props = {
  onChange: (value: string) => void;
};

const vehicleTypes = ["PB", "SU"];

export default function Select({ onChange }: Props) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChange(value);

    if (!value) {
      params.delete("filter");
    } else {
      params.set("filter", value);
    }

    router.push(`${pathname}?${params}`);
  };

  return (
    <select
      name="filter"
      value={params.get("filter") || ""}
      onChange={handleChange}
      className="w-auto w-fit border"
    >
      <option value="">--Select filter--</option>
      {vehicleTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
