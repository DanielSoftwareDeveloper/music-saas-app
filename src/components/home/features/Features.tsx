import MainWrapper from "~/components/shared/general/MainWrapper";
import SectionTitle from "~/components/shared/general/SectionTitle";
import { featuresList } from "./features-list.data";
import FeatureItem from "./FeatureItem";

function About() {
  return (
    <section id="features" className="py-20">
      <MainWrapper>
        <SectionTitle title="Features" />
        <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {featuresList.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              color={feature.color}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </MainWrapper>
    </section>
  );
}
export default About;
