import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="feedback-card my-5 flex max-w-[370px] flex-col justify-between gap-10 rounded-[20px] px-10 py-[60px]">
      <img src={quotes} className="h-[27.6px] w-[42.6px] object-contain" />

      {/* card text */}
      <p className="h-[128px] w-[290px] font-poppins text-[18px] font-normal leading-[32px] text-white">
        {content}
      </p>

      {/* user image */}
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />

        <div className="flex flex-col">
          <h4 className="font-poppins text-[20px] font-semibold leading-[32px] text-white">
            {name}
          </h4>
          <h6 className="font-poppins text-[16px] font-normal leading-[32px] text-dimWhite">
            {title}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
