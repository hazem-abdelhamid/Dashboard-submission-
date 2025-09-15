import CardsPanel from "@/components/CardsPanel";
import Header from "@/components/Header";
import TopCandidates from "@/components/TopCanditates";
// import SingleCard from "@/components/SingleCard";

export default function Home() {
  return (
    <section className="mt-[8rem] mx-[6.313rem] w-full">
      <Header />
      <CardsPanel />
      <TopCandidates />
    </section>
  );
}
