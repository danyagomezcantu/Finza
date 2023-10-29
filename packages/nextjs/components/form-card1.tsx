import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const FormCard1: NextPage = () => {
  return (
    <form className="absolute top-[624px] left-[77px] w-[714px] h-[561px] flex flex-col items-start justify-start gap-[10px]">
      <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-button-large text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
        Tell us about yourself! This information is for us to get to know you
        better, and to calculate an accurate application score based on your
        profile. We won't store it or use it for other purposes.
      </b>
      <input
        className="font-components-button-large text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-gray-200"
        placeholder="Preferred name"
        type="text"
      />
      <TextField
        className="[border:none] bg-[transparent] self-stretch"
        color="primary"
        label="Country of residence"
        size="medium"
        placeholder="Share your response here"
        variant="outlined"
        type="text"
      />
      <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-button-large text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
        Application details
      </b>
      <TextField
        className="[border:none] bg-[transparent] self-stretch"
        color="primary"
        label="Introduce the amount requested for your participation in this event (in MATIC)"
        size="medium"
        placeholder="Remember: your response has to be in MATIC!"
        variant="outlined"
        type="number"
      />
      <TextField
        className="[border:none] bg-[transparent] self-stretch"
        color="primary"
        label="How would you use these resources?"
        size="medium"
        placeholder="Share your response here"
        variant="outlined"
        type="text"
      />
      <b className="relative text-base tracking-[0.15px] leading-[24px] flex font-components-button-large text-text-secondary text-left items-center w-[714px] h-[48.5px] shrink-0">
        I attest that the information presented is accurate.
      </b>
      <div className="relative rounded-3xs bg-steelblue-200 w-[564px] h-[83px] md:hidden">
        <b className="absolute top-[22.5px] left-[183px] text-13xl font-components-button-large text-studio-darkmode-allwhite-ffffff text-left">
          Get mortgage
        </b>
      </div>
    </form>
  );
};

export default FormCard1;
