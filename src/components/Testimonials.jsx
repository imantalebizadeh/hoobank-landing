import { feedback } from "../constants";
import FeedbackCard from "../components/FeedbackCard";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="flex-center padding-y flex-col">
      {/* gradient */}
      <div
        className="absolute left-[1500px] top-[3300px] h-[544.07px] w-[436.52px] rotate-[47.46deg] transform rounded-[200px] blur-[325px]"
        style={{
          background: "linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)",
        }}
      ></div>

      <div className="relative z-[1] m-6 flex w-full flex-col items-center justify-between max-sm:gap-5 sm:mb-16 md:flex-row">
        <h1 className="heading2 text-center md:text-left">
          What people are <br className="hidden sm:block" /> saying about us
        </h1>
        <p className="paragraph max-w-[450px] text-center md:text-left">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-between">
        {feedback.map((feedbackCard) => (
          <FeedbackCard key={feedbackCard.id} {...feedbackCard} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
