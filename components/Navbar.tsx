import AlarmSvg from "./ui/AlarmSvg";
import ChevronDown from "./ui/ChevronDown";
import CircleSvg from "./ui/CircleSvg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm h-[5rem] border-b-[#E8E8E8] flex flex-row-reverse py-[0.656rem] px-[6.125rem]">
      <div className="flex flex-row-reverse items-center gap-5">
        <button className="flex">
          <span>عربي</span>
          <ChevronDown />
        </button>
        <button>
          <CircleSvg />
        </button>
        <button>
          <AlarmSvg />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
