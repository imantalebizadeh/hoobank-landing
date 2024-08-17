import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="mb-6 mt-6 flex flex-wrap items-center justify-center sm:mb-20 sm:justify-between">
      {stats.map((stat) => (
        <div key={stat.id} className="flex items-center">
          <div className="flex items-center space-x-8">
            <h4 className="xs:leading-3-[53px] font-poppins text-[30px] font-semibold leading-[43px] text-white xs:text-[40px]">
              {stat.value}
            </h4>
            <h6 className="text-gradient ml-3 font-poppins text-[15px] font-normal uppercase leading-[21px] xs:text-[20px] xs:leading-[26px]">
              {stat.title}
            </h6>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
