import SingleCandidate from "./SingleCandidate";

const TopCandidates = () => {
  return (
    <section>
      <div className="bg-[#E0ECFF] p-5 mt-12 rounded-xl">
        <h1 className="font-bold text-2xl leading-[120%] tracking-normal">
          قائمة أفضل المرشحين للنصف الاول من السنه
        </h1>
        <div className="mt-6 flex flex-col gap-2">
          <SingleCandidate />
          <SingleCandidate />
          <SingleCandidate />
        </div>
      </div>
    </section>
  );
};

export default TopCandidates;
