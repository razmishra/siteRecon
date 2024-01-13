import React from "react";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { data } from "../../data";

const Notes = () => {
  return (
    <>
      <div className="items-stretch bg-white flex max-w-[350px] flex-col px-3 py-2.5">
        <span className="items-center flex w-full justify-between gap-5 mt-4">
          <div className="text-stone-500 text-sm font-medium leading-6 my-auto">
            <span className="">Base View Notes</span>
            <span className=" text-xs text-stone-500"> ({data.length})</span>
          </div>
          <span className="justify-between rounded bg-amber-400 self-stretch flex gap-1 px-3 py-2 items-start cursor-pointer">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c73f570950b0dc96fbadea4865866889a4525a7909eb24b3581af8ee9d9d784?"
              className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-800 text-center text-xs font-medium self-stretch grow whitespace-nowrap ">
              New Note
            </div>
          </span>
        </span>
        <div className="items-stretch flex justify-between gap-1 mt-2">
          <span className="items-stretch flex justify-between gap-2.5 py-1.5">
            <div className="rounded border bg-white flex w-4 shrink-0 h-4 flex-col border-solid border-neutral-300" />
            <div className="text-stone-500 text-xs font-medium leading-4 grow shrink basis-auto">
              Select notes
            </div>
          </span>
          <div className="items-stretch self-center flex gap-1 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a018b75adb322b914bdb0a7e6ffee263bebe7878572e59f56088dab1ff6e2b1?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="justify-center items-center flex w-6 shrink-0 h-6 flex-col">
              <HiMiniEllipsisVertical />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
