import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="padding-y flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col items-start justify-center px-6 sm:px-16 xl:px-0">
        {/* discount banner */}
        <div className="bg-discount-gradient mb-2 flex items-center rounded-lg px-4 py-[6px]">
          <img src={discount} />
          <p className="paragraph ml-2 uppercase">
            <span className="text-white">20%</span> discount for{" "}
            <span className="text-white">1 month</span> account
          </p>
        </div>
        
        {/* hero section texts */}
        <div className="flex w-full items-center justify-between">
          <h1 className="flex-1 text-center font-poppins text-[52px] font-semibold capitalize leading-[75px] text-white ss:text-[72px] ss:leading-[100px] md:text-left">
            the next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">generation</span>
          </h1>
          <div className="mr-0 hidden ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full text-center font-poppins text-[52px] font-semibold capitalize leading-[75px] text-white ss:text-[68px] ss:leading-[100px] md:text-left">
          payment method.
        </h1>

        <p className="paragraph mt-5 max-w-[483px] text-center md:text-left">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* robot image */}
      <div className="flex-center relative my-10 flex-1 md:my-0">
        <img
          src={robot}
          alt="billing"
          className="relative z-[5] h-full w-full"
        />

        {/* robot gradients */}
        <div className="pink__gradient absolute top-0 z-0 h-[40%] w-[40%]"></div>
        <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full"></div>
        <div className="blue__gradient absolute bottom-20 right-20 z-0 h-[5%] w-[50%]"></div>
      </div>

      <div className="flex-center ss:hidden">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
