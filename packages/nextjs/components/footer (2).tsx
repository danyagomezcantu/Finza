import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FooterType = {
  /** Style props */
  footerTop?: CSSProperties["top"];
};

const Footer: NextPage<FooterType> = ({ footerTop }) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: footerTop,
    };
  }, [footerTop]);

  return (
    <div
      className="absolute top-[1719px] left-[1px] w-[1920px] h-[190px] flex flex-col items-start justify-start"
      style={footerStyle}
    >
      <div className="self-stretch h-[190px] flex flex-col items-start justify-start">
        <footer className="self-stretch bg-steelblue-100 h-[190px] flex flex-row items-start justify-start py-[33px] px-[84px] box-border gap-[44px] text-left text-lg text-studio-darkmode-allwhite-ffffff font-components-button-large lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[207px] h-[47px] overflow-hidden shrink-0">
              <i className="absolute top-[1px] left-[0px] text-17xl inline-block font-bold font-roboto-mono text-studio-darkmode-allwhite-ffffff text-left w-[205px] h-8">
                FINZA
              </i>
            </button>
            <div className="self-stretch relative leading-[27px]">
              <span>{`Where Your Dream Home Meets Crypto-Backed Mortgages. Simplify your Mortgage Journey. `}</span>
              <b>Secure, Simple, and Smart.</b>
            </div>
          </div>
          <div className="w-[405px] flex flex-row items-start justify-between text-base font-inter sm:flex-col">
            <div className="relative w-[174.7px] h-[97.8px] sm:mb-[40px!important]">
              <div className="absolute top-[47.8px] left-[0px] inline-block w-[135.7px]">
                About Us
              </div>
              <div className="absolute top-[0px] left-[0px] text-5xl leading-[27px] font-medium font-inconsolata inline-block w-[174.7px]">
                Company
              </div>
              <div className="absolute top-[78.8px] left-[0px] inline-block w-[84.3px]">
                News
              </div>
            </div>
            <div className="relative w-[197.3px] h-[97.8px] sm:mb-[40px!important]">
              <div className="absolute top-[47.8px] left-[0px] inline-block w-[109.6px]">
                Account
              </div>
              <div className="absolute top-[0px] left-[0px] text-5xl leading-[27px] font-medium font-inconsolata inline-block w-[131.6px]">
                Support
              </div>
              <div className="absolute top-[78.8px] left-[0px] inline-block w-[197.3px]">
                Support Center
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
