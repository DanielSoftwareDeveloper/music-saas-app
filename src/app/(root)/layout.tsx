import Navbar from "~/components/shared/navbar/Navbar";
import Footer from "~/components/shared/footer/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
