import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="sticky top-[0] left-[0.4px] bg-studio-darkmode-allwhite-ffffff w-full h-[93px] flex flex-row items-center justify-center py-[22px] px-20 box-border [background:white] text-left text-xl text-studio-darkmode-allwhite-ffffff font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="w-[1816px] h-[59px] flex flex-row items-center justify-between">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[207px] h-[46px] overflow-hidden shrink-0">
          <i className="absolute top-[0.1px] left-[46.6px] text-17xl inline-block font-bold font-components-button-large text-cornflowerblue-100 text-left w-[205px] h-[57px]">
            FINZA
          </i>
        </button>
        <div className="w-[158px] h-[26px] flex flex-row items-center justify-end sm:flex">
          <div className="rounded-3xs bg-cornflowerblue-100 w-[174px] h-[43px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 pr-0 pl-1.5 box-border relative md:hidden">
            <b className="absolute my-0 mx-[!important] top-[11px] left-[20px] inline-block z-[0]">
              Connect Wallet
            </b>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
