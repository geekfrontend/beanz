import React from "react";
import { Button } from "@/components/ui/button";

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
  if (!detectionResult) {
    return (
      <div className="text-center p-4">
        <p>No result to display.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Detection Result
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-700">Predicted Class:</h4>
          <p className="text-lg font-semibold text-green-600">
            {detectionResult.predicted_class_label}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-700">Prediction Confidence:</h4>
          <p className="text-sm text-gray-600">
            Arabica:{" "}
            <strong>{detectionResult.predictions[0][0].toFixed(4)}</strong>,
            Robusta:{" "}
            <strong>{detectionResult.predictions[0][1].toFixed(4)}</strong>
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-700">GLCM Features:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p>
                <strong>Contrast:</strong>{" "}
                {detectionResult.glcm_features.contrast.toFixed(2)}
              </p>
              <p>
                <strong>Correlation:</strong>{" "}
                {detectionResult.glcm_features.correlation.toFixed(2)}
              </p>
            </div>
            <div>
              <p>
                <strong>Dissimilarity:</strong>{" "}
                {detectionResult.glcm_features.dissimilarity.toFixed(2)}
              </p>
              <p>
                <strong>Energy:</strong>{" "}
                {detectionResult.glcm_features.energy.toFixed(2)}
              </p>
              <p>
                <strong>Homogeneity:</strong>{" "}
                {detectionResult.glcm_features.homogeneity.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button onClick={() => console.log("Detail button clicked")}>
            Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
