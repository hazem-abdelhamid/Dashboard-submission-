import TotalCampaignsSvg from "./ui/TotalCampaignsSvg";
const SingleCard = ({ title, count }: any) => {
  return (
    <div className="flex gap-4 bg-[#FFFFFF] px-[2.813rem] py-6 rounded-[0.625rem]">
      <span>
        <TotalCampaignsSvg />
      </span>
      <div className="flex flex-col  justify-center">
        <span className="text-[#808B8C] font-medium leading-[120%] tracking-normal">
          {title}
        </span>
        <span className="font-medium text-[2.063rem]">{count}</span>
      </div>
    </div>
  );
};

export default SingleCard;
