"use client";

import PageHeader from "@/components/common/PageHeader";
import PageWrapper from "@/components/common/PageWrapper";
import { getCoffeeByName, ICoffee } from "@/utils/data";
import { useEffect, useState } from "react";

export default function Coffee({ title }: { title: string }) {
  const [coffee, setCoffee] = useState<ICoffee | null>(null);

  useEffect(() => {
    const coffeeData = getCoffeeByName(title);
    if (coffeeData) {
      setCoffee(coffeeData);
    } else {
      setCoffee(null);
    }
  }, [title]);
  if (!coffee) {
    return (
      <PageWrapper className="min-h-screen flex items-center justify-center">
        <p>Memuat...</p>
      </PageWrapper>
    );
  }

  return (
    <>
      <PageHeader isBackButton title={title.toLocaleUpperCase()} />
      <PageWrapper className="min-h-screen px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-700 dark:text-white mb-6 text-justify">
            {coffee.description}
          </p>
          <h2 className="text-xl font-semibold mb-3">Efek Samping</h2>
          <ul className="list-disc list-inside mb-6">
            {coffee.sideEffects.map((effect, index) => (
              <li key={index}>{effect}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-3">Resep</h2>
          <div className="space-y-6">
            {coffee.recipes.map((recipe, index) => (
              <div key={index} className="p-4 border rounded-md shadow-sm">
                <h3 className="text-lg font-medium mb-2">{recipe.name}</h3>
                <h4 className="font-semibold mb-1">Bahan-bahan:</h4>
                <ul className="list-disc list-inside mb-3">
                  {recipe.materials.map((material, idx) => (
                    <li key={idx}>{material}</li>
                  ))}
                </ul>
                <h4 className="font-semibold mb-1">Langkah-langkah:</h4>
                <ol className="list-decimal list-inside space-y-1">
                  {recipe.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
