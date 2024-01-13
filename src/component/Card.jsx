import React, { useContext, useState } from "react";
import { LuPaperclip } from "react-icons/lu";
import { T1, T2, T3, gallery, profile } from "../../data";
import { FullCardContext } from "../context/Poppercontext.jsx";
const Card = (props) => {
  const { icon, title, description, name, date, comment, index,isOpen,onOpen } = props;
  const { setPopperOpen, popperOpen } = useContext(FullCardContext);

  // bg-amber-50  border-amber-400
  function handleColorChange(index) {
    setPopperOpen(!popperOpen);
    onOpen();
  }

  return (
    <span
      className={`justify-center ${isOpen ? "bg-amber-50 border-amber-400" : ""} items-stretch border flex max-w-[326px] flex-col p-3 rounded-xl border-solid mb-4`}
    >
      <div className="justify-between items-stretch flex w-full gap-5">
        <span className="bg-white bg-opacity-0 flex justify-between gap-1.5 rounded-xl items-start">
          <img
            loading="lazy"
            src={icon === "T1" ? T1 : icon == "T2" ? T2 : T3}
            className="aspect-[1.04] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-zinc-800 text-sm font-semibold grow whitespace-nowrap">
            {title}
          </div>
        </span>
        <span
          className="text-amber-600 text-right text-xs whitespace-nowrap justify-center items-stretch border aspect-ratio-16/9 px-2.5 py-1 rounded-xl border-solid border-amber-600 self-start cursor-pointer"
          onClick={()=>handleColorChange(index)}
        >
          Open
        </span>
      </div>
      <div className="text-stone-500 text-xs whitespace-nowrap mt-2">
        {description?.length > 47
          ? description.substring(0, 47) + "..."
          : description}
      </div>
      <span className="items-stretch flex justify-between gap-2 mt-4">
        <span className="items-stretch flex justify-between gap-1.5 px-1">
          <img
            loading="lazy"
            src={profile}
            className="aspect-[0.75] object-contain object-center w-3 fill-stone-500 overflow-hidden shrink-0 max-w-full"
          />
          <div className="justify-center text-stone-500 text-xs font-medium my-auto">
            {name}
          </div>
        </span>
        <div className="justify-center text-stone-500 text-xs">{date}</div>
      </span>
      <span className="justify-between items-stretch flex w-full gap-5 mt-3">
        <span className="items-stretch flex justify-between gap-1.5 p-px">
          <img
            loading="lazy"
            src={gallery}
            className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-stone-500 text-xs font-[510] self-start">
            <LuPaperclip size={16} className="text-[#666666]" />
          </div>
        </span>
        <div className="justify-center text-[#666666] text-right text-xs font-medium">
          {comment} Comment
        </div>
      </span>
    </span>
  );
};

export default Card;
