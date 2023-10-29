import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import SectionWithFormAndRadios from "../components/section-with-form-and-radios";
import Header from "../components/header";

const Description202: NextPage = () => {
  const router = useRouter();

  const onConnectWalletButtonClick = useCallback(() => {
    router.push("/questionnaire");
  }, [router]);

  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full h-[1809px]">
      <Footer footerTop="1620px" />
      <div className="absolute top-[93px] left-[calc(50%_-_960px)] w-[1920px] h-[1527px]">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-mini bg-gray-400 shadow-[0px_3px_5px_-1px_rgba(0,_0,_0,_0.2),_0px_6px_10px_rgba(0,_0,_0,_0.14)] h-[550px] overflow-hidden">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover opacity-[0.75]"
            alt=""
            src="/divjss78@2x.png"
          />
        </div>
        <SectionWithFormAndRadios
          cryptoAmount="4897.24 ETH"
          onConnectWalletButtonClick={onConnectWalletButtonClick}
        />
      </div>
      <Header />
    </div>
  );
};

export default Description202;
