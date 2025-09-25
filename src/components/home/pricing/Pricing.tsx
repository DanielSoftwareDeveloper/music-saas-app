import MainWrapper from "~/components/shared/general/MainWrapper";
import SectionTitle from "~/components/shared/general/SectionTitle";
import { pricingList } from "./pricing-list";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section id="price" className="py-20">
      <MainWrapper>
        <SectionTitle title="Pricing" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pricingList.map((item) => (
            <PricingCard
              key={item.id}
              plan={item.plan}
              icon={item.icon}
              price={item.price}
              features={item.features}
              ctaLabel={item.ctaLabel}
              ctaColor={item.ctaColor}
            />
          ))}
        </div>
      </MainWrapper>
    </section>
  );
}
export default Pricing;
