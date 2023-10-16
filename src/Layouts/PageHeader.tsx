import { BsYoutube, BsFillMicFill } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { RiVideoUploadLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div
      className="flex gap-10 lg:gap-20 justify-between pt-2 
    mb-6 mx-4"
    >
      {/* for menu button and logo */}
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      {/* search bar */}
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            className="flex-shrink-0"
            type="button"
            size={"icon"}
            variant={"ghost"}
            onClick={() => setShowFullWidthSearch(false)}
          >
            <FiArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border
          shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <IoIosSearch />
          </Button>
        </div>
        <Button type="button" size={"icon"} className="flex-shrink-0">
          <BsFillMicFill />
        </Button>
      </form>
      {/* other icons */}
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        } `}
      >
        <Button
          variant={"ghost"}
          size={"icon"}
          className="md:hidden"
          onClick={() => setShowFullWidthSearch(true)}
        >
          <IoIosSearch size={30} />
        </Button>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <BsFillMicFill />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <RiVideoUploadLine />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <AiOutlineBell />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <BiUserCircle />
        </Button>
      </div>
    </div>
  );
};

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      } `}
    >
      <Button variant={"ghost"} size={"icon"} onClick={toggle}>
        <FcMenu size={30} />
      </Button>
      <a href="/" className="flex items-center gap-1">
        <BsYoutube size={35} className="text-red-600" />
        <h1 className="font-bold lg:text-lg text-sm">YouTube Clone</h1>
      </a>
    </div>
  );
}
