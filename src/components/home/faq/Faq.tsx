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
        <SectionTitle title="Frequently Asked Questions" />
        <div className="grid grid-cols-1 rounded-xl border px-6 py-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I use the songs on YouTube, Twitch, or other platforms?
              </AccordionTrigger>
              <AccordionContent>
                Yes! All songs generated with our AI are copyright-free, so you
                can use them in videos, streams, podcasts, or any personal or
                commercial projects without worrying about copyright issues.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do I need music knowledge to create songs?
              </AccordionTrigger>
              <AccordionContent>
                Not at all. You just provide a prompt or description of what you
                want, and our AI will generate a song for you. No prior music
                skills are required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What happens if I run out of credits?
              </AccordionTrigger>
              <AccordionContent>
                When you run out of credits, you can either wait for your
                monthly reset or purchase additional credits to continue
                generating songs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                How long does it take to generate a song?
              </AccordionTrigger>
              <AccordionContent>
                Most songs are generated within seconds to a couple of minutes,
                depending on the length and complexity of your prompt.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I customize the genre or mood of the songs?
              </AccordionTrigger>
              <AccordionContent>
                Yes! You can specify the genre, mood, tempo, and even style of
                your song to match your vision.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I use the songs commercially?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. All songs generated are yours to use freely for
                personal or commercial projects.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </MainWrapper>
    </section>
  );
}
export default Faq;
