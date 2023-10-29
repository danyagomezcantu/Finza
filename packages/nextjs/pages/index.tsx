import type { NextPage } from "next";
import Footer from "../components/footer";
import HomeownershipJourneyContainer from "../components/homeownership-journey-container";
import SectionForm from "../components/section-form";
import Header from "../components/header";

const Homepage: NextPage = () => {
  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full h-[1909px] text-center text-21xl text-black font-components-button-large">
      <Footer />
      <div className="absolute top-[93px] left-[calc(50%_-_960px)] w-[1920px] h-[1626px]">
        <HomeownershipJourneyContainer />
        <SectionForm />
        <div className="absolute top-[1232px] left-[calc(50%_-_864px)] leading-[48px] inline-block w-[1725px]">
          <p className="m-0">
            <span className="font-components-button-large">{`Experience a new era of home buying with `}</span>
            <i className="font-bold font-components-button-large">{`FINZA, `}</i>
            <span>
              your gateway to decentralized mortgages. Bridge the gap between
              crypto assets and real estate, ensuring a swift and secure journey
              to your dream home. We're redefining real estate financing by
              harnessing the power of blockchain technology for seamless
              transactions.
            </span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <i className="font-medium">
              Join us in shaping the future of homeownership!
            </i>
          </p>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Homepage;
