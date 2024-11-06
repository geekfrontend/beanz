"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import PageWrapper from "@/components/common/PageWrapper";
import { Button } from "@/components/ui/button";

export default function Detection() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("imagePreview");
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    } else {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <PageHeader isBackButton title="Detection" />
      <PageWrapper>
        <div className="flex flex-col gap-y-4">
          {imageUrl ? (
            <div className="">
              <img src={imageUrl} alt="Selected file" className="w-full h-72" />
            </div>
          ) : (
            <p>No image selected</p>
          )}
          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={() => router.push("/")}>
              Kembali
            </Button>
            <Button
              variant="default"
              onClick={() => console.log("Detection button clicked")}
            >
              Deteksi
            </Button>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
