import type { NextPage } from "next";

const HomeownershipJourneyContainer: NextPage = () => {
  return (
    <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-mini bg-gray-400 shadow-[0px_3px_5px_-1px_rgba(0,_0,_0,_0.2),_0px_6px_10px_rgba(0,_0,_0,_0.14)] h-[602px] overflow-hidden text-left text-21xl text-black font-components-button-large">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
        <img
          className="absolute h-full top-[0%] bottom-[0%] left-[0px] max-h-full w-[4200px] object-cover opacity-[0.35]"
          alt=""
          src="/divjss76@2x.png"
        />
      </div>
      <img
        className="absolute h-full w-[48.91%] top-[0%] right-[25.16%] bottom-[0%] left-[25.94%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/divjss74@2x.png"
      />
      <div className="absolute top-[221px] left-[1285px] leading-[40px] flex items-center w-[489px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">Unlock Your Homeownership Journey</p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0">
            <b>Secure, Simple, and Smart</b>
          </p>
        </span>
      </div>
      <div className="absolute top-[221px] left-[100px] leading-[40px] text-gray-300 flex items-center w-[582px] h-[159px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">
            <span className="font-medium">{`Welcome to `}</span>
            <i className="font-bold font-components-button-large">FINZA</i>
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0">
            Where Your Dream Home Meets Crypto-Backed Mortgages
          </p>
        </span>
      </div>
    </div>
  );
};

export default HomeownershipJourneyContainer;
