/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import PageHeader from "@/components/common/PageHeader";
import PageWrapper from "@/components/common/PageWrapper";
import { Button } from "@/components/ui/button";
import Result from "./Result";

interface GLCMFeatures {
  contrast: number;
  correlation: number;
  dissimilarity: number;
  energy: number;
  homogeneity: number;
}

interface Prediction {
  predicted_class_index: number;
  predicted_class_label: string;
  predictions: number[][];
  glcm_features: GLCMFeatures;
}

export default function Detection() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [detectionResult, setDetectionResult] = useState<Prediction | null>(
    null
  );

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("imagePreview");
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    } else {
      router.push("/");
    }
  }, [router]);

  const handleDetection = async () => {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://192.168.18.234:8080/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setDetectionResult(res.data);
    } catch (error) {
      console.error("Error detecting image:", error);
    }
  };

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
            <p>Tidak ada gambar</p>
          )}
          {detectionResult && <Result detectionResult={detectionResult} />}

          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={() => router.push("/")}>
              Kembali
            </Button>
            <Button variant="default" onClick={handleDetection}>
              Deteksi
            </Button>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
