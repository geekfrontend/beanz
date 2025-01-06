import Wrapper from "@/components/common/Wrapper";
import Coffee from "@/modules/coffee/components/Coffee";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <>
      <Wrapper>
        <Coffee title={slug} />
      </Wrapper>
    </>
  );
}
