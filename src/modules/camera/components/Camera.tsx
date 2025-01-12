"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import PageWrapper from "@/components/common/PageWrapper";
import { Button } from "@/components/ui/button";
import Webcam from "react-webcam";

export default function Camera() {
  const router = useRouter();
  const webcamRef = useRef<Webcam>(null);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      localStorage.setItem("imagePreview", imageSrc);
      router.push("/detection");
    }
  };

  return (
    <>
      <PageHeader isBackButton title="Camera" />
      <PageWrapper className="min-h-screen">
        <div className="rounded-xl">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            height="auto"
            videoConstraints={{
              facingMode: "environment",
            }}
            mirrored={true}
            className="rounded-xl"
          />
          <div className="mt-4 flex justify-center gap-4 items-center">
            <Button
              variant="secondary"
              className="w-full max-w-32"
              onClick={() => router.back()}
            >
              Batal
            </Button>
            <Button className="w-full max-w-32" onClick={capture}>
              Ambil Gambar
            </Button>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
