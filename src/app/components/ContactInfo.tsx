import React from "react";

const ContactInfo = ({
  color,
  icon,
  text,
  link,
}: {
  color: string;
  icon: string;
  text: string;
  link?: string;
}) => {
  return (
    <div className="flex items-center w-10/12 bg-white/10 rounded-lg -skew-x-12 h-12 border border-white/40 shadow-[0_0_5px_3px] shadow-white/10 backdrop-blur">
      <div
        className={`${color} w-12 rounded-l-lg h-12 flex justify-center items-center text-lg`}
      >
        <i className={`${icon} [text-shadow:_0_0_2px_black]`}></i>
      </div>
      <div className="text-sm text-center grow text-white">
        {link ? (
          <a href={link} className="underline text-white">
            {text}
          </a>
        ) : (
          <>{text}</>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
