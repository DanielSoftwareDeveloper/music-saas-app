import MainWrapper from "~/components/shared/general/MainWrapper";

function About() {
  return (
    <section id="about" className="bg-card border-y py-20">
      <MainWrapper className="max-w-2xl">
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-medium">Why Choose Us?</h3>
          <p className="">
            Our app combines{" "}
            <span className="text-purple-200">
              Advanced Artificial Intelligence{" "}
            </span>
            with {""}
            <span className="text-teal-200">hyper-realistic voices</span> to
            deliver unparalleled language immersion. You won’t just learn
            grammar or vocabulary—you’ll engage with dialogues that replicate{" "}
            <span className="text-rose-200">real-life conversations</span>,
            tailored to your level and goals, thanks to an algorithm that
            evolves with you.
          </p>
        </div>
      </MainWrapper>
    </section>
  );
}
export default About;
