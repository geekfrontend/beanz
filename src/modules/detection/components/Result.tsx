import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type GLCMFeatures = {
  contrast: number;
  correlation: number;
  dissimilarity: number;
  energy: number;
  homogeneity: number;
};

type DetectionResult = {
  predicted_class_label: string;
  predicted_class_index: number;
  predictions: number[][];
  glcm_features: GLCMFeatures;
};

type ResultProps = {
  detectionResult: DetectionResult | null;
};

const Result: React.FC<ResultProps> = ({ detectionResult }) => {
  const router = useRouter();
  if (!detectionResult) {
    return (
      <div className="text-center p-4">
        <p>Tidak ada hasil deteksi.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Hasil Deteksi
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-700">Prediksi Class:</h4>
          <p className="text-lg font-semibold text-green-600">
            {detectionResult.predicted_class_label}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-700">Keyakinan Prediksi:</h4>
          <p className="text-sm text-gray-600">
            Arabika:{" "}
            <strong>{detectionResult.predictions[0][0].toFixed(4)}</strong>,
            Robusta:{" "}
            <strong>{detectionResult.predictions[0][1].toFixed(4)}</strong>
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            onClick={
              detectionResult.predicted_class_label === "Arabica"
                ? () => router.push("coffee/arabika")
                : () => router.push("coffee/robusta")
            }
          >
            Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
