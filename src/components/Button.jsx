const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient cursor-pointer rounded-xl px-6 py-4 font-poppins text-[18px] font-medium capitalize text-primary outline-none ${styles}}`}
    >
      get started
    </button>
  );
};

export default Button;
