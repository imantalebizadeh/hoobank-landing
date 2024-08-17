import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <a href="#">
      <div className="flex-center bg-blue-gradient relative h-[140px] w-[140px] cursor-pointer rounded-full">
        <div className="flex-center absolute inset-[2px] rounded-full bg-primary">
          <div className="text-gradient font-poppins text-[18px] font-medium capitalize leading-[23px]">
            get <img src={arrowUp} className="inline" /> <br /> started
          </div>
        </div>
      </div>
    </a>
  );
};

export default GetStarted;
