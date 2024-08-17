import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const FooterLinks = () => {
  return (
    <>
      {footerLinks.map(({ title, links }) => (
        <div key={title} className="h-auto">
          <h4 className="mb-5 font-poppins text-[18px] font-medium leading-[27px] text-white">
            {title}
          </h4>
          <ul className="list-none">
            {links.map((link, index) => (
              <li
                key={link.name}
                className={`cursor-pointer font-poppins text-[16px] font-normal leading-[24px] text-dimWhite hover:text-white ${
                  index !== links.length - 1 ? "mb-3" : "mb-0"
                } `}
              >
                <a href="#">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

const Footer = () => {
  return (
    <section className="flex-center padding-y flex-col gap-y-7 divide-y-2 divide-[#3F3E45]">
      <div className="flex w-full flex-col items-start justify-between md:flex-row">
        <div className="mb-10 flex flex-1 flex-col justify-start gap-y-5">
          <img
            src={logo}
            alt="Logo of HookBank"
            className="h-[72px] w-[266px]"
          />
          <p className="paragraph max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 grid-rows-footerColumns gap-10 sm:gap-40 md:grid-cols-3 md:grid-rows-1">
          <FooterLinks />
        </div>
      </div>

      {/* copyright and social medias */}
      <div className="flex w-full flex-col items-center justify-between gap-10 pt-6 sm:flex-row">
        <p className="cursor-pointer font-poppins text-[13px] font-normal leading-[24px] text-dimWhite sm:text-[16px]">
          Copyright{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-3 inline"
          >
            <path
              d="M8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0ZM8 13.8182C4.79185 13.8182 2.18182 11.2081 2.18182 8C2.18182 4.79185 4.79185 2.18182 8 2.18182C11.2081 2.18182 13.8182 4.79185 13.8182 8C13.8182 11.2081 11.2081 13.8182 8 13.8182ZM10.1613 9.32829L11.3408 10.4239L10.7465 10.9441C10.002 11.5954 9.05105 11.9543 8.06887 11.9543C5.86204 11.9543 4.06662 10.1959 4.06662 8.03462C4.06662 5.87833 5.86204 4.124 8.06887 4.124C9.05185 4.124 9.99964 4.47949 10.7374 5.12502L11.31 5.62611L10.1796 6.75709L9.67774 6.31367C9.24596 5.93236 8.67469 5.72233 8.06887 5.72233C6.74335 5.72233 5.66495 6.75964 5.66495 8.03454C5.66495 9.31454 6.74335 10.3559 8.06887 10.3559C8.668 10.3559 9.23935 10.1425 9.67774 9.75527L10.1613 9.32829Z"
              fill="white"
              fillOpacity="0.6"
            />
          </svg>
          2021 HooBank. All Rights Reserved.
        </p>

        <div className="flex gap-10">
          {socialMedia.map((social) => (
            <a key={social.id} href={social.link}>
              <img
                src={social.icon}
                alt={social.id}
                aria-label={`${social.id} of HookBank`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
