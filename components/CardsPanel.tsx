import SingleCard from "./SingleCard";
const CardsPanel = () => {
  return (
    <div className="flex justify-between mt-[3rem] gap-[1.125rem]">
      {/* start of single card */}
      <SingleCard title="اجمالي الحملات" count="50" />
      <SingleCard title="اجمالي المرشحين" count="50" />
      <SingleCard title="الحملات النشطة" count="50" />
    </div>
  );
};

export default CardsPanel;
