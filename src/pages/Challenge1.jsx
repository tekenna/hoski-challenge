import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import PageTitle from "../common/components/PageTitle";
import Section1 from "../common/components/Section1";
import Section2 from "../common/components/Section2";
import SectionLayout from "../common/components/SectionLayout";
import Slider from "../common/components/Slider";
import { pageData } from "../constants/pageData";


const Challenge1 = () => {
  return (
    <div className="w-full h-full bg-[var(--app-bg)] min-h-screen ">
    <Header />

    <div className="mt-[56px]">
      <PageTitle />
    </div>

    <Section1 />

    <div className="flex flex-col gap-[39px]">
      {pageData?.map((data, n) => (
        <SectionLayout data={data} key={n} n={n} />
      ))}
    </div>

    <Section2 />

    <div className="w-full overflow-hidden max-w-screen sm:mb-[120px]">
      <div className="flex w-full justify-center px-[16px]">
        <div className="max-w-[1283px] overflow-visible w-full">
          <Slider />
        </div>
      </div>
    </div>

    <Footer />
  </div>
  )
}

export default Challenge1