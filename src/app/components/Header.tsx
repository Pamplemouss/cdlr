import React from "react";

const Header = ({ title, content }: { title: string; content?: string }) => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 font-medium text-white bg-slate-700 -skew-x-12 rounded-lg  py-3 px-7 shadow shadow-black/50 relative overflow-hidden">
        <span className="w-2 h-full bg-slate-500 absolute left-0 top-0"></span>
        <div className="w-full text-center text-sm">{title}</div>
        {content && <div className="text-xs mt-2">{content}</div>}
      </div>
    </div>
  );
};

export default Header;
