import Button from "./Button";

const CTA = () => {
  return (
    <section
      className="flex-center margin-y padding box-shadow bg-black-gradient-2 flex-col rounded-[20px] max-sm:gap-10 max-sm:text-center sm:flex-row"
      style={{ marginBlockStart: "6rem" }}
    >
      <div className="flex flex-grow flex-col gap-5">
        <h2 className="heading2">Let’s try our service now!</h2>
        <p className="paragraph max-w-[470px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <Button />
    </section>
  );
};

export default CTA;
