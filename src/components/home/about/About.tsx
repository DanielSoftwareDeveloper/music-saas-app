import MainWrapper from "~/components/shared/general/MainWrapper";

function About() {
  return (
    <section id="about" className="bg-card border-y py-20">
      <MainWrapper className="max-w-2xl">
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-medium">Why Choose Us?</h3>
          <p className="">
            AI-powered platform that turns your ideas into original songs in
            seconds. Whether you’re a content creator, streamer, student, or
            just someone who loves experimenting with sound, our mission is to
            give you the tools to create without limits. No studios, no
            expensive gear, no music background required, just your imagination
            and our AI.
          </p>
        </div>
      </MainWrapper>
    </section>
  );
}
export default About;
