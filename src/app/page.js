import ChooseDesign from "./component/Home/ChooseDesign/ChooseDesign";
import HeroSection from "./component/HeroSection/HeroSection";
import "@/app/assets/css/commonStyle.css";
import KnowYourAudience from "./component/Home/knowYourAudience/knowYourAudience";
import FreeDomain from "./component/Home/freeDomain/freeDomain";
import EarnMoney from "./component/Home/earnMoney/earnMoney";
import Memories from "./component/Home/Memories/Memories";
import Millions from "./component/Home/Millions/Millions";
import FrontendLayout from "./layout/FrontendLayout";

export default function Home() {
  return (
    <>
      <div className="homeLayout">
        <FrontendLayout>
          <div className="mainContent">
            <HeroSection />
            <ChooseDesign />
            <FreeDomain />
            <EarnMoney />
            <KnowYourAudience />
            <Memories />
            <Millions />
          </div>
        </FrontendLayout>
      </div>
    </>
  );
}
