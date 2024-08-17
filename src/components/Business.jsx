import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className="feature-card flex flex-row rounded-3xl p-6">
      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-dimBlue">
        <img src={icon} className="object-contain" />
      </div>
      <div className="ml-3 flex flex-1 flex-col">
        <h4 className="mb-1 font-poppins text-[18px] font-semibold leading-[23px] text-white">
          {title}
        </h4>
        <p className="mb-1 font-poppins text-[16px] font-normal leading-[24px] text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className="flex flex-col py-6 sm:py-16 md:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center space-y-10 md:items-start">
        <h2 className="w-full text-center font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px] md:text-left">
          You do the business, <br className="hidden sm:block" /> we’ll handle
          the money.
        </h2>
        <p className="max-w-[470px] text-center font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite md:text-left">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button />
      </div>

      {/* cards */}
      <div className="flex-center relative ml-0 mt-10 flex-1 flex-col md:ml-10 md:mt-0">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
