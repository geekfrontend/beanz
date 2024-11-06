"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface PageHeaderProps {
  title: string;
  isBackButton?: boolean;
}

const PageHeader = ({ title, isBackButton = false }: PageHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex gap-5 items-center pt-8 px-8 pb-16">
      {isBackButton && (
        <Button
          variant="default"
          className="absolut w-10 h-10 rounded-full p-2"
          onClick={() => router.back()}
        >
          <ArrowLeft size={30} strokeWidth={3} />
        </Button>
      )}
      <div className="flex-grow text-center font-bold">{title}</div>
    </div>
  );
};

export default PageHeader;
