import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex flex-col py-6 sm:py-16 md:flex-row">
      <div className="flex-start flex-1 flex-col">
        <h2 className="heading2 text-center md:text-left">
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <div className="flex flex-col items-center space-y-5 md:items-start">
          <p className="paragraph mt-5 max-w-[470px] text-center md:text-left">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>

          <Button />
        </div>
      </div>

      <div className="flex-start relative ml-0 mt-14 flex-1 md:ml-10 md:mt-0">
        <img src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
