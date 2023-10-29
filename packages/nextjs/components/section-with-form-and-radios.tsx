import type { NextPage } from "next";
import { Radio, FormControlLabel } from "@mui/material";

type SectionWithFormAndRadiosType = {
  cryptoAmount?: string;

  /** Action props */
  onConnectWalletButtonClick?: () => void;
};

const SectionWithFormAndRadios: NextPage<SectionWithFormAndRadiosType> = ({
  cryptoAmount,
  onConnectWalletButtonClick,
}) => {
  return (
    <div className="absolute top-[609px] left-[calc(50%_-_866px)] w-[1732px] h-[916px] overflow-hidden text-left text-13xl text-studio-darkmode-allwhite-ffffff font-components-button-large">
      <div className="absolute top-[36px] left-[calc(50%_+_282px)] w-[564px] h-[880px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[564px] h-[215px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-3xs bg-steelblue-200 w-[564px] h-[83px] overflow-hidden flex flex-row items-center justify-center py-0 pr-0 pl-1.5 box-border cursor-pointer md:hidden"
            onClick={onConnectWalletButtonClick}
          >
            <b className="absolute my-0 mx-[!important] top-[23px] left-[130px] inline-block z-[0]">
              Apply for a mortgage
            </b>
          </div>
          <div className="absolute top-[132px] left-[calc(50%_-_282px)] rounded-3xs bg-steelblue-200 w-[564px] h-[83px] md:hidden">
            <b className="absolute top-[23px] left-[99px]">
              Contact the seller’s agent
            </b>
          </div>
        </div>
        <div className="absolute top-[267px] left-[0px] w-[525px] h-[530px] text-17xl text-black">
          <div className="absolute top-[0px] left-[141px] text-29xl tracking-[0.15px] leading-[150%] font-semibold text-darkslategray">
            4302.20 ETH
          </div>
          <div className="absolute top-[310px] left-[0px] w-[524.5px] h-[58px] sm:w-[100%!important]">
            <FormControlLabel
              className="absolute top-[0px] left-[0px]"
              label="2"
              labelPlacement="end"
              control={<Radio color="primary" size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[0px] left-[120px]"
              label="3"
              labelPlacement="end"
              control={<Radio color="primary" checked size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[0px] left-[246px]"
              label="5"
              labelPlacement="end"
              control={<Radio color="primary" checked size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[0px] left-[372px]"
              label="10"
              labelPlacement="end"
              control={<Radio color="primary" checked size="medium" />}
            />
          </div>
          <div className="absolute top-[494px] left-[132px] text-29xl tracking-[0.15px] leading-[150%] font-semibold">
            {cryptoAmount}
          </div>
          <div className="absolute top-[162px] left-[0px] w-[524.5px] h-[58px] sm:w-[100%!important]">
            <FormControlLabel
              className="absolute top-[0px] left-[0px]"
              label="20%"
              labelPlacement="end"
              control={<Radio color="primary" size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[0px] left-[183px]"
              label="50%"
              labelPlacement="end"
              control={<Radio color="primary" checked size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[0px] left-[372px]"
              label="70%"
              labelPlacement="end"
              control={<Radio color="primary" checked size="medium" />}
            />
          </div>
          <div className="absolute top-[90px] left-[0px] tracking-[0.15px] leading-[150%]">
            If your downpayment is
          </div>
          <div className="absolute top-[238px] left-[0px] tracking-[0.15px] leading-[150%]">
            and you paid it in
          </div>
          <div className="absolute top-[386px] left-[0px] tracking-[0.15px] leading-[150%]">
            years, the total you’d pay is
          </div>
        </div>
      </div>
      <div className="absolute top-[36px] left-[0px] tracking-[0.13px] leading-[40px] text-black inline-block w-[1071px] h-[728px] text-29xl">
        <p className="m-0 font-medium">
          50 Pelican Circle, Inlet Beach, FL 32461, US
        </p>
        <p className="m-0 text-17xl">
          <span className="font-light">
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-light">
            <span>Property size: 5763 ft²</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-light">
            <span>Bedrooms: 8</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-light">
            <span>Bathrooms: 10</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-light">
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0 text-5xl">
          <span className="font-light">
            <span>
              Welcome to your dream coastal retreat! Nestled in a prestigious
              gated community with breathtaking views of the Gulf of Mexico,
              this magnificent home offers the epitome of luxury living. With 8
              bedrooms, 8 bathrooms, and 2 half baths, this expansive estate
              provides an abundance of space for family, friends, and guests.As
              you enter the property, you'll be greeted by lush landscaping that
              sets the tone for the elegance that awaits. The main house boasts
              a seamless blend of contemporary design and coastal charm, with
              soaring ceilings, large windows, and an open floor plan that
              allows natural light to flood every corner. The gourmet kitchen is
              a chef's delight, featuring top-of-the-line appliances, a spacious
              island, and ample storage.
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SectionWithFormAndRadios;
