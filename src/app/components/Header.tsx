import React from "react";

const Header = ({ title, content }: { title?: string; content?: string }) => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 font-medium text-white bg-slate-700 -skew-x-12 rounded-lg  py-3 px-7 shadow shadow-black/50 relative overflow-hidden">
        <span className="w-2 h-full bg-slate-500 absolute left-0 top-0"></span>
        {title && (
          <div className="w-full text-center text-sm mb-2">{title}</div>
        )}
        
        {content && <div className="text-xs">{content}</div>}
      </div>
    </div>
  );
};

export default Header;
