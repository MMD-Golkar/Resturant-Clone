import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { ContactInfo, OpeningHours, QuickLinks } from "../lists";
import { Link } from "react-router-dom";

// icons stay in the component, the data stays in lists.js
const ContactIcons = {
  email: FaRegEnvelope,
  phone: FaPhoneAlt,
  location: FaMapMarkerAlt,
};

const getContactHref = ({ type, value }) => {
  if (type === "email") return `mailto:${value}`;
  if (type === "phone") return `tel:${value.replace(/\s/g, "")}`;
  return null;
};

const Socials = [
  { id: "facebook", Icon: FaFacebookF },
  { id: "twitter", Icon: FaTwitter },
  { id: "youtube", Icon: FaYoutube },
  { id: "instagram", Icon: FaInstagram },
];

function FooterHeading({ children }) {
  return (
    <h5 className="inline-block border-y border-[#8a6a45] px-5 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase md:px-0">
      {children}
    </h5>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#0b0d0f] text-white">
      {/* big brown circle behind the left column (lg and up only) */}
      <div className="hidden lg:block absolute top-24 -left-48 size-144 rounded-full bg-[#967259] xl:-left-56 xl:size-168" />

      {/* dotted pattern (lg and up only) */}
      <div className="hidden lg:block absolute bottom-8 right-1/4 w-72 h-36 opacity-40 bg-[radial-gradient(#9ca3af_1.5px,transparent_1.5px)] bg-size-[18px_18px]" />

      <div
        className="
          relative z-10 mx-auto px-6 py-16
          flex flex-col items-center text-center gap-16
          md:grid md:grid-cols-2 md:items-start md:text-left md:gap-x-10 md:gap-y-12 md:px-12
          lg:grid-cols-[22rem_1fr_1fr_1fr] lg:px-8 lg:gap-x-8
          xl:grid-cols-[24rem_1fr_1fr_1fr] xl:px-12 xl:gap-x-12 xl:text-base
        "
      >
        {/* ABOUT + CONTACT */}
        <div className="flex flex-col items-center md:items-start md:col-start-1 md:row-start-1 lg:pt-32 lg:pr-6">
          <p className="text-sm leading-relaxed max-w-lg md:max-w-sm lg:max-w-60 xl:max-w-xs xl:text-base">
            There are many majority have suffered alteration in have suffered
            alteration majority have in some form, humour or randomised words.
          </p>

          <ul className="mt-6 flex flex-col items-center gap-4 text-sm md:items-start xl:text-base">
            {ContactInfo.map((item) => {
              const Icon = ContactIcons[item.type];
              const href = getContactHref(item);
              return (
                <li
                  key={item.id}
                  className="flex flex-col items-center gap-1 md:flex-row md:gap-4"
                >
                  {Icon && <Icon className="shrink-0" />}
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-[#dcbfae] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="lg:max-w-48 xl:max-w-60">
                      {item.value}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center md:items-start md:col-start-2 md:row-start-1 lg:col-start-2 lg:pt-10">
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="flex flex-col items-center gap-3 text-sm md:items-stretch md:w-full lg:w-36 xl:w-44 xl:text-base">
            {QuickLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                  className="flex items-center justify-between hover:text-[#dcbfae] transition-colors"
                >
                  {link.label}
                  <FaChevronRight className="hidden md:block text-xs text-gray-300" />
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between">
              <Link
                to="/shop"
                className="rounded-lg bg-[#dcbfae] px-3 py-1.5 text-black hover:bg-[#c9a893] transition-colors"
              >
                Buy Now
              </Link>
              <FaChevronRight className="hidden md:block text-xs text-gray-300" />
            </li>
          </ul>
        </div>

        {/* OPENING HOURS */}
        <div className="flex flex-col items-center md:items-start md:col-start-1 md:row-start-2 md:px-0 lg:col-start-3 lg:row-start-1 lg:pt-10">
          <FooterHeading>Opening Hours</FooterHeading>
          <ul className="flex flex-col gap-6 text-sm xl:text-base">
            {OpeningHours.map((h) => (
              <li key={h.id}>
                {h.days} {h.time}
              </li>
            ))}
          </ul>
        </div>

        {/* SPONSORS */}
        <div className="flex flex-col items-center md:items-start md:col-start-2 md:row-start-2 lg:col-start-4 lg:row-start-1 lg:pt-10">
          <FooterHeading>Sponsors</FooterHeading>
          <div className="grid grid-cols-2 gap-x-16 gap-y-6 md:gap-x-6 md:gap-y-3 lg:gap-x-4 lg:gap-y-2">
            {/*Sponsors.map((sponsor) => (
              <img
                key={sponsor.id}
                src={sponsor.imgURL}
                alt={sponsor.name}
                draggable={false}
                className="h-24 w-28 object-contain md:h-14 md:w-24 lg:h-12 lg:w-20 xl:h-14 xl:w-24"
              />
            ))*/}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="w-full md:col-start-1 md:row-start-3 md:border-t md:border-white/20 md:pt-6 lg:border-0 lg:row-start-2 lg:pt-0 lg:self-end">
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0 lg:max-w-60 xl:max-w-xs xl:text-base">
            Copyright © 2026, Myass lol &amp;
            Developed by <span className="font-bold">Mohammad hossein Golkar</span>
          </p>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-6 md:col-start-2 md:row-start-3 md:self-end md:border-t md:border-white/20 md:pt-6 md:w-full lg:col-start-2 lg:col-span-3 lg:row-start-2 lg:justify-end lg:border-0 lg:pt-0 lg:self-end">
          {Socials.map(({ id, Icon }) => (
            <span
              key={id}
              aria-label={id}
              title={`${id} profile coming soon`}
              className="text-white/70"
            >
              <Icon />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
