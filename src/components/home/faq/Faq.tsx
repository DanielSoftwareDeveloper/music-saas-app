import MainWrapper from "~/components/shared/general/MainWrapper";
import SectionTitle from "~/components/shared/general/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

function Faq() {
  return (
    <section id="faq" className="bg-card border-y py-20">
      <MainWrapper className="max-w-[800px]">
        <SectionTitle title="Frecuently Asked Questions" />
        <div className="grid grid-cols-1 rounded-xl border px-6 py-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1 ">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </MainWrapper>
    </section>
  );
}
export default Faq;
