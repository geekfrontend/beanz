"use client";

import { usePathname } from "next/navigation";

import AppBar from "./AppBar";
import { Card } from "@/components/ui/card";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Card className="bg-card text-card-foreground shadow">
      <main>{children}</main>
      {pathname === "/" || pathname === "/about" ? <AppBar /> : null}
    </Card>
  );
};

export default Wrapper;
