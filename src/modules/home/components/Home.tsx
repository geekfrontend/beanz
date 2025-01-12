"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/common/Hero";
import { Card } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Skeleton } from "@/components/ui/skeleton";

const coffees = [
  { id: 1, name: "Arabika" },
  { id: 2, name: "Robusta" },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredCoffees, setFilteredCoffees] = useState(coffees);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = coffees.filter((coffee) =>
        coffee.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCoffees(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <>
      <Hero onSearch={setSearchValue} />
      <Card className="p-6 bg-background -mt-8 pb-28 rounded-t-3xl min-h-screen">
        {isLoading ? (
          <div className="text-center flex flex-col gap-4 ">
            <Skeleton className="h-[50px] w-full rounded-xl" />
            <Skeleton className="h-[50px] w-full rounded-xl" />
            <Skeleton className="h-[50px] w-full rounded-xl" />
          </div>
        ) : filteredCoffees.length === 0 ? (
          <div className="text-center text-2xl text-neutral-500">
            Tidak ada hasil pencarian
          </div>
        ) : (
          <div className="text-center flex flex-col gap-4 ">
            {filteredCoffees.map((coffee) => (
              <MagicCard
                key={coffee.id}
                className="cursor-pointer items-center py-2 px-4  shadow-2xl whitespace-nowrap"
                gradientColor={"#D9D9D955"}
              >
                <h3 className="text-2xl text-left font-semibold">
                  {coffee.name}
                </h3>
              </MagicCard>
            ))}
          </div>
        )}
      </Card>
    </>
  );
}
