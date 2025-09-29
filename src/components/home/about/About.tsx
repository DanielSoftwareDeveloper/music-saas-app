import MainWrapper from "~/components/shared/general/MainWrapper";

function About() {
  return (
    <section id="about" className="bg-card border-y py-20">
      <MainWrapper className="max-w-2xl">
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-medium">Why Choose Us?</h3>
          <p className="">
            <span className="text-emerald-300">AI-powered platform</span> that
            turns your ideas into original songs in seconds. Whether you&apos;re
            a content creator, streamer, student,
            <span className="text-purple-300">
              or just someone who loves experimenting with sound
            </span>
            , our mission is to give you the tools to create without limits. No
            studios, no expensive gear,{" "}
            <span className="text-orange-300">
              no music background required
            </span>
            , just your imagination and our AI.
          </p>
        </div>
      </MainWrapper>
    </section>
  );
}
export default About;
