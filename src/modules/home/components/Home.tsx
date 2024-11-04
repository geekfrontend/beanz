"use client";

import { useState } from "react";
import Hero from "@/components/common/Hero";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [searcvhValue, setSearchValue] = useState("");

  return (
    <>
      <Hero onSearch={setSearchValue} />
      <Card className="p-6 bg-background -mt-8 pb-28 rounded-t-3xl min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="py-12 text-center text-2xl text-neutral-500">
          No coffee found
        </div>
      </Card>
    </>
  );
}
