"use client";

import { useRouter } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import PageWrapper from "@/components/common/PageWrapper";
import { Button } from "@/components/ui/button";
import Webcam from 'react-webcam'

export default function Camera() {
  const { back } = useRouter()
  return (
    <>
      <PageHeader isBackButton title="Camera" />
      <PageWrapper className="min-h-screen">
        <div className="rounded-xl">
          <Webcam mirrored={true}  className="rounded-xl"/>
         <div className="mt-4 flex justify-center gap-4 items-center">
          <Button variant="secondary" className="w-full max-w-32" onClick={() => back()}>Cancel</Button>
          <Button className="w-full max-w-32">Take a Photo</Button>
         </div>
        </div>
      </PageWrapper>
    </>
  );
}
