import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex flex-col-reverse overflow-hidden py-6 sm:py-16 md:flex-row"
    >
      <div className="flex-center mr-0 mt-10 flex-1 md:mr-10 md:mt-0">
        <img src={bill} alt="Billing" className="relative z-10" />

        {/* gradients */}
        <div
          className="absolute left-[69.97px] top-[2231.45px] hidden h-[514px] w-[345px] rotate-[156.61deg] transform rounded-[450px] blur-[450px] sm:block"
          style={{
            background: "linear-gradient(90deg, #F4C4F3 0%, #FC67FA 100%)",
          }}
        ></div>
        <div
          className="absolute -left-[127.3px] top-[1380.3px] hidden h-[615.14px] w-[482.59px] rotate-[109.25deg] transform rounded-[200px] blur-[325px] sm:block"
          style={{
            background: "linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)",
          }}
        ></div>
        <div
          className="absolute left-[43.93px] top-[1892.44px] hidden h-[471px] w-[405px] rotate-[176.62deg] transform blur-[375px] sm:block"
          style={{
            background: "rgba(255, 255, 255, 0.6)",
          }}
        ></div>
      </div>

      <div className="flex-start flex-1 flex-col gap-8">
        <h2 className="heading2 text-center md:text-left">
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className="paragraph max-w-[470px] text-center md:text-left">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex gap-10">
          <img
            src={apple}
            alt="App store"
            className="cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="App store"
            className="cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
