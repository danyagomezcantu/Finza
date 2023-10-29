import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const SectionForm: NextPage = () => {
  const router = useRouter();

  const onMoreDetailsButtonClick = useCallback(() => {
    router.push("/description202");
  }, [router]);

  return (
    <div className="absolute top-[632px] left-[calc(50%_-_885px)] w-[1771px] h-[539px] overflow-hidden text-left text-base text-darkslategray font-components-button-large">
      <div className="absolute top-[calc(50%_-_155.5px)] left-[0px] w-[1771px] h-[425px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-3/12 h-[421px] flex flex-row items-start justify-center py-0 px-3 box-border md:w-[33.33%] sm:w-full">
          <div className="self-stretch flex-1 rounded-3xs bg-studio-darkmode-allwhite-ffffff box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/matterhorn-suites-image@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                  50 Pelican Circle, Inlet Beach, FL 32461, US
                </div>
                <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
                  4302.20 ETH
                </b>
                <div className="self-stretch relative text-lg tracking-[0.04em]">
                  Single family home, Residential
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]"
              onClick={onMoreDetailsButtonClick}
            >
              <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                APPLY FOR MORTGAGE
              </div>
            </button>
          </div>
        </div>
        <div className="absolute top-[4px] left-[608px] w-3/12 h-[421px] flex flex-row items-start justify-center py-0 px-3 box-border md:w-[33.33%] sm:w-full">
          <div className="self-stretch flex-1 rounded-3xs bg-studio-darkmode-allwhite-ffffff box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/matterhorn-suites-image1@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                  60 Harris Lee Court, Santa Rosa Beach, FL 32459, US
                </div>
                <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
                  6101.81 ETH
                </b>
                <div className="self-stretch relative text-lg tracking-[0.04em]">
                  Single family home, Residential
                </div>
              </div>
            </div>
            <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
              <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                APPLY FOR MORTGAGE
              </div>
            </button>
          </div>
        </div>
        <div className="absolute top-[0px] left-[1216px] w-3/12 h-[421px] flex flex-row items-start justify-center py-0 px-3 box-border md:w-[33.33%] sm:w-full">
          <div className="self-stretch flex-1 rounded-3xs bg-studio-darkmode-allwhite-ffffff box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/matterhorn-suites-image2@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                  110 Little John Ln, Starkville, MS 39759, US
                </div>
                <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
                  362.73 ETH
                </b>
                <div className="self-stretch relative text-lg tracking-[0.04em]">
                  Single family home
                </div>
              </div>
            </div>
            <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
              <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                APPLY FOR MORTGAGE
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-[36px] left-[25px] text-29xl tracking-[0.13px] leading-[28.16px] font-medium text-black">
        Get started with listings
      </div>
    </div>
  );
};

export default SectionForm;
