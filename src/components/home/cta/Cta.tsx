import MainWrapper from "~/components/shared/general/MainWrapper";
import { buttonVariants } from "~/components/ui/button";
import Link from "next/link";

function Cta() {
  return (
    <section className="py-20">
      <MainWrapper className="bg-card rounded-2xl border p-8 text-center sm:p-12">
        <h2 className="relative z-10 mb-4 text-3xl font-bold">
          Ready to start your language journey?
        </h2>
        <p className="relative z-10 mx-auto mb-8 max-w-2xl">
          Join thousands of students who are improving their language skills
          every day.
        </p>
        <Link
          href="/sign-up"
          className={buttonVariants({ variant: "outline" })}
        >
          Register now
        </Link>
      </MainWrapper>
    </section>
  );
}
export default Cta;
