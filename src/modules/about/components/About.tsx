import PageHeader from "@/components/common/PageHeader";
import PageWrapper from "@/components/common/PageWrapper";

export default function About() {
  return (
    <>
      <PageHeader title="About" />
      <PageWrapper className="bg-background">
        <div>
          <div className="flex flex-col gap-4">
            <hr className="my-2" />
            <p className="text-justify mb-2">
              CofeeBeanz is a cutting-edge application designed to identify and
              classify various coffee bean types with just a photo
            </p>

            <h2 className="text-lg font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside mb-2">
              <li>
                Quick and accurate coffee bean identification using Machine
                Learning technology
              </li>
              <li>Detailed profiles for various coffee bean types</li>
              <li>User-friendly design</li>
            </ul>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
