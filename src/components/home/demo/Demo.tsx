import MainWrapper from "~/components/shared/general/MainWrapper";
import Image from "next/image";

function Demo() {
  return (
    <section id="demo" className="relative -mt-24 pb-4">
      <div className="bg-card absolute inset-x-0 top-12 bottom-12 border-y lg:top-24 lg:bottom-24" />
      <div className="relative mx-auto">
        <MainWrapper className="w-[80%] max-w-[1000px]">
          <div className="bg-card -m-2 rounded-xl border p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src="/demo.png"
              alt="rf"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-full w-full rounded-lg"
            />
          </div>
        </MainWrapper>
      </div>
    </section>
  );
}
export default Demo;
